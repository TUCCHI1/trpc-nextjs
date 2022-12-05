import { t } from "../createRouter";
import connectDB from "../utils/prisma";
import redisClient from "../utils/connectRedius";

connectDB();

export const appRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    const message = await redisClient.get("trpc");
    return { message };
  }),
});

export type AppRouter = typeof appRouter;
