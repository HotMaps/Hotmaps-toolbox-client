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
  
  stage('Deploy') {
    if (env.BRANCH_NAME == 'develop') {
      echo "Deploying to DEV platform"  
	  sshagent(['sshhotmapsdev']) {
        sh 'cd'
        sh 'ssh -o StrictHostKeyChecking=no -l iig hotmapsdev.hevs.ch "/var/hotmaps/pull_commit_frontend.sh \$COMMIT_ID"'
      }
      sshPublisher(publishers: [sshPublisherDesc(configName: 'hotmapsdev', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 900000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/var/hotmaps/toolbox-client/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
      sshagent(['sshhotmapsdev']) {
        sh 'cd'
        sh 'ssh -o StrictHostKeyChecking=no -l iig hotmapsdev.hevs.ch "/var/hotmaps/deploy_frontend.sh"'
      }
    } else if (env.BRANCH_NAME == 'master') {
      echo "Deploying to PROD platform"
      echo "Deployment to PROD is currently disabled"
    } else {
      echo "${env.BRANCH_NAME}: not deploying"
    }
  }
}
