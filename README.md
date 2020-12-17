## Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)

## About

yt-searcher is an easy to use [node.js](https://nodejs.org/) module that gets YouTube search results quickly.
It doesn't require any API keys to use!

## Installation

```bash
npm install yt-searcher
```

## Usage

```javascript
const search = require('yt-searcher');

(async query => {
    const res = await search(query);
    console.log(res.results);
})("Kids by Current Joys");
```