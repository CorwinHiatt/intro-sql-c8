import pg from 'pg'
import readline from 'readline-sync'
const { Pool } = pg

import { creds } from "./credential2.js"

const pool = new Pool(creds);

//const query = `select * from customers `


async function runQuery(query) {
    return await pool.query(query)

}

while (true) {
    const answer = readline.question("run what?")
    //1 select * from customers 
    switch (answer) {
        case "1":
            const query = `select * from customers `
            const rows = await runQuery(query)
            console.table(rows.rows)
            break
        case '2':
            break;
            //2 add a new customer 
        case '3':
            break;
            //3 update that customer 

            default:
                console.log('wat!!!')
        }
    }
    