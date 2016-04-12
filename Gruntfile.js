module.exports = function(grunt){
	
	grunt.initConfig({
		ngAnnotate: {
		    dist: {
		        files: [{
		                expand: true,
		                src: ['**/*.js', '!**/*.annotated.js'],
		                ext: '.annotated.js',
		                extDot: 'last'
		            }],
		    }
		},
		bower: {
			install: {
				options: {
					targetDir: 'app/lib',
					layout: 'byComponent',
					install: true,
					verbose: true,
					cleanBowerDir: true
				}
			}
		},
	    //uglify
		
		
	    uglify: {
	      js: {
	        files: [{
	          cwd: 'app/js/',
	          expand: true,
	          src: '*.js',
	          dest: 'js/min/'
	        }]
	      }
	    },
		
		/*
		uglify: {
			my_target: {
				files: {
					'js/scripts.min.js': ['app/js/app.js']
				}
			}
		},
		*/
		
		watch: {
			scripts: {
				files: ['app/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb',
					sourcemap: true
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'app/js/**/*.js',
						'tpl/**/*.html',
						'*.html'
					]
				},
				options: {
					server: {
						baseDir: './'
					},
					watchTask: true,
					debugInfo: true,
					logConnections: true,
					notify: true,
					ghostMode: {
						scroll: true,
						links: true,
						forms: true
					}
				}
			}
		}
		
	});

// loadNpmTasks
grunt.loadNpmTasks('grunt-bower-task');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-ng-annotate');

// defaultTasks
grunt.registerTask('default', ["browserSync", "watch"]);

};