import { DateTime } from 'luxon'
import { 
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
 } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Tweet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public text: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> User)
  public user: BelongsTo<typeof User>

}
