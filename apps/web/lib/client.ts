import { hc } from "hono/client";
import type { AppType } from "api/src";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL as string);

export const getUsers = async () => {
  const res = await client.users.$get();
  return res.json();
};
