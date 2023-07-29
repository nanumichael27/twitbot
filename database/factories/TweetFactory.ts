import Tweet from 'App/Models/Tweet'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Tweet, ({ faker }) => {
  return {
    text: faker.lorem.paragraph(),
  }
}).build()
