/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import { v4 as uuidv4 } from 'uuid'
import UserAuth from 'App/Models/UserAuth'

Route.post('/register', async ({ request, response }: HttpContextContract) => {
  const registerSchema = schema.create({
    nickname: schema.string({ trim: true }),
    auth_type: schema.string(),
    identifier: schema.string(),
    credential: schema.string(),
  })

  const data = await request.validate({
    schema: registerSchema,
  })

  await Database.transaction(async (trx) => {
    const uuid = uuidv4()
    let user = new User()
    user.uuid = uuid
    user.nickname = data.nickname
    user.roleId = 1
    user = user.useTransaction(trx)
    await user.save()

    const auth = new UserAuth()
    auth.fill({
      userUuid: '3x', // throw duplicate key error
      type: data.auth_type,
      identifier: data.identifier,
      credential: data.credential,
    })
    auth.useTransaction(trx)
    await auth.save()
  })

  return response.created({})
})
