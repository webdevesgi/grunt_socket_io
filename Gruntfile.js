module.exports = function(grunt) {

	var path = require('path');

	grunt.loadNpmTasks('grunt-contrib-uglify'); // Minifier/Concaténer les fichiers JS
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // Minifier/Concaténer les fichier CSS
	grunt.loadNpmTasks('grunt-contrib-jshint'); // Compilateur JS
	grunt.loadNpmTasks('grunt-contrib-watch'); // Watcher d’événement
	grunt.loadNpmTasks('grunt-connect-socket.io'); // Socket.IO pour grunt
	grunt.loadNpmTasks('grunt-express'); // NodeJS pour grunt

	var jsDist = 'js/_built.js';
	var jsSrc = ['js/*.js', '!js/server.js', '!' + jsDist, '!js/jquery-1.11.1.min.js'];

    // Configuration de Grunt
    grunt.initConfig({
    	jshint: {
    all: ['Gruntfile.js', jsSrc]
	},
	uglify: {
	    options: {
	        separator: ';',
	        mangle: false
	    },
	    compile: {
	        src: jsSrc,
	        dest: jsDist
	    }
	},
	watch: {
	    scripts: {
	        files: ['Gruntfile.js', jsSrc],
	        tasks: ['scripts']
	    }
	},
	express: {
	    webappserver: {
	        options: {
	            server: path.resolve('js/server'),
	            keepalive: true,
	            port: 1337,
	            hostname: 'localhost',
	            showStack: true,
	        }
	    }
	}
    });

    grunt.registerTask('default', ['scripts', 'watch']);
	grunt.registerTask('scripts', ['jshint', 'uglify:compile']);
	grunt.registerTask('webappserver', ['express', 'express-keepalive']);
};