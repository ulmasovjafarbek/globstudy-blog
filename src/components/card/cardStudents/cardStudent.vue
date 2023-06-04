<template>
    <center>
        <h1 class="cauntiry">USA</h1>
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
    </div>
    <center>
        <router-link to="/Usastudents">
            <button class="button">More</button>
        </router-link>
    </center>
    

    <center>
        <h1 class="cauntiry">Italy</h1>
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
    </div>
    <center>
        <router-link to="/Italystudents">
            <button class="button">More</button>
        </router-link>
    </center>


    <center>
        <h1 class="cauntiry">South Korea</h1>
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
    </div>
    <center>
        <router-link to="/Koreastudents">
            <button class="button">More</button>
        </router-link>
    </center>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button{
    width: 250px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: none;
    background-color: rgb(12, 12, 120);
    color: white;
    font-size: 19px;
}
    .cauntiry {
        font-size: 45px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: rgb(11, 11, 121);
        font-weight: 700;
        margin-top: 20px;
    }
.wrapper{
    margin: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 20px;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin-top: 0px;
    }

    
        .item{
        width: 25vw;
        height: 450px;
        box-shadow: 5px 5px 15px gray; 
        @media only screen and (max-width: 900px) {
            width: 70vw;
            margin: auto;
            margin-top: 60px;
        }
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
}

</style>