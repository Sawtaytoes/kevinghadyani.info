module.exports = (grunt) ->

	########################################
	## Location Vars
	########################################

	# Stores global root locations for non-duplication purposes
	permLocations =
		src: 'app/'
		dest: 'public/'
		temp: 'temp/'

	# Master object containing all file and folder locations
	locations =

		# Root Directories
		root:
			src: permLocations.src
			dest: permLocations.dest
			temp: permLocations.temp

			storage:
				dest: permLocations.dest
			site:
				dest: '<%= locations.root.dest %>'
				files: [
					expand: true
					cwd: '<%= locations.root.temp %>'
					src: '**'
					dest: '<%= locations.root.site.dest %>'
					# filter: 'isFile'
				]

			bower: 'bower_components/'
			foundation: '<%= locations.root.bower %>foundation/'
			jquery: '<%= locations.root.bower %>jquery/'
			rem_unit_polyfill: '<%= locations.root.bower %>rem-unit-polyfill/'
			respondjs: '<%= locations.root.bower %>respond/'

		# Assets
		assets:
			src: '<%= locations.root.src %>assets/'
			dest: '<%= locations.root.dest %>assets/'

		# Pages
		pages:
			src: '<%= locations.root.src %>pages/'
			dest: '<%= locations.root.dest %>'

		# Sass & CSS
		sass:
			src: '<%= locations.assets.src %>sass/'
			files: [
				expand: true
				cwd: '<%= locations.sass.src %>'
				src: '**/*.sass'
				dest: '<%= locations.css.dest %>'
				ext: '.css'
				filter: 'isFile'
			]
			includes: [
				'<%= locations.scss.foundation.src %>'
				'<%= locations.scss.src %>'
			]
			watch: '<%= locations.sass.src %>*'
		scss:
			src: '<%= locations.assets.src %>scss/'
			watch: '<%= locations.scss.src %>*'

			foundation:
				src: '<%= locations.root.foundation %>scss/'
		css:
			src: '<%= locations.assets.dest %>css/app.css'
			dest: '<%= locations.assets.dest %>css/'
			files: [
				expand: true
				cwd: '<%= locations.css.dest %>'
				src: '**/*.css'
				dest: '<%= locations.css.dest %>'
				filter: 'isFile'
			]

			ie8:
				src: '<%= locations.css.src %>'
				dest: '<%= locations.css.dest %>app-ie8.css'

		# Fonts
		font:
			src: '<%= locations.assets.src %>font/'
			dest: '<%= locations.assets.dest %>font/'
			files: [
				expand: true
				cwd: '<%= locations.font.src %>'
				src: '**'
				dest: '<%= locations.font.dest %>'
				filter: 'isFile'
			]
			watch: '<%= locations.font.src %>**'

		# Images
		img:
			src: '<%= locations.assets.src %>img/'
			dest: '<%= locations.assets.dest %>img/'
		imagemin:
			files: [
				expand: true
				cwd: '<%= locations.img.src %>'
				src: '**'
				dest: '<%= locations.img.dest %>'
				filter: 'isFile'
			]
		gif:
			files: [
				expand: true
				cwd: '<%= locations.img.src %>'
				src: '**/*.gif'
				dest: '<%= locations.img.dest %>'
				filter: 'isFile'
			]
			watch: '<%= locations.img.src %>**/*.gif'
		jpg:
			watch: '<%= locations.img.src %>**/*.jpg'
		png:
			watch: '<%= locations.img.src %>**/*.png'

		# CoffeeScript & JavaScript
		coffee:
			src: '<%= locations.assets.src %>coffee/'

			app:
				src: '<%= locations.coffee.src %>*'
				watch: '<%= locations.coffee.app.src %>'

		js:
			src: '<%= locations.assets.src %>js/'
			dest: '<%= locations.assets.dest %>js/'

			modernizr:
				src: '<%= locations.js.foundation.vendor.src %>modernizr.js'
				dest: '<%= locations.js.dest %>modernizr.js'

			ie:
				src: '<%= locations.js.src %>ie/'
				dest: '<%= locations.js.dest %>ie.js'
				files: [
					'<%= locations.js.ie.src %>selectivizr.js'
					# '<%= locations.js.ie.src %>svgeezy.js' # No SVGs on this site
					'<%= locations.root.respondjs %>dest/respond.min.js'
				]

			foundation:
				src: '<%= locations.root.foundation %>js/'
				dest: '<%= locations.js.vendor.dest %>'
				files: [
					'<%= locations.root.jquery %>jquery.min.js'
					'<%= locations.js.foundation.vendor.src %>jquery.cookie.js'
					'<%= locations.js.foundation.vendor.src %>jquery.autocomplete.js'
					'<%= locations.js.foundation.vendor.src %>fastclick.js'

					'<%= locations.js.foundation.scripts.src %>foundation.js'
					'<%= locations.js.foundation.scripts.src %>foundation.abide.js'
					'<%= locations.js.foundation.scripts.src %>foundation.accordion.js'
					'<%= locations.js.foundation.scripts.src %>foundation.alerts.js'
					'<%= locations.js.foundation.scripts.src %>foundation.clearing.js'
					'<%= locations.js.foundation.scripts.src %>foundation.dropdown.js'
					'<%= locations.js.foundation.scripts.src %>foundation.interchange.js'
					'<%= locations.js.foundation.scripts.src %>foundation.joyride.js'
					'<%= locations.js.foundation.scripts.src %>foundation.magellan.js'
					'<%= locations.js.foundation.scripts.src %>foundation.offcanvas.js'
					'<%= locations.js.foundation.scripts.src %>foundation.orbit.js'
					'<%= locations.js.foundation.scripts.src %>foundation.reveal.js'
					'<%= locations.js.foundation.scripts.src %>foundation.tab.js'
					'<%= locations.js.foundation.scripts.src %>foundation.tooltips.js'
					'<%= locations.js.foundation.scripts.src %>foundation.topbar.js'

					'<%= locations.js.foundation.vendor.src %>placeholder.js'
				]

				scripts:
					src: '<%= locations.js.foundation.src %>foundation/'
				vendor:
					src: '<%= locations.js.foundation.src %>vendor/'

			jquery:
				src: '<%= locations.root.jquery %>jquery.min.js'
				dest: '<%= locations.js.dest %>jquery.js'

			vendor:
				src: '<%= locations.js.src %>vendor/'
				dest: '<%= locations.js.dest %>vendor.js'
				files: [
					# '<%= locations.js.jquery.src %>' # Usually do this but will be pulling jQuery from a CDN
					'<%= locations.js.vendor.dest %>' # Foundation JS files
					'<%= locations.js.vendor.src %>*'
				]

			app:
				src: '<%= locations.js.app.dest %>'
				dest: '<%= locations.js.dest %>app.js'

		# Jade
		jade:
			src: '<%= locations.pages.src %>'
			dest: '<%= locations.pages.dest %>'
			files: [
				expand: true
				cwd: '<%= locations.jade.src %>'
				src: '*.jade'
				dest: '<%= locations.jade.dest %>'
				ext: '.html'
				filter: 'isFile'
			]
			watch: '<%= locations.jade.src %>**/*.jade'


	########################################
	## Project Configuration
	########################################

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		locations: locations


		########################################
		## Clean
		########################################

		clean:

			# Assets
			assets: '<%= locations.assets.dest %>*'

			# Pages
			pages: '<%= locations.jade.dest %>**/*.html'

			# Temp
			temp: '<%= locations.root.temp %>'


		########################################
		## Copy
		########################################

		copy:

			# Assets
			font:
				files: '<%= locations.font.files %>'
			gif:
				files: '<%= locations.gif.files %>'

			# Temp
			temp_to_dest:
				files: '<%= locations.root.site.files %>'


		########################################
		## Compass
		########################################

		compass:
			options:
				sassDir: '<%= locations.sass.src %>'
				cssDir: '<%= locations.css.dest %>'
				importPath: '<%= locations.sass.includes %>'
				app: 'stand_alone'
				debugInfo: false
				relativeAssets: true
			dev:
				options:
					environment: 'development'
					outputStyle: 'expanded'
					noLineComments: false
			prod:
				options:
					environment: 'production'
					outputStyle: 'compressed'
					noLineComments: true


		########################################
		## String Replace (Parse CSS files for REM)
		########################################

		"string-replace":
			rem_units:
				options:
					replacements: [
						pattern: /([0-9.]*)(rem)/gm,
						replacement: (match, p1, p2, offset, string) ->
							return p1*16 + 'px'
					]
				files: '<%= locations.css.ie8.dest %>': '<%= locations.css.ie8.src %>'


		########################################
		## Autoprefixer
		########################################

		autoprefixer:
			options:
				browsers: [
					'last 2 version'
					'> 1%'
					'ie 8'
					'ie 9'
					'ie 10'
					'ie 11'
				]
			css:
				files: '<%= locations.css.files %>'


		########################################
		## CSSO
		########################################

		csso:
			css:
				files: '<%= locations.css.files %>'


		########################################
		## Imagemin
		########################################

		imagemin:
			dev:
				options:
					optimizationLevel: 0
				files: '<%= locations.imagemin.files %>'
			prod:
				options:
					optimizationLevel: 3
				files: '<%= locations.imagemin.files %>'


		########################################
		## Coffee
		########################################

		coffee:
			options:
				bare: true
				join: true
			app:
				files: '<%= locations.js.app.dest %>': '<%= locations.coffee.app.src %>'


		########################################
		## Uglify
		########################################

		uglify:
			options:
				mangle: false
			modernizr:
				files: '<%= locations.js.modernizr.dest %>': '<%= locations.js.modernizr.src %>'
			ie:
				files: '<%= locations.js.ie.dest %>': '<%= locations.js.ie.files %>'
			foundation:
				files: '<%= locations.js.foundation.dest %>': '<%= locations.js.foundation.files %>'
			vendor:
				files: '<%= locations.js.vendor.dest %>': '<%= locations.js.vendor.files %>'
			app:
				files: '<%= locations.js.app.dest %>': '<%= locations.js.app.src %>'


		########################################
		## Jade
		########################################

		jade:
			dev:
				options:
					data:
						debug: true
					pretty: true
				files: '<%= locations.jade.files %>'
			prod:
				options:
					data:
						debug: false
				files: '<%= locations.jade.files %>'


		########################################
		## Watch
		########################################

		watch:
			options:
				event: 'all'
				livereload: 35745
				noBeepOnReload: true

			# CSS
			sass:
				files: '<%= locations.sass.watch %>*'
				tasks: 'css_dev'
			scss:
				files: '<%= locations.scss.watch %>*'
				tasks: 'css_dev'

			# Images
			copy_gif:
				files: '<%= locations.gif.watch %>'
				tasks:  'copy:gif'
			imagemin:
				files: [
					'<%= locations.jpg.watch %>'
					'<%= locations.png.watch %>'
				]
				tasks: 'imagemin'

			# Fonts
			font:
				files: '<%= locations.font.watch %>'
				tasks: 'copy:font'

			# JS
			coffee:
				files: '<%= locations.coffee.app.watch %>'
				tasks: 'coffee:app'

			# Jade
			jade:
				files: '<%= locations.jade.watch %>'
				tasks: 'jade:dev'


		########################################
		## Grunt Tasks
		########################################

		# Default
		grunt.registerTask 'default', [
			'dev'
			'watch'
		]

		# Dev
		grunt.registerTask 'dev', [

			# Clean
			'clean_generated'

			# CSS
			'css_dev'

			# Images
			'copy_img'
			'imagemin:dev'

			# JS
			'compile_js'

			# Jade
			'jade:dev'
		]

		# Prod
		grunt.registerTask 'deploy', [

			# Switch to Temp Build Directory
			'use_temp_dir'

			# CSS
			'compass:prod'
			'string-replace'
			'autoprefixer:css'
			'csso:css'

			# Images
			'copy_img'
			'imagemin:prod'

			# JS
			'compile_js'
			'uglify:app'

			# Jade
			'jade:prod'

			# Switch Back to Dest Build Directory
			'use_dest_dir'

			# Clean out generated files to make room for newly generated files
			'clean_generated'

			# Copy site from temp to public
			'copy:temp_to_dest'

			# Temp
			'clean:temp'
		]


		########################################
		## Prod Build Tasks
		########################################

		# Switch dest var to temp for building
		grunt.registerTask 'use_temp_dir', ->
			locations.root.dest = locations.root.temp

		# Switch dest var back to storage dest for building
		grunt.registerTask 'use_dest_dir', ->
			locations.root.dest = locations.root.storage.dest


		########################################
		## Shard Build Tasks
		########################################

		grunt.registerTask 'clean_generated', [
			'clean:assets'
			'clean:pages'
		]

		grunt.registerTask 'css_dev', [
			'compass:dev'
			'string-replace'
			'autoprefixer:css'
		]

		grunt.registerTask 'copy_img', [
			'copy:font'
			'copy:gif'
		]

		grunt.registerTask 'compile_js', [
			'uglify:modernizr'
			'uglify:ie'
			'uglify:foundation'
			'uglify:vendor'
			'coffee'
		]


		########################################
		## Load Plugins
		########################################

		grunt.loadNpmTasks 'grunt-autoprefixer'
		grunt.loadNpmTasks 'grunt-contrib-clean'
		grunt.loadNpmTasks 'grunt-contrib-coffee'
		grunt.loadNpmTasks 'grunt-contrib-compass'
		grunt.loadNpmTasks 'grunt-contrib-copy'
		grunt.loadNpmTasks 'grunt-contrib-imagemin'
		grunt.loadNpmTasks 'grunt-contrib-jade'
		grunt.loadNpmTasks 'grunt-contrib-uglify'
		grunt.loadNpmTasks 'grunt-contrib-watch'
		grunt.loadNpmTasks 'grunt-csso'
		grunt.loadNpmTasks 'grunt-string-replace'
