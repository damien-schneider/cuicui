/**
 * Options for creating a normalized error.
 */
export interface CreateErrorOptions {
  statusCode?: number;
  statusMessage?: string;
  message?: string;
  fatal?: boolean;
  data?: unknown;
  cause?: unknown;
  stack?: string;
}

export type CreateErrorInput =
  | string
  | (CreateErrorOptions & Record<string, unknown>);

/**
 * A specialized error type that extends the native `Error` object
 */
export class NormalizedError extends Error {
  statusCode: number;
  statusMessage?: string;
  fatal?: boolean;
  data?: unknown;
  cause?: unknown;

  constructor(opts: CreateErrorOptions) {
    super(opts.message || "An unexpected error occurred");
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = opts.statusCode ?? 500;
    this.statusMessage = opts.statusMessage;
    this.fatal = opts.fatal;
    this.data = opts.data;
    this.cause = opts.cause;
    this.message = opts.message || "An unexpected error occurred";

    if (opts.stack) {
      this.stack = opts.stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

interface DefaultErrorMap {
  [key: string]: CreateErrorOptions;
}

const defaultErrors = {
  BAD_REQUEST: { statusCode: 400, statusMessage: "Bad Request" },
  UNAUTHORIZED: { statusCode: 401, statusMessage: "Unauthorized" },
  FORBIDDEN: { statusCode: 403, statusMessage: "Forbidden" },
  NOT_FOUND: { statusCode: 404, statusMessage: "Not Found" },
  INTERNAL_ERROR: { statusCode: 500, statusMessage: "Internal Server Error" },
} satisfies DefaultErrorMap;

type KeyOfDefaultErrors = keyof typeof defaultErrors;

export function createError(
  input: KeyOfDefaultErrors | string | CreateErrorOptions,
  overrides?: CreateErrorOptions,
): NormalizedError {
  // If input is a string, check if it matches a default error key
  if (typeof input === "string") {
    if (input in defaultErrors) {
      // Narrow input to KeyOfDefaultErrors for indexing
      const combinedOptions = {
        ...defaultErrors[input as KeyOfDefaultErrors],
        ...overrides,
      };
      return new NormalizedError(combinedOptions);
    }

    // Otherwise treat input as the error message
    return new NormalizedError({
      ...overrides,
      message: input,
      statusCode: overrides?.statusCode ?? 500,
    });
  }

  // If input is an object (CreateErrorOptions)
  return new NormalizedError(input);
}
