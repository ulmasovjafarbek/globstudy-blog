<template>
    <center>
        <div class="banner">
            <center>
                <p class="text-banner">Begin Your Journey To Your Dream University</p>
                <p class="text-banner2">Crimson students are up to 4x more likely to gain admission into top universities! Book a free consultation to learn more about how we can help you get there!</p>
                <button class="button-banner">Book A FREE CONSULTATION</button>
            </center>
        </div>
    </center>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button-banner{
    font-weight: 600;
    margin-top: 20px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    background: rgb(245,98,0);
    background: linear-gradient(90deg, rgba(245,98,0,1) 52%, rgba(255,241,30,1) 100%);
    border: none;
    width: 300px;
    height: 38px;
    border-radius: 20px;
    @media only screen and (max-width: 630px) {
        width: 250px;

    }
    @media only screen and (max-width: 485px) {
        width: 200px;
        height: 50px;
        
    }
}
.text-banner2{
    font-size: 20px;
    color: white;
    width: 80vw;
    margin-top: 80px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.text-banner {
    color: white;
    font-size: 40px;
    font-weight: 700;
    width: 50vw;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
    top: 50px;
}
.banner{
    // width: 1114px;
    width: 100vw;
    height: 100%;
    padding-bottom: 50px;
    background-color: rgba(5, 5, 34, 0.922);
    margin-top: 30px;
    margin-bottom: 40px;
}

</style>