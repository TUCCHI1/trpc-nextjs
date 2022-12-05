import { inferAsyncReturnType } from "@trpc/server";
import { create } from "domain";
import { NextApiRequest, NextApiResponse } from "next";

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return { req, res };
}

export type Context = inferAsyncReturnType<typeof createContext>;
