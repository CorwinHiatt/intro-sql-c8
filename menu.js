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
    let query = ''
    let results = ''
    //1 select * from customers 
    switch (answer) {
        case "1":
            query = `SELECT first_name,last_name FROM customers`;
            const rows = await runQuery(query);
            console.table(rows.rows);
            break
        case '2':
            query = `INSERT INTO customers(
                first_name, "last_name", phone, email)
               VALUES ('Tmmybob', 'Aligarky', '9712679344', 'corwin@brosiphcacode.com');`
            results = await runQuery(query)
            console.log('user added')
            break;
        //2 add a new customer 
        case '3':
            query =`UPDATE public.customers
            SET  first_name='CORy', last_name='hello',
            email='jon@brosiphcacode.com' , phone= '888267777', 
            updated_at=NOW()
            WHERE customer_id=1` 
            results = await runQuery(query)
            console.log('customer updated')
            break;
        //3 update that customer 

        default:
            console.log('wat!!!')
            break;
    }
}
