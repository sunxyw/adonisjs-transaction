import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run () {
    await Role.createMany([
      {
        'name': 'Tourist',
        'title': '游客',
        'color': '55FF55',
      },
      {
        'name': 'Primary',
        'title': '初建',
        'color': '00AA00',
      },
      {
        'name': 'Team',
        'title': '团建',
        'color': 'AAAAAA',
      },
      {
        'name': 'Introduction',
        'title': '高建',
        'color': '55FFFF',
      },
      {
        'name': 'Permanently',
        'title': '御建',
        'color': 'AA00AA',
      },
      {
        'name': 'Extreme',
        'title': '皇建',
        'color': 'FFAA00',
      },
      {
        'name': 'Secretary',
        'title': '项目负责人',
        'color': 'AAAAAA',
      },
      {
        'name': 'Admin',
        'title': '管理员',
        'color': 'AA0000',
      },
    ])
  }
}
