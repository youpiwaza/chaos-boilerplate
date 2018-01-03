# Chaos boilerplate

 

## Installation
From command line, after cloning repo
> npm i

> gulp

> gulp w

Enjoy


## Main commands

gulp
- gulp												/ Default / Compile html (pugjs)
- gulp w											/ Watch for html, sass & js changes to compile. Update browser
- gulp test											/ Default / Compile stuff in /tests

npm
- install package 									/ > npm i <package_name>
-- install dev package								/ > npm i -D <package_name>
- update 											/ > npm install npm@latest -g
- update packages 									/ > npm update
- Deduplicate dependancies							/ > npm dedupe
- Check if everything is up to date // should return nothing / > npm outdated



## Main ressources locations
html (pugjs) 										> /src & src/templates
css (sass & bourbon)								> /src/styles/base
js													> src/scripts



## Techno used
- node												/ https://nodejs.org/en/
- npm												/ https://www.npmjs.com/
- gulp												/ http://gulpjs.com/
// Html templates compilation
-- gulp-pug											/ https://www.npmjs.com/package/gulp-pug
	
- git												/ https://git-scm.com/
-- github											/ https://github.com/youpiwaza
-- gitkraken										/ https://www.gitkraken.com/

- html
-- html 5 boilerplate								/ https://html5boilerplate.com/
-- pugss (ex jade)									/ https://pugjs.org/

- css
-- normalize										/ https://www.npmjs.com/package/node-normalize-scss
-- sass												/ http://sass-lang.com/
--- bourbon											/ http://bourbon.io/
---- neat											/ http://neat.bourbon.io/
---- bitters										/ http://bitters.bourbon.io/
---- refills										/ http://refills.bourbon.io/

- js
-- uglifyer											/ https://github.com/mishoo/UglifyJS2 / https://github.com/terinjokes/gulp-uglify
-- concat											/ https://www.npmjs.com/package/gulp-concat
-- ES6 via babel                  					/ https://www.npmjs.com/package/gulp-babel 
--- babel-core 
--- gulp-babel 
--- gulp-sourcemaps 

- sublim text 3 									/ https://www.sublimetext.com/3
-- emmet 											/ https://emmet.io/blog/sublime-text-3/
-- package control 									/ https://packagecontrol.io/
-- sass syntax										/ https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20Sass
-- json syntax										/ https://github.com/ColibriApps/MonokaiJsonPlus
-- monokai ext. theme for color .md					/ https://github.com/jonschlinkert/sublime-monokai-extended
-- pug & pug lint									/ https://github.com/benedfit/SublimeLinter-contrib-pug-lint



### Links refs. / Thanks
folder / files / misc
- editor config										/ http://editorconfig.org/
- git attributes 									/ https://git-scm.com/docs/gitattributes
- modernizr											/ https://modernizr.com/

git horsesh*t
- https://stackoverflow.com/questions/11451535/gitignore-is-not-working

gulp
- TODO / Clean gulpfile.js & dedicated tasks files 	/ https://makina-corpus.com/blog/metier/2015/make-your-gulp-modular

html
- font-icons
- multi language BP									/ https://www.nomensa.com/blog/2010/7-tips-for-multi-lingual-website-accessibility

js
- hypens & fouc										/ https://github.com/mnater/Hyphenopoly

optimisation
- html tips											/ http://www.monitis.com/blog/30-tips-to-optimize-htmlcssimages-for-smooth-web-experience/
- best practices									/ https://www.webpagefx.com/blog/web-design/20-html-best-practices-you-should-follow/
- images src set									/ https://www.alsacreations.com/article/lire/1621-responsive-images-srcset.html
- viewport stuff									/ https://www.alsacreations.com/article/lire/1490-comprendre-le-viewport-dans-le-web-mobile.html
- pagespeed images reco								/ https://developers.google.com/speed/docs/insights/OptimizeImages
- images via gulp									/ https://www.joe-pagan.com/blog/google-pagespeed-optimising-decorative-template-images
- global loading & displaying						/ https://www.filamentgroup.com/lab/performance-rwd.html
- fouc prevention									/ http://johnpolacek.com/2012/10/03/help-prevent-fouc/
- online testers
-- pagespeed
-- pingdom											/ https://tools.pingdom.com/
-- website optimization 							/ http://websiteoptimization.com/services/analyze/
-- w3c												/ https://validator.w3.org/

sass
- Atomic / CSS conventions
- Smaccs / CSS conventions


### TODO
Legend:
Todo / ☐
WIP / ✅
Done / ✔
Love yah / soon / ❤
Nah / ✘



.											  status / priorities
misc
- 404												✔
- google analytics									☐
- vignettes IE										☐ ❤		browserconfig.xml (html5bp) / https://msdn.microsoft.com/library/dn455106.aspx
- multi linguisme									☐
- Autorisation crawler dossier images
	pour moteurs de recherche						☐

dev Env
- linters											☐
- Script img pour srcset							☐
-- Tableau variables 320 640 960 1280px				☐
-- Image de base + resize aux bonnes dims. 			☐


html / pug
- compo images + texte								✔ // Cleaner shame.scss
-- remplacer include par blocks / extend			✔
- meta description & keywords						☐


js
- browsersync link									☐ ❤
- Usual librairies 									☐
-- Hammer.js / Touch events 						☐
-- Select / radio / etc. normalizers 				☐
- set up conventions								☐
-- http://www.ecma-international.org/ecma-262/6.0/	☐
-- https://github.com/feross/standard				☐
-- https://github.com/airbnb/javascript				☐
- Remettre import Hyphenopoly au propre				☐


sass
- breakpoints responsive							☐ ❤ // revoir, cleaner
- créer variables de bases (colors, fonts, etc.)	☐ ❤
- mixins											☐ ❤
-- media queries

- font inclusions, manage font styles imports		☐
-- ex: _fonts.scss > -LightItalic ; use array

- toolbox page style 								☐
-- listes puces custom fa w. :before \truc			☐


Final check
- documentation										☐




#### TODO DONE

gulp
- live reload										✔
-- watch + cache									✔

html
- images											✔
-- utiliser srcset									✔
-- refaires images aux dimensions classiques		✔
---  320px											✔	//  320w
---  640px											✔	//  640w
---  960px											✔	//  960w
--- 1280px											✔	// 1280w
- gestion img src pour mobile						✔

js
- basic js files									✔
- jQuery											✔
- minifier & uglyfier								✔
- gestion FOUC	in & out							✔
-- in												✔
-- out 												✔

misc
- recup bases mah-skeleton 							✔
- coloration syntaxique pugjs						✔
- recup bases chaos		 							✔
- revoir indentation tous (tab 4)					✔
- proper # markdown									~
- page toolbox										  
-- Basic images management							✔  
-- Advanced images management						✔ 
-- containers / grid management						✔ 

- server pagespeed css horsh*t						✘
-- https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery?hl=en
-- https://developers.google.com/speed/pagespeed/module/
-- https://modpagespeed.com/doc/filter-prioritize-critical-css
--- or just fuck it, send css once for all website, this sounds so fucking retarded if your website has more than one page

sass
- bourbon & co										✔
-- bourbon											✔
-- neat												✔
-- refills											✘ // unavailable to npm for now >.>
- Modernizr, Normalize.css 							✔
- normalize (ci besoin ek bourbon)					✔
- load css asynchronously							✔ / https://github.com/filamentgroup/loadCSS/blob/master/README.md
													  / https://www.npmjs.com/package/fg-loadcss?notice=MIvGLZ2qXNAEF8AM1kvyFWL8p-1MwaU7UpJd8jcG
Final check
- pagespeed											✔
-- fix css/js preventing display					✘ / Added, pagespeed gives 0 fucks / brainwashing to force pagespeed plugin install on servers
-- image optimize (wat -_-)							✔
-- browser cache									✔
-- autoriser compression							✔
-- html minify complet								✔
-- minifier hyphenopoly js x2						✔
- pingdom											✔
- websiteoptimization								✔
- http://www.webpagetest.org/						✔
- w3c												✔