import express from 'express'
import path from 'path'
import socketio, { Socket } from 'socket.io'
import http from 'http'

const app = express();
const httpServer = http.createServer(app);
const io =  new socketio.Server(httpServer);


app.use(express.static(path.resolve(__dirname,'..','public')))

io.on('connection', (socket)=>{

 console.log(`New Connection :${socket.id}`);

 socket.on('message', message =>{

    // console.log(`mensagem rececida ${message}`)

    socket.emit('received', `Received message ${message}`)

 })

})

httpServer.listen(3333)