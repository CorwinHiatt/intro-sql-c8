// import pg, { Pool } from 'pg';
// import { database, password } from 'pg/lib/defaults';
// import client from 'pg/lib/native/client';
// const {Client,pool} = pg;
// await client.connect()

// const pool = new Pool(
//     {
//         host: "sql.bocacode.com"
//         database: "bocacode"
//         user: "bocacode"
//         password: "bocacode"
//         port: 5432

//     }
// )

import pg from "pg"
const { Client, Pool } = pg


    import {creds} from "./credential2.js"
    const pool = new Pool(creds)


const query = `select * from 
customers order by 
customers.customerid`

pool.query(query, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.table(data.rows)
    pool.end()
})