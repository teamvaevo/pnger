import { fileRouter } from "~/server/api/routers/file";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  file: fileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
