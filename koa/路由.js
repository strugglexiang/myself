const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  // ctx.router available
     ctx.body="index"
})
.get("/users",(ctx,next)=>{
	 ctx.body="<h1>你好</h1>"
})
.get("/users/:id",(ctx,next)=>{
	 ctx.body=ctx.params.id;
});
app.use(router.routes())
app.use(router.allowedMethods());
app.listen(3000);
