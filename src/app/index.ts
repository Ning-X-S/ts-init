import Koa from 'koa'
import koaBody from 'koa-body'
import Router from 'koa-router'
import cors from '../utils/cors'
import createGroup from '../api/createGroup'


const app = new Koa()
const router = new Router()

router.post('/create_group', createGroup)

app
  .use(cors())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 404) {
        ctx.body = '404'
      }
    } catch (err) {
      // handle error
    }
  })
app.listen(7029)