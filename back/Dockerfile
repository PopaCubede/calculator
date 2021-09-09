FROM node:lts-alpine AS builder
ENV PORT=5000
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ["npm", "run", "swagger"]
RUN ["npm", "run", "build"]

FROM node:lts-alpine AS server
ENV PORT=5000
ENV NODE_ENV=production
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/build ./build
EXPOSE 5000
CMD ["npm", "run", "start"]