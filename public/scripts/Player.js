const Component = require('./Component');

class Player extends Component {
  constructor(data) {
    super();
    this.el = null;
    this.id = data.id;
    this.avatar = data.avatar; //url
    this.ifReady = false;
    super.subscribe('correct', this.correct);
    this.drawPlayer(this.id, this.avatar);
  }
  drawPlayer(id, avatar) {
    let node = document.createElement('div'),
      icon = document.createElement('div'),
      mark = document.createElement('div'),
      name = document.createElement('div');
    node.classList.addClass('player');
    icon.classList.addClass('label-icon');
    mark.classList.addClass('label-mark');
    node.appendChild(icon);
    node.appendChild(mark);
    node.appendChild(name);

    icon.setAttribute('src', this.avatar);
    name.innerHTML = this.id;

    this.el = node;
  }
  correct(data) {
    this.el.children[1].innerHTML += data;
  }
}

module.exports = Player;
