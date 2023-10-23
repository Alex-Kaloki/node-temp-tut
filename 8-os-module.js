const { log } = require('console')
const os = require('os')

// info about current usser
const user = os.userInfo()
console.log(user);

// returns system uptime
console.log(`system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);