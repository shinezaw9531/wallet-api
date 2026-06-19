import { Redis } from '@upstash/redis'
import { Ratelimit} from '@upstash/ratelimit'
import "dotenv/config";

const ratelimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '1 m') // 10 requests per minute
})

export default ratelimiter;
