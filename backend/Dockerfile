# Étape 1 : build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

# Étape 2 : exécution
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY package*.json ./
RUN npm install --omit=dev

# Nécessaire pour Prisma Client
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

ENV NODE_ENV production

# 👇 Applique la migration automatiquement en prod
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
