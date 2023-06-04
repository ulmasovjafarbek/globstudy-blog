<template>
        <div class="wrapper">
            <router-link style="text-decoration: none;" to="/userMentor">
                <div class="item">
                    <div class="box-for-img3"></div>
                <div class="NameAndInf">
                        <h1 class="title-Mentor">Jafarbek Ulmasov</h1>
                        <p class="information-Mentor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officiis ipsum ipsa recusandae atque repudiandae doloribus magnam cumque, eius vitae possimus optio maxime culpa fuga dolore voluptate minus, iste consequatur quos numquam enim? Repellat quam cum saepe eaque ullam ad commodi esse sint placeat asperiores dicta eius labore perferendis ab exercitationem impedit consequatur, ducimus maiores ipsa illum obcaecati? Quaerat aut natus iste fuga, quibusdam veniam quas molestias inventore vel? Tempora dolorum odio in. Cumque error odit reprehenderit quas porro laudantium nisi ea voluptatum consequuntur repudiandae a ipsum sed, dignissimos perspiciatis voluptate enim beatae excepturi at non incidunt eligendi. Commodi, veniam?</p>
                    </div>
                </div>
            </router-link>
            <div class="item">
                <div class="box-for-img2"></div>
                <div class="NameAndInf">
                    <h1 class="title-Mentor">Farux Rasulov</h1>
                    <p class="information-Mentor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officiis ipsum ipsa recusandae atque repudiandae doloribus magnam cumque, eius vitae possimus optio maxime culpa fuga dolore voluptate minus, iste consequatur quos numquam enim? Repellat quam cum saepe eaque ullam ad commodi esse sint placeat asperiores dicta eius labore perferendis ab exercitationem impedit consequatur, ducimus maiores ipsa illum obcaecati? Quaerat aut natus iste fuga, quibusdam veniam quas molestias inventore vel? Tempora dolorum odio in. Cumque error odit reprehenderit quas porro laudantium nisi ea voluptatum consequuntur repudiandae a ipsum sed, dignissimos perspiciatis voluptate enim beatae excepturi at non incidunt eligendi. Commodi, veniam?</p>
                </div>
            </div>
            <div class="item">
                <div class="box-for-img"></div>
                <div class="NameAndInf">
                    <!-- <center> -->
                    <h1 class="title-Mentor">Sardor Ahmedjanov</h1>
                    <!-- </center> -->
                    <p class="information-Mentor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officiis ipsum ipsa recusandae atque repudiandae doloribus magnam cumque, eius vitae possimus optio maxime culpa fuga dolore voluptate minus, iste consequatur quos numquam enim? Repellat quam cum saepe eaque ullam ad commodi esse sint placeat asperiores dicta eius labore perferendis ab exercitationem impedit consequatur, ducimus maiores ipsa illum obcaecati? Quaerat aut natus iste fuga, quibusdam veniam quas molestias inventore vel? Tempora dolorum odio in. Cumque error odit reprehenderit quas porro laudantium nisi ea voluptatum consequuntur repudiandae a ipsum sed, dignissimos perspiciatis voluptate enim beatae excepturi at non incidunt eligendi. Commodi, veniam?</p>
                </div>
            </div>
            <div class="item">
                <div class="box-for-img4"></div>
                <div class="NameAndInf">
                    <h1 class="title-Mentor">Shaxboz Demirov</h1>
                    <p class="information-Mentor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officiis ipsum ipsa recusandae atque repudiandae doloribus magnam cumque, eius vitae possimus optio maxime culpa fuga dolore voluptate minus, iste consequatur quos numquam enim? Repellat quam cum saepe eaque ullam ad commodi esse sint placeat asperiores dicta eius labore perferendis ab exercitationem impedit consequatur, ducimus maiores ipsa illum obcaecati? Quaerat aut natus iste fuga, quibusdam veniam quas molestias inventore vel? Tempora dolorum odio in. Cumque error odit reprehenderit quas porro laudantium nisi ea voluptatum consequuntur repudiandae a ipsum sed, dignissimos perspiciatis voluptate enim beatae excepturi at non incidunt eligendi. Commodi, veniam?</p>
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.NameAndInf{
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:1047px) {
        margin-top: 30px;
    }
}
.item{
    display: flex;
    // margin-left: 65px;
    margin-top: 20px;
    width: 90vw;
    height: 100%;
    border: 5px solid rgb(59, 59, 255);
    border-radius: 20px;
    @media only screen and (max-width:1047px) {
        flex-direction: column;
    }
}
.wrapper{
    margin: auto 60px;
    margin-bottom: 20px;
    @media only screen and (max-width: 900px) {
        margin: auto 30px;
    }
    @media only screen and (max-width: 600px) {
        margin: auto 20px;
    }
    @media only screen and (max-width: 490px) {
        margin-left: 10px;
    }
}
.box-for-img {
    background-image: url(../cardMentors/img-Mentors/sardorPng.png);
    background-color: rgb(27, 27, 66);
    background-size: cover;
    width: 40%;
    height: 400px;
    border-radius: 15px 0px 0px 15px;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width:1998px) {
        height: 450px;
    }
    @media only screen and (max-width:1047px) {
        width: 100%;
        height: 500px;
        border-radius: 15px 15px 0px 0px;
    }
}
.box-for-img4 {
    background-image: url(../cardMentors/img-Mentors/ShaxboPng.png);
    background-color: rgb(27, 27, 66);
    background-size: cover;
    width: 40%;
    height: 400px;
    border-radius: 15px 0px 0px 15px;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width:1998px) {
        height: 450px;
    }
    @media only screen and (max-width:1047px) {
        width: 100%;
        height: 500px;
        border-radius: 15px 15px 0px 0px;
    }
}
.box-for-img3 {
    background-image: url(../cardMentors/img-Mentors/JeffPng.png);
    background-color: rgb(27, 27, 66);
    background-size: cover;
    width: 40%;
    height: 400px;
    border-radius: 15px 0px 0px 15px;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width:1998px) {
        height: 450px;
    }
    @media only screen and (max-width:1047px) {
        width: 100%;
        height: 500px;
        border-radius: 15px 15px 0px 0px;
    }
}
.box-for-img2 {
    background-image: url(../cardMentors/img-Mentors/faruxPNG.png);
    background-color: rgb(27, 27, 66);
    background-size: cover;
    width: 40%;
    height: 400px;
    border-radius: 15px 0px 0px 15px;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width:1998px) {
        height: 450px;
    }
    @media only screen and (max-width:1047px) {
        width: 100%;
        height: 500px;
        border-radius: 15px 15px 0px 0px;
    }
}
.title-Mentor {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(25, 25, 128);
    margin-top: 40px;
    margin-left: 50px;
    @media only screen and (max-width:1047px) {
        margin: auto;
        // margin-left: -370px;
    }
}
.information-Mentor {
    width: 40vw;
    color: black;
    margin-left: 50px;
    @media only screen and (max-width:1047px) {
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
        margin-top: 20px;
    }
}
</style>