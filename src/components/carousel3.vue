<template>
  <div id="app">
  <carousel :autoplay="true">
    <!-- Numbers 1-10 in divs -->
    <div v-for="i in [...Array(10).keys()]">{{i+1}}</div>
  </carousel>
</div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { image: "./images/img-universty/1644811175_22-fikiwiki-com-p-kartinki-universiteti-24.jpg", title: "Slide 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim sed nisi mollis posuere sit amet at turpis." },
        { image: "./images/img-universty/E_O3jKCXEAMVIZM.jpg", title: "Slide 2", description: "Pellentesque euismod dui vitae nunc blandit, in consectetur sapien placerat. Maecenas hendrerit mi a tellus tristique suscipit." },
        { image: "https://picsum.photos/800/602", title: "Slide 3", description: "Suspendisse quis orci porta, vulputate ipsum id, posuere magna. Aenean a orci aliquam, maximus neque eget, sollicitudin leo." },
      ],
      currentIndex: 0,
      slideInterval: null,
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopSlideShow() {
      clearInterval(this.slideInterval);
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.stopSlideShow();
      this.startSlideShow();
    },
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.stopSlideShow();
      this.startSlideShow();
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.slides.length - 1;
      }
      this.stopSlideShow();
      this.startSlideShow();
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-color: #f2f2f2;
}

.carousel__slides {
  display: flex;
  width: calc(100% * 3);
  justify-content: space-between;
  transform: translateX(-33.333%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel__slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.carousel__image {
  height: 60%;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.carousel__content {
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: -50px;
  z-index: 1;
}

.carousel__content h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.carousel__content p {
  font-size: 1.2rem;
  line-height: 1.5;
}

.carousel__nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.carousel__nav-item {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;

}
</style>