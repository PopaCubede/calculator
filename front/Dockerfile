FROM node:lts-alpine
ENV API_URL=http://172.168.0.2:5000
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]