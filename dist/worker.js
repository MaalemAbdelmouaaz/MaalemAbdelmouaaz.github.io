var eventList = [];
let lock = false;
self.onmessage = function (event) {
  if (typeof event.data === "boolean") {
    lock = event.data;
  } else {
    eventList.push(event.data);
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loop() {
  while (true) {
    await sleep(50);
    if (eventList.length === 0 || lock) {
      continue;
    }
    let nextEvent = eventList.shift();
    self.postMessage(nextEvent);
  }
}
loop();
