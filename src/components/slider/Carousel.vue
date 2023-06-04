<template>
      <Carousel :itemsToShow="2" :wrapAround="true" :transition="700" style="background: none;"> 
    <Slide v-for="image in images" :key="image.id">
    <div class="carousel__item">
      <router-link :to="{name:'user', params:{id:image.id}}"> 
      <img :src="image.img" alt="" class="img-fluid my-5 rounded-3">
      </router-link>
    </div>
  
  </Slide>

  ...
</Carousel>
</template>




<script setup>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// let input1 = document.querySelector('.input1') 
// let input2 = document.querySelector('.input2') 
// let input3 = document.querySelector('.input3') 
// let input4 = document.querySelector('.input4') 
// let input5 = document.querySelector('.input5') 


let images = [
  {
      id:1,
      img: new URL('/src/components/images/img-universty/1200x800.jpg', import.meta.url)
  },

  {
      id:2,
      img: new URL('/src/components/images/img-universty/E_O3jKCXEAMVIZM.jpg', import.meta.url)
  },
  {
      id:3,
      img: new URL('/src/components/images/img-universty/General_AB7O7888.webp', import.meta.url),
  },


]
</script>

<style lang="scss" scoped>
.input{
  margin-left: 10px;
}
.carousel__slide {
padding: 15px 0px 15px 45px;
}

.carousel__viewport {
perspective: 2000px;
}

.carousel__track {
transform-style: preserve-3d;
}

.carousel__slide--sliding {
transition: 0.5s;
}

.carousel__slide {
opacity: 0.9;
transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
opacity: 1;
transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
opacity: 1;
transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
opacity: 1;
transform: rotateY(0) scale(1.1);
}

</style>