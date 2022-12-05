import { createTRPCNext } from "@trpc/next"
import default trpcNext from '@trpc/server/adapters/next';

export default TRPCNext.createNextApiHandler({
  router: appRouter,
  createCintextfE
})