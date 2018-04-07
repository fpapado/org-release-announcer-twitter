const twitterAnnouncer = require('./lib/twitterAnnouncer');
const makeRobot = require('./lib/index');

module.exports = makeRobot(twitterAnnouncer);
