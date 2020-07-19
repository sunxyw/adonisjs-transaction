import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import UserAuth from 'App/Models/UserAuth'
import Hash from '@ioc:Adonis/Core/Hash'

let c = 0

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    uuid: faker.random.uuid(),
    nickname: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    role_id: faker.random.number(8),
    is_member: faker.random.boolean(),
  }
}).build()

export const UserAuthFactory = Factory.define(UserAuth, async ({ faker }) => {
  // const type = faker.random.arrayElement(['email', 'minecraft', 'phone'])
  const type = ['email', 'minecraft', 'phone'][ c % 3 ]
  let identifier = ''
  c++

  switch (type) {
    case 'email':
      identifier = faker.internet.email()
      break

    case 'minecraft':
      identifier = faker.random.word()
      break

    case 'phone':
      identifier = faker.phone.phoneNumber('13#########')
      break
  }

  return {
    type,
    identifier,
    credential: await Hash.make('fakepassword'),
  }
}).build()
