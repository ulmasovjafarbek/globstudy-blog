<script setup>

</script>

<template>
<div class="footer">
    <div class="fotter-text-line">
        <div class="first-line">
        <img class="logo-footer" src="../images/logo-full.svg" alt="">
        <p class="text-footer">Globstudy is a leading scholarship consulting agency. We have helped dozens of students gain admission to their dream universities with full scholarships, and we can do the same for you.</p>
    </div>
    <div class="link-lines"> 
        <div class="second-line">
            <p class="programs-text-footer" style="font-size: 25px;">Programs</p>
            <div style="margin-top: 20px; display:flex;flex-direction: column; margin-top: -10px;">
                <router-link class="text-line" to="">Accelerator</router-link>
                <router-link class="text-line" to="">Uprad Mentorship</router-link>
                <router-link class="text-line" to="">USA Mentorship</router-link>
                <router-link class="text-line" to="">General Mentorship</router-link>
                <router-link class="text-line" to="">Accelerator</router-link>
            </div>
        </div>
        <div class="third-line">
            <p style="font-size: 25px;">Resources</p>
            <div style="margin-top: 20px; display:flex;flex-direction: column; margin-top: -10px;">
                <router-link class="text-line" to="">Accelerator</router-link>
                <router-link class="text-line" to="">Uprad Mentorship</router-link>
                <router-link class="text-line" to="">USA Mentorship</router-link>
                <router-link class="text-line" to="">General Mentorship</router-link>
                <router-link class="text-line" to="">Accelerator</router-link>
            </div>
        </div>
        <div class="fourth-line">
            <p style="font-size: 25px;">Resources</p>
            <div style="margin-top: 20px; display:flex;flex-direction: column; margin-top: -10px;">
                <div style="display: flex;">
                    <img class="icon" src="./images/icons/instagram.svg" alt="">
                    <a href="https://www.instagram.com/globstudy/" class="text-last-line" >Instagram</a>
                </div>
                <div style="display: flex;">
                    <img style="width: 15px;" class="icon" src="./images/icons/telegram.svg" alt="">
                    <a href="https://t.me/globstudy" class="text-last-line">Telegram</a>
                </div>
                <div style="display: flex;">
                    <img style="width: 10px; margin-left: 2px;" class="icon" src="./images/icons/facebook.svg" alt="">
                    <a href="https://www.facebook.com/globstudy.uz" class="text-last-line">Facebook</a>
                </div>
                <div style="display: flex;">
                    <img style="width: 15px; margin-left: 2px;" class="icon" src="./images/icons/tiktok.svg" alt="">
                    <a href="https://tiktok.com/@globstudy" class="text-last-line">Tik tok</a>
                </div>
                <div style="display: flex;">
                    <img style="margin-left: 2px;" class="icon" src="./images/icons/youtube.svg" alt="">
                    <a href="https://www.youtube.com/channel/UChaxFiZlroDSWazELROul0Q" class="text-last-line">You Tube</a>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
<footer>
    <p class="text-bottom-footer">Terms of service</p>
    <p class="text-bottom-footer3">Privacy Policy</p>
    <p class="text-bottom-footer2">© 2023 Globstudy. All Rights Reserved</p>
</footer>
</template>

<style lang="scss" scoped>
.programs-text-footer {
    @media only screen and (max-width: 656px) {
        margin-top: 30px;
    }
}
.icon{
    width: 17px;
    margin-top: 15px;
    margin-right: 2px;
}
.text-bottom-footer{
    margin-top: 15px;
    margin-left: 20px;
    @media only screen and (max-width:656px) {
        margin-left: 60px;
    }
}
.text-bottom-footer3{
    margin-top: 15px;
    margin-left: 20px;
    @media only screen and (max-width:740px) {
        margin-left: 0px;
    }
    @media only screen and (max-width:740px) {
        margin-top: -45px;
        margin-left: 60px;
    }
}
.text-bottom-footer2{
    margin-top: 15px;
    margin-left: 680px;
    @media only screen and (max-width:1412px) {
        margin-left: 580px;
    }
    @media only screen and (max-width:1324x) {
        margin-left: 500px;
    }
    @media only screen and (max-width:1244px) {
        margin-left: 450px;
    }
    @media only screen and (max-width:1168px) {
        margin-left: 380px;
    }
    @media only screen and (max-width:1100px) {
        margin-left: 320px;
    }
    @media only screen and (max-width:1100px) {
        margin-left: 200px;
    }
    @media only screen and (max-width:844px) {
        margin-left: 150px;
    }
    @media only screen and (max-width:844px) {
        margin-left: 150px;
    }
    @media only screen and (max-width:788px) {
        margin-left: 100px;
    }
    @media only screen and (max-width:740px) {
        margin-left: 60px;
    }
    @media only screen and (max-width:675px) {
        margin-left: 60px;
    }
    @media only screen and (max-width:656px) {
        margin-top: -50px;

    }
}

.footer{
    width: 100%;
    height: 350px;
    @media screen and (max-width: 700px) {
        width: 100vw;
    }
    .link-lines {
        display: flex;
        font-family:unset;
        @media only screen and (max-width:1084px) {
            flex-direction: column;
            margin-top: 230px;
            position: absolute;
            left: 0px;
        }
    }
}
.fourth-line{
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 85px;
    @media only screen and (max-width: 1352px) {
        margin-left: 60px;
    }
}
.third-line{
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 85px;
    @media only screen and (max-width: 1352px) {
        margin-left: 60px;
    }

}
.text-line {
    text-decoration: none;
    color: gray;
    font-size: 15px;
    margin-top: 15px;
}
.text-last-line {
    color: gray;    
    font-size: 15px;
    font-weight: 500;
    margin-top: 15px;
}
.fotter-text-line {
    display: flex;
    flex-direction: row;
}
.second-line{
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    margin-top: 85px;
    @media only screen and (max-width: 1352px) {
        margin-left: 160px;
    }
    @media only screen and (max-width: 1224px) {
        margin-left: 130px;
    }
    @media only screen and (max-width: 1172px) {
        margin-left: 80px;
    }
    @media only screen and (max-width: 1120px) {
        margin-left: 50px;
    }
    
}
.text-footer{
    width: 400px;
    font-size: 17px;
    color: rgb(48, 48, 48);
    margin-left: 50px;
    margin-top: 50px;
    @media only screen and (max-width: 464px) {
        width: 300px;
    }
    @media only screen and (max-width: 348px) {
        width: 250px;
        margin-top: 20px;
    }
    @media only screen and (max-width: 308px) {
        width: 200px;
        margin-top: 10px;
    }
}
.logo-footer{
    width: 250px;
    margin-left: 50px;
    margin-top: 80px;
}
footer{
    gap: 70px;
    width: 100vw;
    height: 80px;
    font-size: 15px;
    display: flex;
    font-weight: 400;
    flex-direction: row;
    color: white;
    background-color: rgb(42, 62, 237);
    @media only screen and (max-width:1084px) {
       margin-top: 840px;
    }
    @media only screen and (max-width: 656px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 900px;
        padding-bottom: 10px;;
    }
}

.first-line{
    display: flex; 
    flex-direction: column;
}
</style>

