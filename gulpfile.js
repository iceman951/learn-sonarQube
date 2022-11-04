const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');
require('dotenv').config();

console.log(process.env.SONAR_QUBE_TOKEN);

gulp.task('default', (callback) => {
  sonarqubeScanner({
    serverUrl: 'http://localhost:9000',
    token: process.env.SONAR_QUBE_TOKEN,
    options: {
    },
  }, callback);
});