import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

export default class TweetsController {

    public async index({ request }: HttpContextContract) {


      const { TwitterApi } = await import('twitter-api-v2');
      
        let client = new TwitterApi({
            appKey: Env.get('CONSUMER_KEY'),
            appSecret: Env.get('CONSUMER_SECRET'),
            accessToken: Env.get('ACCESS_TOKEN'),
            accessSecret: Env.get('ACCESS_TOKEN_SECRET'), 
            bearerToken: Env.get('BEARER_TOKEN'),
        });

        const rwClient = client.readWrite;

        const textTweet = async () => {
              try {
                await rwClient.v2.tweet(
                    "This tweet has been created using nodejs");
                console.log("success");
              } catch (error) {
                console.error(error);
              }
        };

        textTweet()
 
    }

}
