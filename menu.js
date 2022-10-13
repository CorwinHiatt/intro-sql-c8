import pg from 'pg'
import readline from 'readline-sync'
const { Pool } = pg

import { creds } from "./credential2.js"

const pool = new Pool(creds);

const query = `select * from customers `

pool.query(query, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
    console.table(data.rows)
    pool.end()
})



