import { BaseTask } from 'adonis5-scheduler/build'
import TweetService from 'App/Services/TweetService'

export default class MakeTweet extends BaseTask {
	public static get schedule() {
		
		return '*/5 * * * * *'
	}
	/**
	 * Set enable use .lock file for block run retry task
	 * Lock file save to `build/tmpTaskLock`
	 */
	public static get useLock() {
		return false
	}

	public async handle() {
    	// this.logger.info('Handled')
		const tweetService = new TweetService()
		tweetService.makeTweet('This tweet has been created using nodejs')
  	}
}
