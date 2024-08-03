FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .
COPY .env .env
RUN apk --no-cache add ca-certificates

EXPOSE 3000

CMD ["node", "dist/app.js"]
