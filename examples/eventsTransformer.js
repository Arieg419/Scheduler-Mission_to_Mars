function transformDate(str) {
  return new Date(Date.parse(str));
}

var events = require('./demos/events');

for(var i = 0; i < events.length; i++) {
  events[i].start = transformDate(events[i].start);
  events[i].end = transformDate(events[i].end);
}

console.log("transformed event");
console.log(events);

module.exports = events;