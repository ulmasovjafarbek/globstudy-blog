<template>
  <div class="carousel">
    <div class="carousel__slides" :style="{ transform: 'translateX(' + translateX + 'px)' }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel__slide">
        <img :src="slide" alt="Carousel slide" />
      </div>
    </div>
    <div class="carousel__controls">
      <span class="carousel__control" @click="prevSlide">◀️</span>
      <span class="carousel__control" @click="nextSlide">▶️</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        "https://picsum.photos/300/200",
        "https://picsum.photos/300/201",
        "https://picsum.photos/300/202",
        "https://picsum.photos/300/203",
      ],
      currentIndex: 0,
      translateX: 0,
      slideWidth: 300,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
        this.translateX -= this.slideWidth;
      } else {
        this.currentIndex = 0;
        this.translateX = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateX += this.slideWidth;
      } else {
        this.currentIndex = this.slides.length - 1;
        this.translateX = -(this.slideWidth * this.currentIndex);
      }
    },
  },
};
</script>

<style>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel__slides {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel__slide {
  height: 200px;
  width: 300px;
  margin-right: 10px;
}

.carousel__controls {
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
}

.carousel__control {
  cursor: pointer;
  margin: 0 10px;
  font-size: 2rem;
}
</style>