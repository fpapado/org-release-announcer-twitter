# Deploying
[You can find a more template-y version of this on Glitch]().

Self-hosting would be my recommendation; I certainly don't want access to your data, and you likely have specific requirements for how to announce things :)

1) Fork/Clone/Copy this repository:
```shell
git clone https://fpapado/org-release-announcer-twitter
```
[Degit is a good tool for this](https://github.com/Rich-Harris/degit)

2) Make any customisations you want to `lib/twitterAnnouncer.js`.

3) Copy `.env.example` to `.env`. Use those files as reference whenever `.env` and API Keys are mentioned in the docs below.

3) See [https://botwiki.org/resource/tutorial/how-to-create-a-twitter-app/](https://probot.github.io/docs/deployment/) for how to get the keys for the Twitter App.

4) See [Probot's docs](https://probot.github.io/docs/deployment/#create-the-github-app) about the permissions and specifics of setting up the  Github App.
This app requires these **Permissions & events** for the GitHub App:

- Repository contents - **Read-only**
- Repository metadata - **Read-only**
  - [x] Check the box for **Release** events

5) See [Probot's docs for deployment](https://probot.github.io/docs/deployment/#deploy-the-app) for deployment options. Remember to also set the Twitter environment variables (as mentioned above), in addition to the Github App ones that it specifies.
