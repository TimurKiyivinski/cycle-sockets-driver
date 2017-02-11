# cycle-sockets-driver
Socket.io driver for Cycle.js with support for multiple sockets

## installation
Install with NPM
```
npm install --save cycle-sockets-driver
```

## usage
Import into your ES6 code:
```
import { makeSocketsDriver } from 'cycle-sockets-driver'
```
Register the driver:
```
const drivers = {
  ...
  sockets: makeSocketsDriver()
}
```
Request format for `sockets` sink:
```
{
  socket: 'http://localhost:5000',
  event: 'connect'
}
```
For example:
```
sources.sockets.select({ socket: 'http://localhost:5000', event: 'connect' })
```
