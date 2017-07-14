# Warhammer 40.000 _ Dark eldars / Drukhari Blog





##### Basic commands

gulp
- gulp												/ Default / Compile html (pugjs)
- gulp test											/ Default / Compile stuff in /tests

npm
- install package 									/ > npm i <package_name>
-- install dev package								/ > npm i -D <package_name>
- update 											/ > npm install npm@latest -g
- update packages 									/ > npm update



##### Main ressources locations
html (pugjs) 										> /src & src/templates
css (sass & bourbon)								> /src/styles
js													> src/scripts



##### Techno used
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

- sublim text 3 									/ https://www.sublimetext.com/3
-- emmet 											/ https://emmet.io/blog/sublime-text-3/
-- package control 									/ https://packagecontrol.io/
-- sass syntax										/ https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20Sass
-- json syntax										/ https://github.com/ColibriApps/MonokaiJsonPlus
-- monokai ext. theme for color .md					/ https://github.com/jonschlinkert/sublime-monokai-extended
-- pug & pug lint									/ https://github.com/benedfit/SublimeLinter-contrib-pug-lint



##### Links refs. / Thanks
gulp
- TODO / Clean gulpfile.js & dedicated tasks files 	/ https://makina-corpus.com/blog/metier/2015/make-your-gulp-modular

folder / files / misc
- editor config										/ http://editorconfig.org/
- git attributes 									/ https://git-scm.com/docs/gitattributes
- modernizr											/ https://modernizr.com/

html
- font-icons
- multi language BP									/ https://www.nomensa.com/blog/2010/7-tips-for-multi-lingual-website-accessibility

optimisation
- html tips											/ http://www.monitis.com/blog/30-tips-to-optimize-htmlcssimages-for-smooth-web-experience/
- best practices									/ https://www.webpagefx.com/blog/web-design/20-html-best-practices-you-should-follow/
- images src set									/ https://www.alsacreations.com/article/lire/1621-responsive-images-srcset.html

git horsesh*t
- https://stackoverflow.com/questions/11451535/gitignore-is-not-working



##### TODO
Legend:
Todo / ☐
WIP / ✅
Done / ✔
Love yah / ❤
Nah / ✘


misc										 status / priorities
- recup bases mah-skeleton 							✅ 3
- recup bases chaos		 							✅ 3
- page toolbox										✅ 2
-- créer variables de bases (colors, fonts, etc.)	✅  // check bases bourbon / neat
-- Images management								✔
-- containers management							✅

- 404												☐
- google analytics									☐
- proper # markdown
- vignettes IE										☐		browserconfig.xml (html5bp) / https://msdn.microsoft.com/library/dn455106.aspx

html
- compo images + texte								☐ 5
- meta description & keywords						☐


js
- browsersync link									☐
- minifier & uglyfier								☐
- gestion FOUC										☐

sass
- breakpoints responsive							☐
- mixins											☐
- font inclusions, manage font styles imports		☐
-- ex: _fonts.scss > -LightItalic ; use array
- toolbox page style 								☐

Final check
- pagespeed											☐
- w3c												☐



##### TODO DONE

gulp
- live reload										✔
-- watch + cache									✔

html
- images											✔
-- utiliser srcset									✔
-- refaires images aux dimensions classiques		✔
---  320px											☐	//  320w
---  640px											☐	//  640w
---  960px											☐	//  960w
--- 1280px											☐	// 1280w
- gestion img src pour mobile						✔

js
- basic js files									✔
- jQuery											✔

misc
- coloration syntaxique pugjs						✔
- revoir indentation tous (tab 4)					✔

sass
- bourbon & co										✔
-- bourbon											✔
-- neat												✔
-- refills											✘ // unavailable to npm for now >.>
- Modernizr, Normalize.css 							✔
- normalize (ci besoin ek bourbon)					✔
