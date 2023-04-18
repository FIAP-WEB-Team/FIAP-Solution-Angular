## STAGE 1: Build ###
FROM node:18.10 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g npm@9.6.4
COPY . .
# RUN npm run build
CMD ["npm", "run", "build"]

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/fiapsolution /usr/share/nginx/html
EXPOSE 80 