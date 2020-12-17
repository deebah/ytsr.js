const search = require('./src/search');

(async query => {
    const res = await search(query);
    console.log(res.results);
})("Kids by Current Joys");