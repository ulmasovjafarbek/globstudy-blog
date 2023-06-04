<template>
  <div class="slider">
    <div class="slides" :style="{transform: 'translateX(' + translateAmount + '%)'}">
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slides.image" alt="">
        <div class="caption">
          <h2>{{slide.title}}</h2>
          <p>{{slide.description}}</p>
        </div>
      </div>
      
    </div>
    <button class="prev" @click="prevSlide">Prev</button>
    <button class="next" @click="nextSlide">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      translateAmount: 0,
      slides: [
        {
          image: '<https://via.placeholder.com/800x400?text=Slide+1>',
          title: 'Slide 1',
          description: 'This is the first slide'
        },
        {
          image: '<https://via.placeholder.com/800x400?text=Slide+2>',
          title: 'Slide 2',
          description: 'This is the second slide'
        },
        {
          image: '<https://via.placeholder.com/800x400?text=Slide+3>',
          title: 'Slide 3',
          description: 'This is the third slide'
        }
      ]
    };
  },
  computed: {
    prevSlideIndex() {
      return this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    },
    nextSlideIndex() {
      return this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
    }
  },
  methods: {
    prevSlide() {
      this.currentSlide = this.prevSlideIndex;
      this.translateAmount = -100 * this.currentSlide;
    },
    nextSlide() {
      this.currentSlide = this.nextSlideIndex;
      this.translateAmount = -100 * this.currentSlide;
    }
  }
};
</script>

<style scoped>
.slider {
  width: 80%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 300%;
  position: relative;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 1;
  padding: 10px;
  position: relative;
  text-align: center;
}

img {
  width: 100%;
  height: auto;
}

.caption {
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  width: 50%;
}

.caption h2 {
  font-size: 2em;
  margin-top: 0;
}

.caption p {
  font-size: 1.2em;
  margin-bottom: 0;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
