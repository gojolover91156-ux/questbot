const { ActivityType } = require('discord.js');

function setStatus(client) {
  client.user.setPresence({
    activities: [
      {
        name: 'custom',
        type: ActivityType.Custom,
        state: 'Serving 2 Karan'
      }
    ],
    status: 'idle'
  });
}

module.exports = { setStatus };
