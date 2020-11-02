const { createTable } = require('./table');
const classes = require('../json/02 classes.json');

const createLevelRow = ( className, level ) => {
    const classInfo = classes[className];
    const tableInfo = classInfo['Class Features'][`The ${className}`].table;
    let returnMessage = `Class: ${className}\n`;
    for(const [key, value] of Object.entries(tableInfo)){
        returnMessage = returnMessage + `${key}: ${value[level - 1]}\n`
    }

    return '```yaml\n'+ returnMessage +'```';
}

const classesRetrival = (className, args, message) =>{
    switch(args[0]){
        case 'table':
            const classInfo = classes[className];
            const tableInfo = classInfo['Class Features'][`The ${className}`].table;
            const table = createTable(tableInfo);
            message.channel.send(table[0]);
            message.channel.send(table[1]);
            break; 
        case 'level':
            const level = args[1];
            const levelRow = createLevelRow(className, level);
            message.channel.send(levelRow);
            break;
    }
}

module.exports = {
    classesRetrival
};