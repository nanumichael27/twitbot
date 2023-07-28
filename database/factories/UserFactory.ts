import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'

export default Factory.define(User, async ({ faker }) => {

  const password = await Hash.make(faker.internet.password())

  return {
    //
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: password,
  }
}).build()
