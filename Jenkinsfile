pipeline {
  agent any

  parameters {
    string(name: 'IMAGE', defaultValue: 'yathish047/Fitstopweb', description: 'Docker Hub repo (user/repo)')
    booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Run unit tests')
  }

  environment {
    DOCKER_CREDS = 'dockerhub-creds' // Jenkins username/password for Docker Hub
    SSH_CREDS    = 'ssh-deploy-key'         // Jenkins SSH key for remote deploy
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        script { def GIT_SHA = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim() }
      }
    }

    stage('Install & Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('Test (optional)') {
      when { expression { return params.RUN_TESTS } }
      steps { sh 'npm run test --if-present -- --runInBand' }
    }

    stage('Docker: build & push') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDS, usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
          script {
            IMAGE_TAG = "${params.IMAGE}:${GIT_SHA}"
            sh '''
              echo $DH_PASS | docker login -u $DH_USER --password-stdin
              docker build -t "$IMAGE_TAG" .
              docker push "$IMAGE_TAG"
              docker logout
            '''
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CREDS, keyFileVariable: 'SSH_KEY', usernameVariable: 'SSH_USER')]) {
          sh '''
            REMOTE_HOST=${DEPLOY_HOST:-your.deploy.host}
            REMOTE_USER=${DEPLOY_USER:-deploy}
            IMAGE="${params.IMAGE}:${GIT_SHA}"
            ssh -o StrictHostKeyChecking=no -i "$SSH_KEY" $REMOTE_USER@$REMOTE_HOST \
              "docker pull $IMAGE && docker rm -f org-info-hub || true && docker run -d --name org-info-hub -p 80:5173 --restart unless-stopped $IMAGE"
          '''
        }
      }
    }
  }

  post { always { cleanWs() } }
}
