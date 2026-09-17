FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json ./
RUN npm install

COPY backend/package.json ./backend/
RUN npm install --prefix backend --omit=dev

COPY public ./public
COPY src ./src
COPY backend ./backend
COPY postcss.config.js tailwind.config.js ./

ENV CI=false
RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["node", "backend/src/server.js"]
