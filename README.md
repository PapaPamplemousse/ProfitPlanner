# ProfitPlanner

ProfitPlanner est une application web interactive conçue pour aider les utilisateurs à calculer la valeur future de leurs investissements mensuels. L'application permet de simuler différents scénarios de rendement et de générer des rapports détaillés avec des visualisations.

## Fonctionnalités

- Formulaire d'entrée pour saisir le montant d'investissement mensuel, le taux de rendement annuel, le nombre d'années d'investissement et la fréquence de capitalisation.
- Calcul de la valeur future des investissements avec intérêts composés.
- Calcul des revenus annuels générés après la période d'investissement.
- Graphiques montrant la croissance des investissements au fil du temps.
- Comparaison de différents scénarios de rendement (optimiste, pessimiste, modéré).
- Rapport détaillé incluant le montant total investi, le montant total des intérêts gagnés, la valeur future et les revenus annuels.
- Exportation du rapport au format PDF.

## Technologies utilisées

### Frontend

- HTML/CSS
- JavaScript (ES6+)
- React.js
- Chart.js

### Backend

- Node.js
- Express.js
- pdfkit

## Installation

1. Clonez le dépôt : `git clone https://github.com/votrecompte/profitplanner.git`
2. Installez les dépendances : `npm install`

## Utilisation

1. Démarrez le serveur backend : `npm run server`
2. Démarrez l'application frontend : `npm start`
3. Accédez à l'application sur `http://localhost:3000`

## Déploiement

L'application peut être déployée en utilisant Docker. Construisez l'image Docker avec `docker build -t profitplanner-app .` et exécutez un conteneur avec `docker run -p 3000:3000 profitplanner-app`.

## Contributeurs

- [PapaPamplemousse](https://github.com/PapaPamplemousse)

## Licence

Ce projet est sous licence [GNU GENERAL PUBLIC LICENSE](LICENSE).
