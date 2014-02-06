[KevinGhadyani.info](http://kevinghadyani.info)
===

[TOC]

Technologies
---
- [Zurb Foundation 5](http://foundation.zurb.com/)
- [Jade](http://jade-lang.com/)
- [Sass](http://sass-lang.com/)
- [CoffeeScript](http://coffeescript.org/)

Tools Required to Build
---
- [Node.js](http://nodejs.org/download/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Ruby](http://www.ruby-lang.org/en/)
- [Compass](http://compass-style.org/)


Setup Environment
---
### Clone the repo
#### Dev
	git clone git@bitbucket.org:group3solutions/kevinghadyani.info.git -b develop
#### Prod
	git clone git@bitbucket.org:group3solutions/kevinghadyani.info.git

### Install Dependencies
_From inside the site directory_

	npm install
	bower install #(sudo bower install --allow-root)


Manual Deployment
---
### Dev
#### Update Repo
	git pull

#### Build
##### Automated
	grunt
##### Manual
	grunt dev

### Prod
#### Update Repo
	sudo git pull
#### Build
	sudo grunt deploy


Scripted Deployment
---
_From inside the site directory_

### Manual
	sudo git pull
	sudo grunt deploy
