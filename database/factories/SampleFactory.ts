import Sample from 'App/Models/Sample'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Sample, ({ faker }) => {
  return {
    //
    text: faker.lorem.paragraph(),
  }
}).build()
