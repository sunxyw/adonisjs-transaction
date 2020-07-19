import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserFactory, UserAuthFactory } from 'Database/factories'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    const admin = await UserFactory.merge({ nickname: 'sunxyw' }).makeStubbed()
    await UserAuthFactory.merge({
      userUuid: admin.uuid,
      identifier: 'sunxyw@me.com',
      credential: await Hash.make('131782'),
    }).create()
    await admin.save()

    for (let i = 0; i < 29; i++) {
      const user = await UserFactory.makeStubbed()
      await UserAuthFactory.merge(Array(2).fill({ userUuid: user.uuid })).createMany(2)
      await user.save()
    }
  }
}
