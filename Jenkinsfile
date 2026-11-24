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
                bat 'if not exist index.html exit /b 1'
                bat 'if not exist styles.css exit /b 1'
                bat 'if not exist validate.js exit /b 1'
             }
         }
        stage('Deploy') {
            steps {
                echo 'Deploy stage completed'
            }
        }
    }
}