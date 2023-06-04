<template>
    <center>
    <div class="wrapper">
        <div class="card-box">
            <router-link  style="text-decoration: none;" to="/fiveUser">
                <div class="item item1">
                    <center>
                        <p class="text-1-card">Duke Acceptance Rate at 6% for Class of 2027</p>
                        <p class="text-2-card">02 Apr</p>
                    </center>
                </div>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/fiveUser">
            <div class="item item2">
                <center>
                        <p class="text-1-card">Duke Acceptance Rate at 6% for Class of 2027</p>
                        <p class="text-2-card">02 Apr</p>
                </center>
            </div>
            </router-link>

            <router-link style="text-decoration: none;" to="/fiveUser">
            <div class="item item3">
                <center>
                        <p class="text-1-card">Duke Acceptance Rate at 6% for Class of 2027</p>
                        <p class="text-2-card">02 Apr</p>
                </center>
            </div>
            </router-link>
        </div>
    </div>
</center>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .card-box{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin: auto;
        // display: flex;
        // flex-direction: row;
        // justify-content: space-around;
        margin-top: 30px;
        gap: 20px;
        // flex-wrap: wrap;
        @media only screen and (max-width: 1310px) {
            grid-template-columns: repeat(2,1fr);
        }
        @media only screen and (max-width: 990px) {
            grid-template-columns: repeat(1,1fr);
            margin-top: 30px;
        }
        .item{
            width: 380px;
            height: 380px;
            border-radius: 12px;
            border: 3px solid #1f45f4;
            @media only screen and (max-width: 1071px) {
                width: 350px;
                height: 350px;
            }
            @media only screen and (max-width: 990px) {
                width: 70vw;
                height: 400px;
            }
            @media only screen and (max-width: 570px) {
                width: 400px;
                height: 300px;
            }
            @media only screen and (max-width: 481px) {
                width: 80vw;
                height: 300px;
            }
            .text-1-card {
                width: 40vw;
                font-family:Georgia, 'Times New Roman', Times, serif;
                font-size: 22px;
                margin-top: 130px;
                font-weight: 800;
                color: rgb(9, 9, 102);
                background: linear-gradient(90deg, rgba(197,200,230,0.4822303921568627) 100%, rgba(0,9,255,0) 100%);
                @media only screen and (min-width: 990px) {
                    width: 250px;
                }
                @media only screen and (max-width:570px) {
                    margin-top: 80px;
                }
                @media only screen and (max-width:320px) {
                    margin-top: 20px;
                }
            }
            .text-2-card{
                margin-top: 20px;
                    font-weight: 600;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 17px;
                    color: rgb(255, 255, 255);
                    background-color: rgb(9, 9, 102);
                    @media only screen and (max-width: 990px) {
                        margin-top: 70px;
                    }
                    @media only screen and (max-width: 570px) {
                        margin-top: 0px;
                    }
                }
        }
        .item1{
            background-image: url(../images/img-universty/4268d5616e914b5aaa8ac2e434b01e52.jpeg);
            background-size: cover;
        }
        .item2{
            background-image: url(../images/img-universty/1200x800.jpg);
            background-size: cover;
        }
        .item3{
            background-image: url(../images/img-universty/General_AB7O7888.webp);
            background-size: cover;
        }
        .item4{
            background-image: url(../images/img-universty/P2-ISU-Copy.jpeg);
            background-size: cover;
        }
        .item5{
            background-image: url(../images/img-universty/Rostock_asv2018-05_img29_University.jpg);
            background-size: cover;
        }
        .item6{
            background-image: url(../images/img-universty/E_O3jKCXEAMVIZM.jpg);
            background-size: cover;
        }
    }
}


</style>