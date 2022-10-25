<div align="right">
  <img src="https://img.shields.io/badge/Completion-100%25-blue.svg" />
</div>

# Poll Application Frontend

# Features

- Anyone can create poll.
- Anyone can see poll.
- Anyone can vote in the poll.
- Anyone can add unlimited vote and option.

```
-------------------------------------------------------------------------
Application Route
-------------------------------------------------------------------------
[Method]  [Route]                          [Description]
GET       /                                Get the poll creation form
GET       /polls                           Get all poll list
GET       /poll/:pollId                    Get single poll
```

# Technologies

- [`ReactJS`](https://reactjs.org/)
- [`React Router`](https://reactrouter.com/en/main)
- [`Reactstrap`](https://reactstrap.github.io/?path=/story/home-installation--page)

Check [`package.json`](https://github.com/syfulislambappi/poll-application-frontend/blob/main/package.json) file for more information.

# Getting Started

Follow the instructions below to set up the environment and run this project on your local machine.

1. Clone this repository.

```bash
# Clone repository
$ git clone git@github.com:syfulislambappi/poll-application-frontend.git
```

2. Install dependencies via NPM or Yarn

```bash
# Install dependencies via npm
$ npm install
$ cd application
$ npm install
$ cd ..

# Install dependencies via yarn
$ yarn install
$ cd application
$ yarn install
$ cd ..
```

3. Run the server.

```bash
# Run server
$ yarn dev
```
