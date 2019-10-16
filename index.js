// {aclages}
const request = require('request-promise-native')
const cheerio = require('cheerio')
const sanitize = require('sanitize-html')

module.exports = async user => {
  const url = `https://twitter.com/${user}`
  const result = await request(url)
  const $ = cheerio.load(result)
  const tweetHtml = $('.tweet-text').html()
  const timeHtml = $('._timestamp').html()
  const tweet = sanitize(tweetHtml, { allowedTags: ['p'] })
  const time = sanitize(timeHtml, { allowedTags: ['span'] })
  const data = { user, tweet, time }

  return data
}
