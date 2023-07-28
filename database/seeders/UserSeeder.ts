import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'
import Hash from '@ioc:Adonis/Core/Hash'

export default class extends BaseSeeder {

  public static environment = ['development', 'testing']

  public async run () {
    // Write your database queries inside the run method
    await User.create({
      name: 'test user',
      email: 'tester@gmail.com',
      password: await Hash.make('password')
    })
    await UserFactory.createMany(10)
    
  }
}
