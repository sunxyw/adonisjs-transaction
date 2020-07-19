import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserAuths extends BaseSchema {
  protected tableName = 'user_auths'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('user_uuid').index().notNullable()
      table.string('type').index().notNullable()
      table.string('identifier').index().notNullable()
      table.string('credential').notNullable()
      table.timestamps(true, true)

      table.unique(['user_uuid', 'type'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
