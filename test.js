import test from 'ava'
import m from '.'

test('check last tweet', async t => {
  const tweet = await m('bukinoshita')

  t.truthy(tweet.user)
  t.truthy(tweet.tweet)
  t.truthy(tweet.time)
})
