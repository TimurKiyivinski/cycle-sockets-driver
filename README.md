# cycle-sockets-driver
Socket.io driver for Cycle.js with support for multiple sockets

## installation
Install with NPM
```
npm install --save cycle-sockets-driver
```
Make sure to configure your build tool to compile the dependency from `node_modules/`. If you're using Webpack, your Babel loader entry might look like this:
```
{
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules\/(?!cycle-sockets-driver)/,
  query: {
    presets: ['es2015'],
    plugins: ['babel-plugin-transform-es2015-destructuring', 'babel-plugin-transform-object-rest-spread']
  }
}
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
