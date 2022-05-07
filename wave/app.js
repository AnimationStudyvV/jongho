import { WaveGroup } from './waveGroup.js';

class App {
  constructor() {
    // canvas 생성
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    // resize이벤트
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    // 애니메이션 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // size를 더블로해서 레티나 디스플레이에서 잘 보일 수 있도록 함
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    // canvas 클리어하기
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
