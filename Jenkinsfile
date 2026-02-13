pipeline {
    agent any

    parameters {
        string(
            name: 'IMAGE',
            defaultValue: 'yathish047/fitstopweb',
            description: 'Docker Hub repo (user/repo)'
        )
        booleanParam(
            name: 'RUN_TESTS',
            defaultValue: true,
            description: 'Run unit tests'
        )
    }

    environment {
        DOCKER_CREDS = 'dockerhub-creds'
        SSH_CREDS    = 'ssh-deploy-key'

        DEPLOY_HOST  = 'your.deploy.host'
        DEPLOY_USER  = 'deploy'

        GIT_SHA      = ''
        IMAGE_TAG    = ''
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_SHA = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()

                    env.IMAGE_TAG = "${params.IMAGE}:${env.GIT_SHA}"

                    echo "Git SHA   : ${env.GIT_SHA}"
                    echo "Image Tag : ${env.IMAGE_TAG}"
                }
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Test') {
            when {
                expression { params.RUN_TESTS }
            }
            steps {
                sh 'npm run test --if-present'
            }
        }

        stage('Docker: build & push') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: env.DOCKER_CREDS,
                        usernameVariable: 'DH_USER',
                        passwordVariable: 'DH_PASS'
                    )
                ]) {
                    sh """
                        echo "\$DH_PASS" | docker login -u "\$DH_USER" --password-stdin
                        docker build -t "\${IMAGE_TAG}" .
                        docker push "\${IMAGE_TAG}"
                        docker logout
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: env.SSH_CREDS,
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    )
                ]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i "\$SSH_KEY" \
                        $DEPLOY_USER@$DEPLOY_HOST '
                            docker pull \${IMAGE_TAG} &&
                            docker rm -f fitstop || true &&
                            docker run -d \
                              --name fitstop \
                              -p 80:5173 \
                              --restart unless-stopped \
                              \${IMAGE_TAG}
                        '
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}