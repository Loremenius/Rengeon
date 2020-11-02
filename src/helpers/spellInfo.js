const spells = require('../json/spells.json');

const createSpellInfo = ( spellName ) =>{
    spellName = spellName.toLowerCase();

    const words = spellName.split(" ");

    const spell = words.map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');

    const spellInfo = spells[spell];
    if (spellInfo === undefined) return `There is no spell called ${spellName}`;

    const info = `${spell}: Level ${spellInfo.level} ${spellInfo.school} 
        \nRange: ${spellInfo.range} 
        \nComponents: ${spellInfo.components} 
        \nDuration: ${spellInfo.duration} 
        \n${spellInfo.description}`;

    return '```yaml\n' + info + '```';
}

module.exports = {
    createSpellInfo
}