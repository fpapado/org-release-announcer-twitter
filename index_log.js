const logAnnouncer = require('./lib/logAnnouncer');
const makeRobot = require('./lib/index');

module.exports = makeRobot(logAnnouncer);
