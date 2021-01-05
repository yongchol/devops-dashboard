FROM node:12.16.1-alpine as builder

WORKDIR "/app"

COPY ./package.json ./
RUN npm install
RUN npm install react-scripts@4.0.1 -g

COPY . .
RUN npm run build

FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html