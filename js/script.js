const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const app = new Vue(
    {
        el : '#app',

        data : {

            slideElements : slides,

            activeSlideIndex : 0,

            autoPlay : null

        },

        methods : {

            increaseIndex : function(){
                
                if (this.activeSlideIndex < this.slideElements.length - 1){
                    this.activeSlideIndex++;
                
                } else {
                    this.activeSlideIndex = 0;

                }
            },

            decreaseIndex : function(){
                
                if (this.activeSlideIndex > 0){
                    this.activeSlideIndex--;
                
                } else {
                    this.activeSlideIndex = this.slideElements.length - 1;

                }
            },

            setActiveIndex : function(index){

                this.activeSlideIndex = index;
            },

            startAutoPlay : function(){

                if (this.autoPlay === null){
                    this.autoPlay = setInterval(() => {
                        this.increaseIndex();
                        }, 3000);
                }
            },
            
            stopAutoPlay: function(){

                clearInterval(this.autoPlay);
                this.autoPlay = null;
            }
        },

        created(){
            this.startAutoPlay();
        }
    }
)