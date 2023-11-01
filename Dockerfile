#stage 1
FROM node AS node
WORKDIR /app
RUN npm install -g npm@8.11
COPY . .
RUN npm install --force
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/khaddem /usr/share/nginx/html
