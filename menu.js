import pg from 'pg'
import readline from 'readline-sync'
const { Pool } = pg


const pool = new Pool(
    {
        host: "sql.bocacode.com",
        database: "bocacode",
        user: "bocacode",
        password: "BocaCode1122BocaCode3344$$^^",
        port: 5432
    }
)

const query = `select * from customers `

pool.query(query, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
   // console.table(data.rows)
     pool.end()
})