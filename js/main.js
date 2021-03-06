//! Traccia
// 1- Creazione dell'array di immagini
// 2- Creazione del ciclo for per la stampa delle immagini in pagina
// 3- recupero index array
// 4- comparazione index array e immagine
// 5- inserimento classe active
// 6- inserimento funnzioni inceras e edecrease
// 7- inserimento dot slider
// 8- inserimento funzione per classe activedoc
// --------------------------------------------------SVOLGIMENTO--------------------------------------------------


// inizializzazzione vue developer tool
Vue.config.devtools = true;
// inizializzazione di vuejs
const app = new Vue({
    el: '#root',
    data: {
        currentImage: 0,
        images: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg'
        ],
    },
    methods: {
        isActive(indexNumber) {
            return this.currentImage == indexNumber ? `active` : '';
        },
        increase() {
            if (this.currentImage === this.images.length - 1) {
                this.currentImage = 0;
            } else {
                this.currentImage++;
            }
        },
        decrease() {
            if (this.currentImage > 0) {
                this.currentImage--;
            } else {
                this.currentImage = this.images.length - 1;
            }
        },
        isDotActive(indexNumber) {
            return this.currentImage == indexNumber ? `activedot` : '';
        },
    }
});
