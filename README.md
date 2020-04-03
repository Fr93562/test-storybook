# test-storybook

## Préambule

### Problème du mode watcher:

Si le nombre maximum de fichier est atteint en mode watch. Il sera nécessaire de modifier la limite du nombre maximum de fichiers observés:

https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached


### Installation de yarn :

L'installation des addons se font souvent via yarn, voici le tuto à suivre pour ubuntu:

https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/

## Addons ajoutés : 

### Knobs:

Addon officiel de Storybook:

* Il permet d'intéragir de manière dynamique avec les composants qui disposent d'input.
* Url du projet github: https://github.com/storybookjs/storybook/tree/master/addons/knobs

### Source

Addon officiel de Storybook:

* Il permet de voir le code source du composant.
* Url du projet github: https://github.com/storybookjs/storybook/tree/master/addons/storysource


### Accessibility

Addon officiel de Storybook:

* Il permet de tester le composant en fonction des standards du web.
* Url du projet github: https://github.com/storybookjs/storybook/tree/master/addons/a11y



### Docs

Addon officiel de Storybook:

* Aide à la documentation des composants, utilise le markdown.
* Url du projet github: https://github.com/storybookjs/storybook/tree/master/addons/docs

### Jest

Addon officiel de Storybook:

* IL permet de générer des tests sur les composants.
* Url du projet github: https://github.com/storybookjs/storybook/tree/master/addons/jest


#### Notes

* Les resultats des tests sont stockés dans le fichier ```.jest-test-results.json``` qui est ajouté au .gitignore.
