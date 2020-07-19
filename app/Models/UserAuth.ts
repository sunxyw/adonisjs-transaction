import User from 'App/Models/User'
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class UserAuth extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userUuid: string

  @column()
  public type: string

  @column()
  public identifier: string

  @column()
  public credential: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, { localKey: 'uuid', foreignKey: 'userUuid' })
  public user: BelongsTo<typeof User>

  public get password () : string {
    return this.credential
  }
}
