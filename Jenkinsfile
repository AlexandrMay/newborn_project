pipeline{
    agent {
        docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}
    }

    environment {
        // Override HOME to WORKSPACE value
        HOME = "${WORKSPACE}"
        // or override npm's cache directory (~/.npm)
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage("Running test project"){
            steps {
                sh 'npm i --force'
                sh 'cy:run:chrome'
            }
        }
    }
}