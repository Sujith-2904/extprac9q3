pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Resume Web Application'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Resume Files'
                sh 'test -f index.html'
                sh 'test -f styles.css'
                sh 'test -f validate.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage completed'
            }
        }
    }
}