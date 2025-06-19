# Étape 1 : builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# GÉNÉRATION DU CLIENT PRISMA AVANT BUILD
RUN npx prisma generate
RUN npm run build

# Étape 2 : image finale
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev

# Prisma client généré doit être copié aussi
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

CMD ["node", "dist/main"]
