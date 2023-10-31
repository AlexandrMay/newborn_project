pipeline{
    agent {
        docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}
    }
    environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage("Running test project"){
            steps {
                sh 'npm i'
                sh 'cy:run:chrome'
            }
        }
    }
}