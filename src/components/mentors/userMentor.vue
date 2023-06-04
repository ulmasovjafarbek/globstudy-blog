<template>
    <!-- <Header/> -->
    <div class="box-for-mentors">
        <div class="box-of-text">
            <h1 class="text-top-of-title">This is me</h1>
            <h1 class="title">Jafarbek Ulmasov</h1>
            <h1 class="text-bottom-of-title">I'm Lead Mentor</h1>
        </div>
        <img class="img-mentor" src="../card/cardMentors/img-Mentors/JeffPng.png" alt="">
    </div>
        <div class="box-of-information">
            <div class="wrapper">
            <div class="card-information">
                <center>
                    <h1 class="title-card">Students</h1>
                    <p class="student-name">Yuldashev Elbek</p>
                </center>
            </div>
            <div class="card-information">
            
            </div>
            </div>
        </div>
        <Banner/>
        <center>
            <h1 class="mani-title-bottom">Information</h1>
        <div class="box-information-main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente voluptate laboriosam aliquam hic veniam, repudiandae perspiciatis animi voluptatem, sequi, debitis laborum suscipit aspernatur iusto id ex voluptatum beatae consequatur ducimus doloribus esse reiciendis dolore. At itaque tenetur non ipsa ad, magni, ex iste aperiam, esse quis dolorum nesciunt molestias praesentium nostrum aliquam laboriosam? Aliquid quia numquam dignissimos corrupti impedit! Quaerat illo placeat obcaecati, ut perspiciatis modi rerum labore</p>
            <center>
                <p style="width: 70vw;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae aspernatur id, hic asperiores perferendis doloribus natus consequatur culpa veritatis voluptate nostrum dolore magnam sed repellendus. Tempora blanditiis natus vero facere id. Totam officiis quos obcaecati tenetur quisquam molestias consectetur nostrum in suscipit fuga blanditiis nam possimus quibusdam quasi, nisi sed consequatur optio, saepe officia ex eaque. Ab voluptates expedita alias saepe quisquam delectus facilis incidunt, doloribus perspiciatis! Ducimus commodi qui, repellat exercitationem quam dicta nemo non ea praesentium odit, tempore debitis ipsa temporibus similique molestias deleniti omnis? Vero minus numquam enim! Reiciendis, eligendi? Similique pariatur rerum officiis nostrum, eius corrupti ea magni neque esse temporibus dolorum aut, fuga fugiat! Sint cupiditate minus pariatur. Cum, eum modi? Quasi deleniti eos reprehenderit non. Quia, deleniti? Illum inventore, aspernatur vel eos commodi porro voluptate vero officiis esse suscipit eius iusto tenetur, cumque molestias est voluptatibus maiores aut voluptatem quibusdam ipsa eligendi corporis repellendus. Provident laudantium nisi repellendus soluta repellat reprehenderit sequi quo, sapiente dignissimos perspiciatis. Neque, tenetur deserunt! Dolore sed itaque modi, velit recusandae soluta adipisci temporibus quo at nisi beatae error assumenda atque, odio obcaecati ipsum nihil accusamus illum quaerat autem eveniet blanditiis? Consequuntur, vero. Doloribus iste nemo enim quis consequatur.</p>
            </center>
        </div>
        </center>
        <Footer/>
</template>

<script setup>
import Footer from '../footer.vue'
import Banner from '../banner.vue'
import Header from '../header/Mentorheader.vue'
</script>

<style lang="scss" scoped>
.student-name{
    font-size: 30px;
    color: white;
    font-weight: 600;
}
.box-of-text{
    margin-left: 100px;
    @media only screen and (max-width:900px) {
        margin: auto;
    }
}
.box-information-main{
    width: 95vw;
}
.mani-title-bottom {
    font-size: 40px;
    color: rgb(9, 9, 83);
    font-weight: 700;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.wrapper{
    display: grid;
    margin-left: -100px;
    grid-template-columns: repeat(2,1fr);
    @media only screen and (max-width:900px) {
        grid-template-columns: repeat(1,1fr);
        margin-top: -150px;
    }
}
.title-card {
    margin-top: 20px;
    font-weight: 600;
    font-family:monospace;
    color: rgb(37, 37, 211);
    // margin-top: 30px;
}
.card-information{
    width: 40vw;
    margin: auto;
    margin-top: 100px;
    height:  450px;
    border: 5px solid yellow;
    margin-bottom: 20px;
    border-style:dashed;
    border-radius: 10px;
    background-image: url(../images/student2.jpg);
    background-size: cover;
    @media only screen and (max-width: 900px) {
        width: 70vw;
    }
}
.information{

}
.box-of-information {
    background-repeat: no-repeat;
    margin-left: 100px;
    margin-top: 650px;
}
.text-bottom-of-title {
    width: 15vw;
    color:rgb(11, 22, 82);
    font-size: 55px;
    font-weight: 700;
    margin-top: 30px;
    margin-left: 50px;
    @media only screen and (max-width:900px) {
        margin-top: 0px;
    }
}
.img-mentor {
    @media only screen and (max-width:900px) {
        display: none;
    }
    // margin-left: 200px;
    // width: ;
}
.text-top-of-title {
    color:white;
    font-size: 20px;
    font-weight: 700;
    margin-top: 100px;
    margin-left: 50px;
    @media only screen and (max-width:900px) {
        margin-top: 0px;
    }
}
.box-for-mentors {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../images/banner.png);
    background-color: #1f45f4;
    @media only screen and (max-width:900px) {
        flex-direction: column;
        height: 80vh;
    }
}
// .box-for-img {
//     margin-left: 500px;
//     margin-top: 140px;
//     background-image: url(../card/cardMentors/img-Mentors/JeffPng.png);
//     background-size: cover;
//     width: 40%;
//     height: 100%;
//     display: flex;
//     align-items: flex-start;
//     @media only screen and (max-width:1998px) {
//         height: 450px;
//     }
//     @media only screen and (max-width:1047px) {
//         width: 100%;
//         height: 500px;
//         border-radius: 15px 15px 0px 0px;
//     }
// }
.title {
    color: white;
    font-size: 70px;
    font-weight: 600;
    margin-left: 50px;
    width: 300px;
    font-family:monospace;
    margin-top: 10px;
}
</style>