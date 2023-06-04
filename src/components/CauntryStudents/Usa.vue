<template>
    <Header/>
    <center>
        <h1 class="cauntiry">Usa Top Universitys Students from Globstudy</h1>
    </center>
    <div class="wrapper">
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
    </div>
    <Banner/>
    <div class="wrapper">
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
        <div class="item">
            <div class="box-img"></div>
            <center>
                <h2 class="name">Steave Jobs</h2>
                <p class="universty-name">Student of Chicago University</p>
                <p class="schoolarship">Schoolship 150K winner</p>
            </center>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import Header from '../header/Studentheader.vue'
import Banner from '../banner.vue'
import Footer from '../footer.vue'
</script>

<style lang="scss" scoped>
.wrapper{
    row-gap: 40px;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-left: 120px;
    margin-bottom: 20px;
}
.cauntiry {
        font-size: 45px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: rgb(11, 11, 121);
        font-weight: 700;
        margin-top: 20px;
    }
.item{
        width: 25vw;
        height: 450px;
        box-shadow: 5px 5px 15px gray; 
        .box-img{
            width: 100%;
            height: 60%;
            background-size: cover;
            border: 2px solid blue;
            border-bottom: 0px;
            background-image: url("https://www.verywellmind.com/thmb/MuqzDV_THUKE9-ZGkf6pEO6V4DM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-530682955-56a797e55f9b58b7d0ebf958.jpg");   
            }

            .schoolarship{
                font-size: 20px;
                font-weight: 700;
                color: rgb(255, 204, 0);
            }
            .universty-name{
                font-size: 20px;
                font-weight: 600;
            }
            .name{
                color: rgb(48, 48, 121);
                font-weight: 700;
                font-family:sans-serif;
            } 
        }
</style>