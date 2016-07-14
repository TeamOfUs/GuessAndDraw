const io = require('socket.io-client')('http://localhost:8081');

class Socket {
  constructor() {
    this.io = io;
    this.on();

    this.subscribe('startDraw');
    this.subscribe('draw');
    this.subscribe('endDraw');
    this.subscribe('msg');
    this.subscribe('newWord');
    this.subscribe('giveUp');
    this.subscribe('correct');
    this.subscribe('ready');
  }
  receive(topic, data = null) {
    this.io.emit(topic, data);
  }
  subscribe(topic) {
    controller.subscribe(topic, this);
  }
  on() {
    this.io.on('startDraw', (data) => controller.broadcast('receiveStartDraw', data));
    this.io.on('draw', (data) => controller.broadcast('receiveDraw', data));
    this.io.on('endDraw', () => controller.broadcast('receiveEndDraw'));
    this.io.on('msg', (data) => controller.broadcast('receiveMsg', data));
    this.io.on('correct', (data) => controller.broadcast('correct'));
    this.io.on('newWord', (data) => controller.broadcast('newWord', data));
    this.io.on('nextRound', () => controller.broadcast('nextRound'));
    this.io.on('gameBegin', () => controller.broadcast('gameBegin'));
    this.io.on('gameEnd', () => controller.broadcast('gameEnd'));
    this.io.on('nextDrawer', () => controller.broadcast('nextDrawer'));
    this.io.on('startGame', ()=> {alert('开始游戏')});
    this.io.on('endGame', (data)=>{alert('游戏结束'); alert(data)});
  }
}
module.exports = Socket;
