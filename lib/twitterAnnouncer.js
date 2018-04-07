// Huge thanks to https://glitch.com/~twitterbot for this
const Twit = require('twit');

const config = {
  /* Be sure to update the .env file with your API keys.
   * See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app
   */
  twitter: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  }
};

const T = new Twit(config.twitter);

/** Prepare a status based on the release event
 * @see https://developer.github.com/v3/activity/events/types/#releaseevent
 *  for the data available
 */
const makeStatus = event =>
  `Just released ${event.release.tag_name} of ${event.repository.full_name}!
Find out more at ${event.release.html_url}.`;

const announce = event =>
  T.post('statuses/update', {status: makeStatus(event)});

// Export announcer object
module.exports = {announce};
