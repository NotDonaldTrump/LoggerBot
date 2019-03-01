# LoggerBot for Discord

A [Discord](https://discordapp.com/) bot that logs messages sent to a server including attachments.
It saves it to a 'log.log' file and is available to server admins across the internet.
Anybody who has the link however is able to access the log.

# You REQUIRE member consent before logging messages as it is against Discord's TOC's



The log format looks like so:

| Channel         | Username      | Message                               |
| --------------- |:-------------:| -------------------------------------:|
| `"general-chat"`  | `"Parton#8122"` | `said "<message>"`                      |


# Installation 

To use and install LoggerBot you require [Node.js](https://nodejs.org/en/download/).

Onto the installation!

1. Clone or download this repository.
2. Edit the `config.js` file and replace the bot token and bot activity. Default activity is `Watching Server`.
3. Open a `CMD` window and `CD` to your directory then execute the command `npm install` to install the dependencies.
4. Invite the bot to your server you wish to log.
5. Once completed run it using the following command: `node logbot.js`.

If it is not online check your connection and steps taken.




