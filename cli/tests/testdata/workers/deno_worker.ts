onmessage = function (e) {
  if (typeof self.Deno === "undefined") {
    throw new Error("Deno namespace not available in worker");
  }

  postMessage(e.data);
};
