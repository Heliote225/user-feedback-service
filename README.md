# 🗣️ User Feedback Service

> API REST NestJS pour collecter, consulter et gérer des avis utilisateurs associés à des produits, avec Prisma et PostgreSQL.

---

## 🚀 Fonctionnalités

- ✅ CRUD sur les produits
- ✅ Création de feedbacks (note + commentaire)
- ✅ Lecture des feedbacks avec pagination, tri, filtres
- ✅ Suppression multiple de feedbacks
- ✅ Base de données relationnelle PostgreSQL (via Prisma ORM)
- ✅ Documentation Swagger à `/api`

---

## 🛠️ Stack technique

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Node.js](https://nodejs.org/)

---

## 📦 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-nom/user-feedback-service.git
cd user-feedback-service

```
### 2. Installer les dépendances

```bash
npm install
```
### 3. Configurer la base de données
Créer une base PostgreSQL nommée feedback_db localement, puis configure le fichier `.env` :

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
### 6. Démarrer le serveur

```bash
npm run start:dev
```
### 8. Tester l'API
Vous pouvez tester l'API en utilisant Postman ou tout autre outil de test d'API, ou directement via Swagger.

Pour Postman : [http://localhost:3000](http://localhost:3000)

Pour Swagger : [http://localhost:3000/api](http://localhost:3000/api)
### 7. Accéder à l'API via Swagger
Ouvrir votre navigateur et aller sur [http://localhost:3000/api](http://localhost:3000/api) pour accéder à l'interface de test de Swagger.

#### Exemples de requêtes
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
- **Supprimer des feedbacks** : 
```http
DELETE /feedback
Content-Type: application/json

{
  "ids": [1, 2, 3]
}
```
- **Filtrer les feedbacks** : 
```http
GET /feedback?productId=1&sort=rating&order=desc&page=1&limit=10
```
ou
```http
GET /feedback?product_id=1&rating=5
```

### 8. Liste des routes disponibles
| Méthode | Route                | Description                          |
|---------|----------------------|--------------------------------------|
| POST    | /product             | Créer un nouveau produit             |
| GET     | /product             | Lire tous les produits                |
| GET     | /product/:id         | Lire un produit par ID                |
| PUT     | /product/:id         | Mettre à jour un produit par ID       |
| DELETE  | /product             | Supprimer plusieurs produits          |
| DELETE  | /product/:id         | Supprimer un produit par ID           |
| POST    | /feedback            | Créer un nouveau feedback             |
| GET     | /feedback            | Lire tous les feedbacks               |
| GET     | /feedback/:id        | Lire un feedback par ID               |
| DELETE  | /feedback            | Supprimer plusieurs feedbacks         |
| DELETE  | /feedback/:id        | Supprimer un feedback par ID           |
---

### 9. Structure du projet

``` plaintext
user-feedback-service/
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

### 10. Ajouter Docker
Pour exécuter le service avec Docker, créez un fichier `Dockerfile` à la racine du projet :

```dockerfile
# Dockerfile
FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
```
Ensuite, créez un fichier `docker-compose.yml` pour configurer PostgreSQL :

```yaml
# docker-compose.yml
version: '3.8'
services:
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: feedback_db
    ports:
      - "5432:5432"
  
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: "postgresql://postgres:postgres@db:5432/feedback_db?schema=public"
```
### 11. Lancer Docker
Pour lancer l'application avec Docker, exécutez la commande suivante dans le terminal :

```bash
docker-compose up --build
```

### License
Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.
### Contribuer
Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou une pull request. Toute contribution est la bienvenue !
### Auteurs
- [Heliote ZAOULY](https://www.linkedin.com/in/heliote-zaouly)