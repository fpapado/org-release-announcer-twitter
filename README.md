# org-release-announcer-twitter

A GitHub App built with [probot](https://github.com/probot/probot) that announces releases to Twitter where it is installed.
Built based on [org-release-announcer](https://fpapado.com/org-release-announcer).

[![demo](docs/demo.png)]()

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Organisation
The library lives under `lib/index.js`.
It allows you to plug in "announcers" of the form:
```js
{
  announce: function(event)
}
```
In this case, the announcer posts things to Twitter. It is found under `lib/twitterAnnouncer.js`.
The root `index.js` is a sample app that links together the Twitter announcer and the app.

## How do I run this?
[You can find a more template-y version of this on Glitch]().

Self-hosting would be my recommendation; I certainly don't want access to your data, and you likely have specific requirements for how to announce things :)

1) Fork/Clone/Copy this repository:
```shell
git clone https://fpapado/org-release-announcer-twitter
```
[Degit is a good tool for this](https://github.com/Rich-Harris/degit)
2) Make any customisations you want to `lib/twitterAnnouncer.js`.

3) Copy `.env.example` to `.env`.

3) See https://botwiki.org/resource/tutorial/how-to-create-a-twitter-app/ for how to get the keys for the Twitter App.

4) See [docs/deploy.md](docs/deploy.md) about the permissions and specifics of setting up the  Github App.

## Testing
Currently, `robot.receive()` seems to break with our fixtures.

:warning: Note that this posts about the `org-release-announcer`. Refer to https://probot.github.io/docs/simulating-webhooks/ for how to generate your own fixtures, if needed.

You can verify that the robot works with a dry run (logs to console instead of posting):

```sh
npm run dryrun:simulate:release
```

If you want to verify the Twitter integration, you would have to make a post of the fixture:

```sh
npm run live:simulate:release
```
