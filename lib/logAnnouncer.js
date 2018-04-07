/** Prepare a status based on the release event
 * @see https://developer.github.com/v3/activity/events/types/#releaseevent
 *  for the data available
 */
const makeStatus = event =>
  `Just released ${event.release.tag_name} of ${event.repository.full_name}!
Find out more at ${event.release.html_url}.`;

async function announce(payload) {
  console.log(`
  Just released ${payload.release.tag_name} of ${payload.repository.full_name}!
  Find out more at ${payload.release.html_url}.
  `);
  return Promise.resolve({});
}

module.exports = {announce};
