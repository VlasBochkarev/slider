function Slider() {
    this.imgArrey = [];
    this.currentImageIndex = 0;
    this.showPrev = null;
    this.showNext = null;
    this.slideImages = null;

    this.start = function(elId) {
        let that = this;
        let sliderSelector = "#" + elId
        let el = document.querySelector(sliderSelector)

        this.showPrev = el.querySelector(".show-prev")
        this.showNext = el.querySelector(".show-next")
        this.slideImages = el.querySelector(".slide-img")

        //add listeners

        this.showPrev.addEventListener("click", function(e) {
            that.onBtnClickPrev(e)
        })
        this.showNext.addEventListener("click", function(e) {
            that.onBtnClickNext(e)
        })

        //create img arrey

        this.imgArrey.push("img/1.jpg")
        this.imgArrey.push("img/2.jpg")
        this.imgArrey.push("img/3.jpg")
        this.imgArrey.push("img/4.jpg")
        this.imgArrey.push("img/5.jpg")


        this.slideImages.src = this.imgArrey[this.currentImageIndex]
        this.showPrev.disabled = true
    };
    this.onBtnClickPrev = function(e) {
        this.currentImageIndex--;
        this.slideImages.src = this.imgArrey[this.currentImageIndex]
        this.showNext.disabled = false

        if (this.currentImageIndex === 0) {
            this.showPrev.disabled = true
        }
    };
    this.onBtnClickNext = function(e) {
        this.currentImageIndex++;
        this.slideImages.src = this.imgArrey[this.currentImageIndex]
        this.showPrev.disabled = false

        if (this.currentImageIndex === (this.imgArrey.length - 1)) {
            this.showNext.disabled = true
        }
    };
}