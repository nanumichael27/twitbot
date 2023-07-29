import { DateTime } from 'luxon'
import { 
  BaseModel,
  column,
  hasMany,
  HasMany,
 } from '@ioc:Adonis/Lucid/Orm'
import Sample from './Sample'
import Tweet from './Tweet'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public overview: string

  @column()
  public max_chars: number

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Sample)
  public samples: HasMany<typeof Sample>

  @hasMany(()=> Tweet)
  public tweets: HasMany<typeof Tweet>

}
