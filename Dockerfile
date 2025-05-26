# Gunakan image Node versi stabil
FROM node:18

# Set workdir
WORKDIR /app

# Salin dan install dependencies
COPY package*.json ./
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Expose port Cloud Run
EXPOSE 8080

# Jalankan aplikasi
CMD ["npm", "start"]
