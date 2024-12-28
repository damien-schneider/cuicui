import { env } from "#/src/env";

export const IS_PRODUCTION = env.NODE_ENV === "production";
