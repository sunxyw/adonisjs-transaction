import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import UserAuth from './UserAuth'
import Role from './Role'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public uuid: string

  @column()
  public nickname: string

  @column()
  public avatar: string

  @column()
  public roleId: number

  @column()
  public isMember: boolean

  @column.dateTime()
  public deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => UserAuth, { foreignKey: 'userUuid', localKey: 'uuid' })
  public auths: HasMany<typeof UserAuth>

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>
}
