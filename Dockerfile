# Gunakan image Node.js versi stabil (versi 18)
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies (termasuk bcryptjs)
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Expose port yang digunakan aplikasi (Cloud Run default 8080)
EXPOSE 8080

# Jalankan aplikasi dengan perintah npm start
CMD ["npm", "start"]
