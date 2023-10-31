pipeline{
    agent any
    options {
        ansiColor('xterm')
    }

    stages {
        stage("Running test project"){
            agent {
                docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}
            }
            environment {
            HOME = "${env.WORKSPACE}"
            }
            steps { 
                sh 'npm i'
                sh 'npm run cy:run:chrome'
            }
        }
    }
}