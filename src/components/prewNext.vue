<template>
  <div>
    <div v-for="i in 10" :key="i">
      <input type="radio" v-model="sliderValue" :value="i">
      {{ i }}
    </div>
    <button @click="prev()">Previous</button>
    <button @click="next()">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 1
    }
  },
  methods: {
    prev() {
      if (this.sliderValue > 1) {
        this.sliderValue--;
      }
    },
    next() {
      if (this.sliderValue < 10) {
        this.sliderValue++;
      }
    }
  }
}
</script>
