module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		ngAnnotate: {
		    options: {
		        singleQuotes: true,
				//regexp: '^(ng\n?[\\ ]+(.*)|(module.*))$'
		    },
		    app: {
		        files: {
		            //'./public/min-safe/js/appFactory.js': ['./public/js/appFactory.js'],
					//'./public/min-safe/services.js': ['./app/js/services.js'],
		            './public/min-safe/js/directives.js': ['./app/js/directives/widget.js'],
		            './public/min-safe/js/widget-body.js': ['./app/js/directives/widget-body.js'],
		            './public/min-safe/js/controllers.js': ['./app/js/controllers/masterController.js', './app/js/controllers/categoriesController.js'],
		            //'./public/min-safe/js/categoriesController.js': ['./app/js/controllers/categoriesController.js'],
		            './public/min-safe/app.js': ['./app/js/app.js']
		        }
		    }
		},

		concat: {
		    js: { //target
		        src: ['./public/min-safe/app.js', './public/min-safe/js/*.js'],
		        dest: './public/min/app.js'
		    }
		},

		/*
		ngAnnotate: {
		    dist: {
		        files: [{
		                expand: true,
		                src: ['** / *.js', '!** / *.annotated.js'],
		                ext: '.annotated.js',
		                extDot: 'last'
		            }],
		    }
		},
		*/

		bower: {
			install: {
				options: {
					targetDir: './app/lib',
					layout: 'byComponent',
					install: true,
					verbose: true,
					cleanBowerDir: true
				}
			}
		},
	    //uglify


		uglify: {
		    js: { //target
		        src: ['./public/min/app.js'],
		        dest: './public/min/app.js'
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

		sass: {
            dist: {
                files: {
                    './public/css/main.css': './app/sass/main.scss'

                }
            }
        },


		watch: {
			ngAnnotate: {
				files: './app/js/**/*.js',
				tasks: "ngAnnotate"
			},
		    concat: {
		      files: ['./public/min-safe/app.js', './public/min-safe/js/*.js'],
		      tasks: "concat"
		    },
			scripts: {
				files: ['Gruntfile.js', './app/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				}
			},
			css: {
				files: './app/sass/**/*.scss',
				tasks: ['sass']
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: './app/sass',
					cssDir: './public/css',
					//config: 'config.rb',
					sourcemap: true
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'./app/js/**/*.js',
						'./public/tpl/**/*.html',
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

// defaultTasks
    grunt.registerTask('default', ["ngAnnotate", "concat", "uglify", "browserSync", "watch"]);

};