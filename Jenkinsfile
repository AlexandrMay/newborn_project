pipeline {
    agent {
        docker { image 'docker pull cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1' }
    }

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'cy:run'
            }
        }
    }
}