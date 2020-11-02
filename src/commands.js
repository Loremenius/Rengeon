const PREFIX = '!';
const { createSpellInfo } = require('./helpers/spellInfo');
const { classesRetrival } = require('./helpers/classesInfo');
const commandsInfo = 
`
Commands "variable": info

!spell "spell name": gives details of specified spell
!"class name" table: gives table of levels for specified class (Designed for full screen 1080p view)
!"class name" level "number": gives infomation for specified level of specified class
`

const commands = (message) => {
    if(message.author.bot) return;
    if( message.content.startsWith(PREFIX) ){
        let [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)

        CMD_NAME = CMD_NAME.toLowerCase();

        switch(CMD_NAME){
            case 'spell':
                const spellName = args.join(' ');
                const spellInfo = createSpellInfo(spellName);
                message.channel.send(spellInfo);
                break;
            case 'commands':
                message.channel.send('```' + commandsInfo + '```');
                break;
            case 'warlock': case 'wizard': case'fighter': case 'rogue': case 'cleric': case 'ranger':
            case 'monk': case 'barbarian': case'paladin': case 'sorcerer': case 'druid': case 'bard':
                let className = CMD_NAME;
                classname = className.charAt(0).toUpperCase() + className.slice(1);
                classesRetrival(classname, args, message);
                break;
                
        }
        
    }
}

module.exports = {
    commands
}