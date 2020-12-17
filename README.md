## Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)

## About

ytsr.js is an easy to use [node.js](https://nodejs.org/) module that gets YouTube search results quickly.
It doesn't require any API keys to use!

## Installation

```bash
npm install ytsr.js
```

## Usage

```javascript
const search = require('ytsr.js');

(async query => {
    const res = await search(query);
    console.log(res);
})("Kids by Current Joys");
```