const {say} = require('./say.js')

const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    say(`data recieved user: ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    say('some other logic')
})


customEmitter.emit('response', 'ndrs', 333)