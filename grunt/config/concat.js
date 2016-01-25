module.exports = {
  libs: {
    files: {
      '<%= general.tempDir %>/libs.js': appendLibsPath([
        'jquery/dist/jquery.js',
        'angular/angular.js',
        'angular-route/angular-route.js',
        'angular-resource/angular-resource.js',
        'lodash/lodash.js',
      ])
    }
  },
  plugins: {
    files: {
      '<%= general.tempDir %>/plugins.js': appendLibsPath([
      ])
    }
  },
  source: {
    options: {
      process: true
    },
    files: [
      {
        '<%= general.tempDir %>/source.js': ['<%= general.srcDir %>/js/app/**/*.js']
      }
    ]
  },
  main: {
    files: [
      {
        '<%= general.buildDir %>/js/main.js': [
          '<%= general.tempDir %>/libs.js',
          '<%= general.tempDir %>/plugins.js',
          '<%= general.tempDir %>/source.js'
        ],
      }
    ]
  }

};

function appendLibsPath(libs) {
  return libs.map(function (path) {
                    return './src/libs/' + path;
                  });
}
