async function sendSelectQuery(query){
    await fetch('http://localhost:3000/api/select',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message: query}),
    })
    .then(response => response.json())
    .then(data => {
        currentData.currentHeaderNames.length = 0;
        currentData.currentTableData.length = 0;  
        currentData.currentTableData = data;
        currentData.currentTableName = document.getElementById('searchTableInput').value;
        document.getElementById('tableCredentials').innerHTML =`<h2>${currentData.currentTableName} <b>Details</b></h2>`;
        generateTable(data);
        generateOptions();
    })
    .catch(error => console.error(error));
}

async function sendUpdateQuery(query, commit=true){
    await fetch('http://localhost:3000/api/update',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: query,
            commit: commit
        }),
    })
    .catch(error => console.error(error));
}
