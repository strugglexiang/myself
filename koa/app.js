var koa=require("koa");
var app=new koa();
app.use(ctx=>{
//	ctx.body="hello world"
    console.log(ctx)
    ctx.body={
    	"name":"strugglexiang",
    	"age":1
    }
});
app.listen(3000)
