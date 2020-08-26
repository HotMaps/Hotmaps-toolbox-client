node {
  // environment vars
  env.NODEJS_HOME = "${tool 'node10'}"
  env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

  stage('Pull') {
    checkout scm
    echo "${env.BRANCH_NAME}"
    sh 'node --version'
    sh 'npm --version'
  }

  // get commit id
  env.COMMIT_ID = sh(returnStdout: true, script: 'git rev-parse HEAD')

  stage('Build') {
    sh 'npm install'
    sh 'ng build'
  }

  stage('Test') {
    sh 'ng test --watch=false'
  }
}
