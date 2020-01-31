const keys = require('./keys')
const redis = require('redis')

// Worker connects to Redis and subscribes for jobs

const redisClient = redis.createClient({
  host: keys.redisHost,
  post: keys.redisPort,
  retry_strategy: () => 1000
})

const sub = redisClient.duplicate()

function fib(index) {
  if (index < 2) return 1
  return fib(index -1) + fib(index - 2)
}

sub.on('message', (channel, message) => {
  const result = fib(parseInt(message))
  console.log(`new job for message ${message} with result '${result}'`)
  redisClient.hset('values', message, result)
})

sub.subscribe('insert')
