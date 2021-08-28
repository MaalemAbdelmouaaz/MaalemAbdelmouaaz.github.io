var eventList = [];
self.onmessage = function (event) {
  console.log("worker is working");
  eventList.push(event.data);
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loop() {
  while (true) {
    await sleep(50);
    if (eventList.length === 0) {
      continue;
    }
    let nextEvent = eventList.shift();
    self.postMessage(nextEvent);
  }
}
loop();
