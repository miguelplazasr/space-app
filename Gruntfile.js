module.exports = function(grunt){

    var path = require('path');

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
					'./public/min-safe/services.js': ['./app/js/services.js'],
		            './public/min-safe/js/directives.js': [
						'./app/js/directives/widget.js',
						'./app/js/directives/widget-header.js',
						'./app/js/directives/widget-body.js',
						'./app/js/directives/widget-footer.js',
						'./app/js/directives/get-events.js',
						'./app/js/directives/loading.js',
						'./app/js/directives/mp-icon.js',
					],
		            //'./public/min-safe/js/widget-body.js': ['./app/js/directives/widget-body.js'],
		            './public/min-safe/js/controllers.js': [
						'./app/js/controllers/masterController.js',
						'./app/js/controllers/categoriesController.js'
					],
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
					targetDir: './public',
                    layout: function(type, component, source) {
                        var renamedType = type;
                        if (type == 'js') renamedType = 'js/lib';
                        else if (type == 'js/map') renamedType = 'js/lib';
                        else if (type == 'js/lang') renamedType = 'js/lib/lang';
                        else if (type == 'css') renamedType = 'css/lib';
                        else if (type == 'css/img') renamedType = 'css';
                        return path.join(renamedType);;
                    },
					install: true,
					verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
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
				files: './app/sass/*.scss',
				tasks: ['compass']
			}
		},

		compass: {
			dist: {
				options: {
					//sassDir: './app/sass',
					//cssDir: './public/css',
					config: 'config.rb',
					sourcemap: true
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'./app/js/**/*.js',
						'./app/sass/**/*.scss',
						'./views/**/*.html',
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
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

// defaultTasks
    //grunt.registerTask('default', ["ngAnnotate", "concat", "uglify", "bower", "browserSync", "watch"]);
    grunt.registerTask('default', ["ngAnnotate", "concat", "uglify", "bower"]);

    //grunt.registerTask('default', ["ngAnnotate", "concat", "uglify"]);

};