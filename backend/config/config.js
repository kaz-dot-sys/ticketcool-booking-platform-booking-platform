require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    port: process.env.PORT || 3000,
    apiKeys: {
        amadeus: process.env.AMADEUS_API_KEY,
        sabre: process.env.SABRE_API_KEY,
    },
};

module.exports = config;