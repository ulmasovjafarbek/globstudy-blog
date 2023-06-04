<script setup>

</script>


<template>
<div class="card-box">
<div class="row">
    <div class="card col-md-4" style="width: 18rem; ">
        <router-link style="text-decoration: none;" to="/user">
        <img src="../images/P2-ISU-Copy.jpeg" class="card-img-top" alt="...">
        <center>
        <div class="card-body">
            <p class="card-text">USC Admission Statistics:</p>
            <p class="card-text2">Understanding the Numbers</p>
            <p class="card-text3">02 Apr</p>
        </div>
        </center>
        </router-link>
    </div>
    
    <div class="card col-md-4" style="width: 18rem; margin-left: 70px;">
        <router-link  style="text-decoration: none;" to="/usertwo">
        <img src="../components/images/img-universty/1644811175_22-fikiwiki-com-p-kartinki-universiteti-24.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <center>
                <div class="card-body">
                    <p class="card-text">USC Admission Statistics:</p>
                    <p class="card-text3">02 Apr</p>
                </div>
            </center>        
        </div>
        </router-link>
    </div>
    
    <div class="card card3 col-md-4" style="width: 18rem; margin-left: 70px;">
        <router-link style="text-decoration: none;" to="/Userthree">
            <img src="../components/images/img-universty/1200x800.jpg" class="card-img-top" alt="...">
            <center>
                <div class="card-body">
                <p class="card-text">Caltech Admint 412 Student to Class of 2027</p>
                <p class="card-text3">02 Apr</p>
            </div>
            </center>
        </router-link>
    </div>  
    
    <div class="card card4 col-md-4" style="width: 18rem; margin-top: 50px;">
        <router-link style="text-decoration: none;" to="/fourUser">
        <img src="../components/images/img-universty/4268d5616e914b5aaa8ac2e434b01e52.jpeg" class="card-img-top" alt="...">
        <center>
                <div class="card-body">
                    <p class="card-text">Caltech Admits 412 Students to Class of 2027</p>
                <p class="card-text3">02 Apr</p>
            </div>
        </center>
        </router-link>
    </div>
    <div class="card col-md-4" style="width: 18rem; margin-left: 70px; margin-top: 50px;">
        <center>
        <router-link style="text-decoration: none;" to="/fiveUser">
        <img src="../components/images/img-universty/7988420963_5ae544bbf9_o.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">lvy League Acceptance Rates for the Class of 2027</p>
            <p class="card-text3">02 Apr</p>
        </div>
        </router-link>
        </center>
    </div>
    <div class="card col-md-4 " style="width: 18rem; margin-left: 70px; margin-top: 50px;">
        <center>
        <router-link style="text-decoration: none;" to="/sixUSer">
        <img src="../components/images/img-universty/graduation009.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Class of 2027 Acceptance Rates</p>
            <p class="card-text3">02 Apr</p>
        </div>
        </router-link>
        </center>
    </div>
</div>
</div>
</template>

<style lang="scss" scoped>
.card3{
    @media screen and (max-width: 1031px) {
        
    }
}
.card4
.card-text3{
    font-size: 15px;
    color: gray;
}
.card-text2 {
    font-size: 19px;
    font-weight: 700;
    color: rgba(9, 9, 102, 0.782);
    margin-top: -15px;
}
.card-text {
    font-size: 19px;
    font-weight: 700;
    color: rgba(9, 9, 102, 0.782);
}
.card {
    border: none;
    padding: 0;
}
.card:hover{
    border: 1px;
    box-shadow: 2px 2px 2px rgba(49, 49, 49, 0.188);

}
.row{
    margin-top: 100px;
}
.card-box{
    width: 1000px;
    margin-left: 180px;
    margin-bottom: 50px;
    @media screen and (max-width: 1300px) {
        width: 95vw;
    }
    @media only screen and (max-width: 1131px) {
        
    }

}
</style>