function generateTable(data) {
    
    const table = document.getElementById('dynamicTable');
    table.innerHTML = '';
    // Create the table header row using the keys of the first object in the array
    const tableHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach((key, index) => {
        const th = document.createElement('th');
        th.textContent = key; // Column name
        currentData.currentHeaderNames.push(key);
        headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    tableBody = document.createElement('tbody');
    // Create the table body rows using the values from each object in the array
    data.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(value => {
        const td = document.createElement('td')
        td.textContent = value; // Cell data
        tr.appendChild(td);
      });

      const td = document.createElement('td');
      td.innerHTML = '<a href="#" class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>'+
      '<a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>'+
        '<a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>';
        tr.appendChild(td);

      table.appendChild(tr);
    });
  }

function editRow(rowData){
    let query = `UPDATE ${currentData.currentTableName}
    SET `;
    for(let i=1; i<rowData.length; i++){
        query += `${currentData.currentHeaderNames[i]} = '${rowData[i]}', `
    }
    query = query.slice(0, -2); //eliminam ultimele 2 caractere
    query += `
    WHERE ${currentData.currentHeaderNames[0]} = '${rowData[0]}'`;
    return query;
}

function deleteRow(rowData) {
    let query = `DELETE FROM ${currentData.currentTableName} A
   WHERE `;
    for (let i = 1; i < rowData.length; i++) {
        query += `A.${currentData.currentHeaderNames[i]} = '${rowData[i]}' AND `
    }
    query = query.slice(0, -5); //eliminam ulttimul AND
    return query;
}

function getTableRowData(row) {
    if (!(row instanceof HTMLTableRowElement)) {
      throw new Error('Invalid argument. Provide a valid HTMLTableRowElement.');
    }
    const rowData = Array.from(row.cells)
    .slice(0,-1)
    .map(cell => cell.textContent.trim());
    return rowData;
}

function generateOptions(){
    const select = document.getElementById('colNames');

    select.innerHTML = '';

    currentData.currentHeaderNames.forEach((headerName) => {
        const option = document.createElement('option');
        option.value = headerName;
        option.textContent = headerName;
        select.appendChild(option);
    });
}