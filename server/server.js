const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors({
    origin: '*'
}));
const port = process.env.PORT || 5000;

const { TwitterApi } = require('twitter-api-v2');

const bearer = 'AAAAAAAAAAAAAAAAAAAAAB33YwEAAAAAuho27ohqPlhzqCJzyEHuRx0o%2FRY%3D7tIFWppodeC5sg9yROZZ0d7TcIQJkUtYRMnH9LHjDMzJ19Oq0I';
const twitterClient = new TwitterApi(bearer);
const roClient = twitterClient.readOnly;

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/tweets', async (req, res, next) => {

    const searchTerm = req.query.term + ' -is:retweet'

    const data = await roClient.v2.search(searchTerm, {
        'media.fields': 'url', 
        'expansions': 'author_id',
        'tweet.fields': 'public_metrics,author_id',
        'user.fields': 'name,username,profile_image_url'
    });
    
    res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));