const zod=require('zod')
const createCard=zod.object({
  name:zod.string(),
  description:zod.string(),
  instaLink:zod.string().default('https://www.instagram.com'),
  TwitterLink:zod.string().default('https://www.twitter.com')
})
module.exports={createCard}
