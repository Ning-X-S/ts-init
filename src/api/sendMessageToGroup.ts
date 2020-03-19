import * as Koa from "koa"
import { Group } from '../model'
import { E10001 } from '../config/error_code'

export = async (ctx: Koa.Context): Promise<void> => {
  const { channel } = ctx.request.body
  if (!channel) {
    ctx.body = {
      data: {},
      ...E10001
    }
    return
  }
  let createGroupRes
  try {
    createGroupRes = await Group.create({
      channel
    })
    console.log(createGroupRes)
  } catch (error) {
    ctx.body = {
      error_code: 0,
      message: 'create group fail',
      data: error
    }
    return
  }



  ctx.body = {
    error_code: 0,
    message: 'create group success',
    data: createGroupRes
  }
  return
}
