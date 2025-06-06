/// <reference lib="webworker" />

addEventListener("message", () => {
  // Simulate a heavy computation task
  const start = performance.now();

  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }

  const end = performance.now();
  const durationMs = end - start;

  postMessage({
    sum: t,
    durationMs,
  });
});
