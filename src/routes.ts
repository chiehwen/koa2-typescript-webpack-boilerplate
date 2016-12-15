import * as Router from "koa-router";
import {Request} from "koa";
import * as chalk from "chalk";

const router = new Router();

router.get("/", async (ctx, next) => {
  await next();
  ctx.body = "Hi, TypeScript!!";
  ctx.status = 200;
});

export default router;
