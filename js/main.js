const app = new Vue ({
    el:`#app`,
    data:{
        intervalID: null,
        index:0,
        images:[
    {
        src: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        src: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
    },
    {
        src: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        src: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
    {
        src: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },

],
},
methods: {
    start() {
        this.intervalID = setInterval(() => {
            this.down();
        }, 3000);    
    },
    stop() {
        clearInterval(this.intervalID);
    },
    up() {
        if (this.index===0){
            this.index=this.images.lenght-1;
        } else {this.index--;
        }
    },
    down() {
        if(this.index===this.images.lenght-1){
            this.index=0;
        } else {
            this.index++
        }
    },
    selectedImage(Index) {
        this.index = Index;
    }
},
mounted() {
    this.start();
},
beforeDestroy() {
    this.stop();
}
});


