# 1TM1-Aspects-logique-et-programmation-PowerPc
## Présentation de l'équipe
 - **Quentin Servais**
 
## Description du projet

###### BESOIN DU CLIENT

Développer un site fonctionnel de vente de composants informatique. Le site doit être ergonomique et esthétique. Il doit également prévenir les incompatibilités entre composants afin d'aider ceux qui n'aurait pas les connaissances nécessaire.
 
###### FONCTIONNALITÉS PRINCIPALES
  - Un configurateur qui empeche les erreurs d'incompatibilité afin d'aider les personnes qui débutent.
  - Possibilité de comparer deux cartes graphiques entre elles sur une seconde page. Le but est d'aider une personne à se décider entre deux modèles.

###### FONCTIONNALITÉS SECONDAIRES
  - Tri des produits par ordre alphabétique.
  - Possibilité d'évaluer la configuration avec un système de score.
  - Une page permettant à l'utilisateur d'acheter la configuration qu'il a préalablement choisie.

## Aspects implémentés
La liste des aspects techniques qu'il faut implémenter pour mettre en place le projet, les aspects frontend (html, css, js, page web et fonctionnalités à proposer aux utilisateurs).
  - HTML : créer des pages pour le site.
  - CSS : site le plus esthétique possible, agréable à regarder.
  - JS : fonctions appelées lors du chargement d'une page, lors d'un appel via bouton ou lors d'un changement.

## Détail api rest
  - *slctCpu*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Renvoie un string dans la page html avec les données du cpu choisi.
    - **Endpoint** : Sélectionne et affiche les données du cpu que l'utilisateur à choisit avec le select.
    
  - *slctCM*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Renvoie un string dans la page html avec les données de la carte mère choisie.
    - **Endpoint** : Sélectionne et affiche les données de la carte mère que l'utilisateur à choisit avec le select.
    
  - *slctRAM*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Renvoie un string dans la page html avec les données de la RAM choisie.
    - **Endpoint** : Sélectionne et affiche les données de la ram que l'utilisateur à choisit avec le select.
    
  - *slctGPU*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : renvoie un string dans la page html avec les données de la carte graphique choisie.
    - **Endpoint** : sélectionne et affiche les données de la carte graphique que l'utilisateur à choisit avec le select.
    
  - *slctPSU*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Renvoie un string dans la page html avec les données de l'alimentation choisie.
    - **Endpoint** : Sélectionne et affiche les données de l'alimentation que l'utilisateur à choisit avec le select.
    
  - *compatibilite*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Renvoie un string dans la page html avec les composants à changer pour que ce soit compatible ou un message de confirmation que la configuration est bien compatible.
    - **Endpoint** : Vérifier la compatibilité des composants entre eux.
    
  - *evaluer*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Renvoie un string dans la page html avec un score et le composant le plus 'faible' de la configuration.
    - **Endpoint** : Avoir une estimation de la configuration et que changer pour l'améliorer.
    
  - *createOption*
  
    - **Paramètres** : Prend comme paramètres un **array** à parcourir et l'**id** ou l'on renvoie les données. 
    - **Format de réponse** : Renvoie un string comprenant les différentes options du select.
    - **Endpoint** : Créer les options du select en fonction de l'array parcouru.
    
  - *initialisation*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Fait appel à la fonction createOption qui renvoie un string avec les données du select et fait appel à une méthode d'array sort qui se base sur la fonction trierMarque.
    - **Endpoint** : Initialiser la page index en créant et triant les options des select par ordre alphabétique.
    
  - *initialisationVersus*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Fait appel à la fonction createOption qui renvoie un string avec les données du select et fait appel à une méthode d'array sort qui se base sur la fonction trierMarque.
    - **Endpoint** : Initialiser la page versus en créant et triant les options des select par ordre alphabétique.
    
  - *trierMarque*
  
    - **Paramètres** : Prend en paramètre deux objets et compare la propriété 'marque'.
    - **Format de réponse** : Retourne 1 si le premier objet est plus grand que le second -1 lorsque le second est plus grand que le premier sinon 0.
    - **Endpoint** : Combiné à la méthode sort cette fonction permet de trier par ordre alphabétique les objets.
    
  - *versus*
  
    - **Paramètres** : Prend en paramètre **slct** qui est un objet et **tabl** qui est un string correspondant à la gauche et à la droite du tableau.
    - **Format de réponse** : Renvoie un string dans le tableau avec les données et fait appel à la fonction comparer.
    - **Endpoint** : Remplir le tableau versus avec les données choisies par l'utilisateur.
    
  - *comparer*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Fait appel à la fonction **couleurs**.
    - **Endpoint** : Définir les valeurs des objets à comparer.
    
  - *couleur*
  
    - **Paramètres** : Prend en paramètre un **id** ou iront les données, **vT1** un number à comparer avec **vT2** l'autre number à comparer.
    - **Format de réponse** : Modification d'un attribut html.
    - **Endpoint** : Comparer visuellement à l'aide de vert et de rouge.
    
  - *acheter*
  
    - **Paramètres** : Aucun
    - **Format de réponse** : Fait appel au constructeur CreateObjet qui va définir une configuration, il retournera un string.
    - **Endpoint** : Créer un panier sous forme de tableau.
    
  - *CreateObjet*
  
    - **Paramètres** : cpu, cm, ram, gpu, psu sont chacun des objets.
    - **Format de réponse** : Retourne un nouvel objet.
    - **Endpoint** : Céer le nouvel objet config pour faciliter la création du panier.
    
  - *createTicket*
  
    - **Paramètres** : Prend un paramètre **frm**
    - **Format de réponse** : Renvoie un string avec certaines données du formulaire.
    - **Endpoint** : Créer un ticket client après la confirmation d'achat.
