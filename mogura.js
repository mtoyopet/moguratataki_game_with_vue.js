new Vue ({
  el: "#mogura-game",
  data: {
    images: {
      mogura: "./images/mogumogu.png",
      ana: "./images/ana.png",
      peterpan: "./images/peterpan.png"
      },
    numbers: [100, 500, 1000, 200, 350, 750],
    point: 0,
    show: true,
    end: true,
    youWin: false,
    changeImageToMoguraId: 0,
    changeImageToAnaId: 0,
    changeImageToPeterPanId: 0,
    hidePeterPanId: 0
  },
  methods: {
    startGame: function(){
      this.showMogura();
      this.hideMogura();
      this.showPeterPan();
      this.hidePeterPan();
      this.show = !this.show;
    },
    hit: function() {
      let src = event.target.src;
      if (src.indexOf("mogumogu") > 0) {
        event.target.src = this.images.ana;
        this.point += 1;
      }
      this.endGame();
    },
    endGame: function() {
      let moguras = this.$el.getElementsByClassName('get-a-mogura');

      if (this.point >= 10) {
        this.end = false;
        this.youWin = true;

        clearInterval(this.changeImageToMoguraId);
        clearInterval(this.changeImageToAnaId);

        for (let i = 0; i < moguras.length; i++) {
          moguras[i].src = this.images.mogura;
        }
      }
    },
    showMogura: function() {
      let moguras = this.$el.getElementsByClassName('get-a-mogura');
      let moguraImage = this.images.mogura;

      this.changeImageToMoguraId = setInterval(() => {
        let randomNum = Math.floor((Math.random() * moguras.length));
        let mogura = moguras[randomNum];
        mogura.src = moguraImage;
      }, 500);
    },
    hideMogura: function() {
      let moguras = this.$el.getElementsByClassName('get-a-mogura');
      let anaImage = this.images.ana;

      this.changeImageToAnaId = setInterval(() => {
        let randomNum = Math.floor((Math.random() * moguras.length));
        let mogura = moguras[randomNum];
        mogura.src = anaImage;
      }, 500);
    },
    showPeterPan: function(){
      let anas = this.$el.getElementsByTagName("img"); 

      this.changeImageToPeterPanId = setInterval(() => {
        let num = this.numbers[Math.floor(Math.random() * this.numbers.length)];
        console.log(num);
        let randomNum = Math.floor((Math.random() * anas.length));
        anas[randomNum].src = this.images.peterpan;
      }, 500);
    },
    hidePeterPan: function(){
      this.hidePeterPanId = setInterval(() => {
        let anas = this.$el.getElementsByTagName("img"); 

        for (let i = 0; i < anas.length; i++) {
          if (anas[i].src.indexOf("peterpan") > 0) {
            anas[i].src = this.images.ana;
          }
        }  
      }, 1000);
    }
  },
  computed: {

  },
  mounted() {
  }
});
