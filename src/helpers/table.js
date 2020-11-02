const createTable = ( tableInfo ) =>{

    tableValues = Object.entries(tableInfo);
    const lengths = {};

    tableValues.forEach(arr => {
        const key = arr[0];
        lengths[key] = key.length;
        arr[1].forEach((val)=>{
            if (val.length > lengths[key] && val.length < 42) lengths[key] = val.length;
        });
    });

    const correctValue = (value, key) =>{
        if(value.length !== lengths[key]){
            if(value.length > 41) value = 'Check level details';
        } 
        return value.padStart(lengths[key]); 
    }

    const tableArr = tableValues[0][1].map((value, index)=>{
        let key = tableValues[0][0];
        value = correctValue(value, key);
        let row = `| ${value}|`;
        for(let i = 1; i<tableValues.length; i++){
            key = tableValues[i][0];
            let columnValue = tableValues[i][1][index];
            columnValue = correctValue(columnValue, key);
            row += ` ${columnValue}|`;
        }
        return row;
    });

    const headers = tableValues.map((arr)=>{
        let value = arr[0];;
        value = correctValue(value, value);
        return value + '| ';
    });

    const headersRow = '| ' + headers.join('') + '\n';

    let table1 = tableArr.slice(0, tableArr.length/2);
    let table2 = tableArr.slice(tableArr.length/2);
    table1 = '```yaml\n' + headersRow + table1.join('\n') + '```';
    table2 = '```yaml\n' + table2.join('\n') + '```';
    return [table1, table2];
}

module.exports = {
    createTable
}