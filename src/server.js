const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

//const { send } = require('express/lib/response');

const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = 'parola'  

dbconfig = {
    user          : "utilizator",
    password      : mypw,
    connectString : "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SID= XE)))"
};

app.post('/api/select', async (req, res) => {
    const receivedString = req.body.message; 
    console.log('Received select query:', receivedString);
    await res.json(await sendQuery(receivedString));
});

app.post('/api/update', async (req, res) => {
    const receivedString = req.body.message; 
    console.log('Received update query:', receivedString);
    const data = await sendQuery(receivedString,req.body.commit);
});

async function sendQuery(query,commit=false) {
    try {
        const connection = await oracledb.getConnection (dbconfig);
        const result = await connection.execute(
            query
        );

        if(commit){
            console.log('commited');
            await connection.commit();
        }

        await connection.close();
        return result.rows;
    }
    catch (err) {
        console.error(err);
    }
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
