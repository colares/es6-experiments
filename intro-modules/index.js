var counter = require('./counter');
// we basically make two copies of the module: one when we export it, and one when we require it.
// the copy in index.js is now disconnected from the original module. 

// That’s why even when we increment our counter it still returns 1
// because the counter variable that we imported is a disconnected copy of the counter variable from the module.
// So, incrementing the counter will increment it in the module, but won’t increment your copied version. 
counter.increment()
console.log(counter.counter)
counter.increment()
console.log(counter.counter)