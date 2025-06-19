# 🗣️ User Feedback Service
![CI](https://github.com/Heliote225/user-feedback-service/actions/workflows/ci.yml/badge.svg)

> API REST NestJS pour collecter, consulter et gérer des avis utilisateurs associés à des produits, avec Prisma et PostgreSQL.

---

## Fonctionnalités

- ✅ CRUD sur les produits
- ✅ Création de feedbacks (note + commentaire)
- ✅ Lecture des feedbacks avec pagination, tri, filtres
- ✅ Suppression multiple de feedbacks
- ✅ Base de données relationnelle PostgreSQL (via Prisma ORM)
- ✅ Interface graphique Swagger à `/api` pour tester l'API

---

## Stack technique

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (optionnel)

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-nom/user-feedback-service.git
cd user-feedback-service
cd backend

```
### 2. Installer les dépendances

```bash
npm install
```
### 3. Configurer la base de données
Vous avez le choix entre utiliser une base de données PostgreSQL locale ou Docker.

**Avec Docker**:
```bash
docker-compose up -d
```
avec le fichier `docker-compose.yml` fourni, qui configure PostgreSQL avec les identifiants par défaut.

**Avec PostgreSQL localement**:

Pour configurer une base de données PostgreSQL localement, vous devez d'abord installer PostgreSQL sur votre machine. Ensuite, créez une base de données nommée `feedback_db` et un utilisateur avec les identifiants suivants :
- Nom d'utilisateur : `postgres`
- Mot de passe : `postgres`

Puis créer un fichier `.env` à la racine du projet et ajoutez la configuration de la base de données :

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/feedback_db?schema=public"
```
### 4. Lancer les migrations Prisma

```bash
npx prisma migrate dev --name init
```

### 5. Générer le client Prisma

```bash
npx prisma generate
```
### 6. Lancer les tests unitaires
```bash
npm run test
```

### 7. Démarrer le serveur

```bash
npm run start:dev
```
## Tester l'API
Vous pouvez tester l'API en utilisant Postman ou tout autre outil de test d'API, ou directement via Swagger.

Pour Postman : [http://localhost:3000](http://localhost:3000)

Pour Swagger : [http://localhost:3000/api](http://localhost:3000/api)
### 1. Accéder à l'API via Swagger
Ouvrir votre navigateur et aller sur [http://localhost:3000/api](http://localhost:3000/api) pour accéder à l'interface de test de Swagger.

### 2. Exemples de requêtes
- **Créer un produit** : 
```http
POST /product
Content-Type: application/json

{
  "name": "Chaussures"
}
```

- **Créer un feedback** : 
```http
POST /feedback
Content-Type: application/json

{
  "message": "Excellent produit",
  "rating": 5,
  "productId": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```
- **Lire les feedbacks** : 
```http
GET /feedback
```
- **Supprimer un feedback** : 
```http
DELETE /feedback/1
```
- **Filtrer les feedbacks** : 
```http
GET /feedback?productId=1&sort=rating&order=desc&page=1&limit=10
```
ou
```http
GET /feedback?product_id=1&rating=5
```

### 3. Liste des routes disponibles
| Méthode | Route                | Description                           |
|---------|----------------------|---------------------------------------|
| POST    | /product             | Créer un nouveau produit              |
| GET     | /product             | Lire tous les produits                |
| GET     | /product/:id         | Lire un produit par ID                |
| PUT     | /product/:id         | Mettre à jour un produit par ID       |
| DELETE  | /product/:id         | Supprimer un produit par ID           |
| POST    | /feedback            | Créer un nouveau feedback             |
| GET     | /feedback            | Lire tous les feedbacks               |
| GET     | /feedback/:id        | Lire un feedback par ID               |
| DELETE  | /feedback/:id        | Supprimer un feedback par ID          |
---

## Structure du backend
Voici la structure du projet backend :

``` plaintext
backend/
├── src/
│   ├── feedback/
│   │   ├── dto/          # Data Transfer Objects pour les feedbacks
│   │   ├── entities/     # Entités Prisma pour les feedbacks
│   │   ├── feedback.controller.ts  # Contrôleur pour les feedbacks
│   │   ├── feedback.module.ts      # Module pour les feedbacks
│   │   ├── feedback.service.ts     # Service pour la logique métier des feedbacks
│   ├── product/
│   │   ├── dto/          # Data Transfer Objects pour les produits
│   │   ├── entities/     # Entités Prisma pour les produits
│   │   ├── product.controller.ts  # Contrôleur pour les produits
│   │   ├── product.module.ts      # Module pour les produits
│   │   ├── product.service.ts     # Service pour la logique métier des produits
│   ├── app.module.ts    # Module principal de l'application
│   ├── main.ts          # Point d'entrée de l'application
├── prisma/
│   ├── schema.prisma    # Schéma Prisma pour la base de données
├── .env                 # Variables d'environnement
├── package.json         # Dépendances et scripts du projet
├── tsconfig.json        # Configuration TypeScript
├── README.md            # Documentation du projet
```
---

## License
Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.
## Contribuer
Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou une pull request. Toute contribution est la bienvenue !
## Auteurs
- [Heliote ZAOULY](https://www.linkedin.com/in/heliote-zaouly)
