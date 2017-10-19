# last-tweet [![Build Status](https://travis-ci.org/bukinoshita/last-tweet.svg?branch=master)](https://travis-ci.org/bukinoshita/last-tweet)

> Get Twitter user's last tweet


#### No Twitter API required!


## Install

```bash
$ yarn add last-tweet
```


## Usage

```js
const lastTweet = require('last-tweet')

await lastTweet('bukinoshita')
/*
{
  user: 'bukinoshita',
  tweet: 'awesome',
  time: '9h'
}
*/
```


## API

### lastTweet(user)

#### user

Type: `string`<br />
Required

User's username on Twitter


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
