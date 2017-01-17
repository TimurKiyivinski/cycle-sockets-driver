import xs from 'xstream'
import io from 'socket.io-client'

function SocketWrapper () {
  this.sockets = {}

  this.emit = (socket, event, data) => {
    this.sockets[socket].emit(event, data)
  }

  this.on = (socket, event, callback) => {
    // Create new socket connection if it does not exist
    if (!this.sockets[socket]) {
      this.sockets[socket] = io(socket)
    }
    this.sockets[socket].on(event, callback)
  }
}

export function makeSocketsDriver () {
  const socketWrapper = new SocketWrapper()

  function socketsDriver (outgoing$) {
    outgoing$.addListener({
      next: outgoing => {
        socketWrapper.emit(outgoing.socket, outgoing.event, outgoing.data)
      },
      error: () => {
      },
      complete: () => {
      }
    })

    return {
      select: socketListener => xs.create({
        start: listener => {
          socketWrapper.on(socketListener.socket, socketListener.event, data => listener.next(data))
        },
        stop: () => {
        }
      })
    }
  }

  return socketsDriver
}
