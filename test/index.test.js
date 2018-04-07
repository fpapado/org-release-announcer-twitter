const {createRobot} = require('probot');
const app = require('../lib/index');
const payload = require('./fixtures/release.published');

// Massive thanks to https://probot.github.io/docs/testing/
describe('org-announcer', () => {
  let robot;
  let github;
  let announce;

  beforeEach(() => {
    // Create a robot instance
    robot = createRobot();

    // Mock out announcer
    announce = jest.fn().mockReturnValue(Promise.resolve({}));

    // Initialise app
    app(announce)(robot);

    // NOTE: not used atm, leaving for posterity
    // Mock out the Github API (for replying to it with our probot)
    // github = {
    // issues: {
    // createComment: jest.fn().mockReturnValue(Promise.resolve({}))
    // }
    // };

    // Pass the mocked out Github API to the robot instance
    // robot.auth = () => Promise.resolve(github);
  });

  describe('release is published', () => {
    it('calls the announcer with the payload contents', async () => {
      // NOTE: this currently breaks :/
      // Simulates delivery of a payload
      await robot.receive({event: 'release', payload});
      await expect(announce).toHaveBeenCalledTimes(1);
    });
  });
});
