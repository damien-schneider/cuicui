export const sleep = (ms: number | `${number}ms`) => {
  let duration: number;
  if (typeof ms === "string") {
    duration = Number.parseInt(ms);
  } else {
    duration = ms;
  }
  return new Promise((resolve) => setTimeout(resolve, duration));
};
