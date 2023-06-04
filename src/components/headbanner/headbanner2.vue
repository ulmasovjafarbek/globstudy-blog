<template>
    <div class="banner">
        <div class="banner-liner">
        <center>
            <p class="text-banner">Cornell University Admits 4,994 students to Class of 2027</p>
            <p class="text-banner2">01 APR 2023</p>
        </center>
        </div>
    </div>
  
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
.text-banner2{
    color: rgba(10, 10, 52, 0.792);
    font-size: 15px;
    font-weight: 700;
    position: relative;
    top: 100px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
.text-banner {
    position: relative;
    top: 70px;
    z-index: 3;
    font-size: 33px;
    width: 750px;
    font-weight: 800;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(10, 10, 52, 0.792);
    @media only screen and (max-width: 900px) {
        width: 70vw;
    }
    @media only screen and (max-width: 310px) {
        width: 65vw;
        margin-left: -50px
    }
}
.banner{
   background-image: url(../images/img-universty/for-banner.jpeg);
   width: 100vw;
   height: 300px;
   background-size:cover;
   @media only screen and (max-width: 624px) {
        height: 350px;
   }
   @media only screen and (max-width: 560px) {
        height: 400px;
   }
   @media only screen and (max-width: 380px) {
        height: 450px;
   }
}
.banner-liner{
    width: 100vw;
    margin-top: -56px;
    top: 0;
    height: 100%;
background: rgb(255,255,255);background: linear-gradient(90deg, rgba(255,255,255,0.577468487394958) 100%, rgba(186,184,184,0.6222864145658263) 100%);}
</style>