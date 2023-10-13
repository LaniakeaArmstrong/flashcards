const mysql2 = require('mysql2')
const { default: password } = require('../../xd/pw')

export let pool = mysql2.createPool({
    host: "localhost",
    user: "laniakea",
    database: "flashcards",
    waitForConnections: true,
    connectionLimit: 7,
    maxIdle: 7,
    idleTimeout: 60000,
    password: password
})