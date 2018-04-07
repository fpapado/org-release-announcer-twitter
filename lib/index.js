/** Probot that listens for release events and calls an announcer
 * @param {Object} announcer - an Announcer that gets the release data
 *  an Announcer is an object of shape {announce: function(event)}
 * @example
 * const app = require('org-release-announcer');
 * const logAnnouncer = {announce: (event) => console.log(event)};
 * app(logAnnouncer)(robot);
 */
module.exports = announcer => robot => {
  robot.log('Yay, the app was loaded!');

  robot.on(['release'], async context => {
    robot.log.info('Release spotted');
    robot.log.debug({payload: context.payload});
    try {
      await announcer.announce(context.payload);
      robot.log.info('Release announced!');
    } catch (e) {
      robot.log.error('Failed to announce release!', e);
    }
  });
};
