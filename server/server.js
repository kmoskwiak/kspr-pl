const express = require('express');
const request = require('request-promise');
const repos = require('./repos.json');
const path = require('path');

const config = {
    excludeRepos: ['files']
};

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/thanks', async (req, res) => {
    const sponsors = [];

    return res.render('thanks', { sponsors: sponsors });
});

app.get('/', async (req, res) => {

    let filtered = repos.filter((repo) => {
        if(repo.fork) { return null; }
        if(config.excludeRepos.indexOf(repo.name) !== -1 ) { return null; }

        return repo;
    });

    filtered.sort((a, b) => {
        return b.id - a.id
    });
   
    return res.render('index', {repos: filtered});
});

app.use(express.static(path.resolve(__dirname, '../client')));

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
