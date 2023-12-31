import cors from "@koa/cors";
import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

app.use(cors());

router.get("/hastech", (ctx)=> {
    ctx.body = {
      status: "ok",
    };
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000, ()=> {
    console.log(`App is running on port 5000`);
});


