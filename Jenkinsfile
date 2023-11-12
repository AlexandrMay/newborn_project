pipeline{
    agent {
        docker { image 'cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1'}
    }
    environment {
        HOME = "${env.WORKSPACE}"
    }
    options {
        ansiColor('xterm')
    }

    stages {
        stage ("Init dependensies") {
            steps {
                sh 'npm i'
            }
        }
        stage ("Run tests") {
            parallel {
                stage ("Run on Chrome") {
                    steps {
                        sh 'npm run cy:run:chrome'
                    }
                }
                stage ("Run on Edge") {
                    steps {
                        sh 'npm run cy:run:edge'
                    }
                }
            }
        }
    }

    post {
        always {
            // sh 'npm run generate:report'
            // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            cleanWs()
        }
    }
}