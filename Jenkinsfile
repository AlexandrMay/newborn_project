pipeline{
    agent {
        docker { image 'cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1'}
    }
    stages {
        stage("Running test project"){
            steps {
                sh sudo chown -R 110:115 "/.npm"
                sh 'npm i'
                sh 'cy:run:chrome'
            }
        }
    }
}