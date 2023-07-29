import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'
import SampleFactory from './SampleFactory'
import TweetFactory from './TweetFactory'

export default Factory.define(User, async ({ faker }) => {

  const password = await Hash.make(faker.internet.password())

  return {
    //
    name: faker.internet.userName(),
    email: faker.internet.email(),
    overview: faker.lorem.paragraph(),
    max_chars: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
    password: password,
  }
})
.relation('samples', () => SampleFactory)
.relation('tweets', () => TweetFactory)
.build()
