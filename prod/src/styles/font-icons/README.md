# Fonts icons

Généré depuis <https://icomoon.io>.

Permet de fusionner et cropper des librairies de font icons et d'en faire des exports.

Permet également l'ajout de svg cutomisés, ou de retoucher des icônes existantes.



Les ressources (ttf, etc.) sont situées dans assets/fonts/IcoMoon/ , à la racine.

Attention de bien respecter les changements effectués lors de l'import :
-   Séparation des ressources dans le dossier assets
-   Les styles (générés en sass depuis l'export, petit bouton "roue crantée" à coté de générer) sont à placer dans leur propre dossier
-   variables.scss devient _variables.scss.
-   Penser à changer l'appel dans style.scss
-   Vu que c'est bien fait et que react ne gère pas les tirets "-" dans les noms de classe il faut les virer UNIQUEMENT de tous les noms de classes (R&R > '.icon-' par '.icon') ; et attention certains noms comportent d'autres tirets #joie
-   Remplacer [class^="icon-"], [class*=" icon-"] { par [class^="_icon"], [class*="_icon"] { à cause de l'obfuscation #balleDansLaBouche
