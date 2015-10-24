# hashtag-tafeuille-client

### A simple Twitter Battle App
**[hashtag-tafeuille-client](https://github.com/MathieuDebit/hashtag-tafeuille-client)** is the client-side app for the **[hashtag-tafeuille](https://github.com/MathieuDebit/hashtag-tafeuille)** application, build in [React](https://facebook.github.io/react/) with the [Middleman Framework](https://middlemanapp.com). Developed by [Mathieu Débit](http://www.twitter.com/MathieuDebit) and designed by [Valentin Galmand](http://www.twitter.com/vgalmand).

### Summary
* [About](https://github.com/MathieuDebit/hashtag-tafeuille-client#about)
* [Getting started](https://github.com/MathieuDebit/hashtag-tafeuille-client#getting-started)
* [Connection to the server](https://github.com/MathieuDebit/hashtag-tafeuille-client#connection-to-the-server)
* [Contributing](https://github.com/MathieuDebit/hashtag-tafeuille-client#contributing)
* [The event](https://github.com/MathieuDebit/hashtag-tafeuille-client#the-event)


## About

**hashtag-tafeuille** is a simple Twitter battle app that provides in live for a counted time tweets containing certain keywords, counts them and displays the result.

![hashtag-tafeuille-client interface](http://i.imgur.com/XQHCVzp.png)

This application retreives data from the [hashtag-tafeuille](https://github.com/MathieuDebit/hashtag-tafeuille) server ([Node.js](http://nodejs.org/)) through [Socket.io](http://socket.io/), and updates the views thanks to the power of React.

![hashtag-tafeuille-client scoreboard](http://i.imgur.com/12YMx64.png)


## Getting started

> You will need the Middleman framework to run the source code. Install and configure it first: [https://middlemanapp.com](https://middlemanapp.com)

Clone the repo and install dependencies:

```
git clone git@github.com:MathieuDebit/hashtag-tafeuille-client.git
cd hashtag-tafeuille-client
bundle install
```

That's it! Everyting you have to know about how to work with a Middleman project is in the official documentation: [https://middlemanapp.com/basics/install/](https://middlemanapp.com/basics/install/).

- Start the server by running the following command, then visit [http://localhost:4567/](http://localhost:4567/).

```
middleman
```

- To have the static app, build sources:

```
middleman build
```

## Connection to the server

Once started, the application is waiting for data retreived by the **hashtag-tafeuille server** through Socket.io (on localhost:8080).

Visit the **hashtag-tafeuille Github page** to get the server-side of the application and run it: [https://github.com/MathieuDebit/hashtag-tafeuille](https://github.com/MathieuDebit/hashtag-tafeuille).

## Contributing

> This project is licensed under the terms of the MIT license.

Feel free to contribute to the project by reporting and/or fixing bugs, improving code quality and adding new features.

1. Fork repository
2. Create a branch following a [successfull branching model](http://nvie.com/posts/a-successful-git-branching-model/)
3. Write your feature/fix
4. Pull request

Consider this project as a beta version, a first step towards a more robust application, and especially more general (detached from the #TaFeuille event). If you want to rewrite this application with me, develop a real API linked to a dynamic client app, poke me at **mathieu.debit@gmail.com**.

## The event
**#TaFeuille** event, initiated by [Valentin Galmand](http://www.twitter.com/vgalmand), took place in Bordeaux (France) during the [Vibration Urbaine Festival](http://vibrations-urbaines.net) in October 2015.

> 16 artists will compete on an improvisation drawing battle with the only tool a black marker. For a counted time, they will draw on a theme chosen by lot to be then submitted to a vote of two juries and a public vote through Twitter.

See the Facebook event [here](https://www.facebook.com/events/620625374706794/).

![hashtag-tafeuille-client scoreboard](http://i.imgur.com/g34m1cr.png)

---
Made with ♥ by [Mathieu Débit](http://www.twitter.com/MathieuDebit) & [Valentin Galmand](http://www.twitter.com/vgalmand).
