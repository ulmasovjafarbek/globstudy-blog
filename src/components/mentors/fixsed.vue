<template>
    <router-link style="text-decoration: none;" to="/Mentors">
        <div class="box">
            <p class="text-button">Mentors</p>
        </div>
    </router-link>
</template>/

<script setup>

</script>

<style lang="scss" scoped>
.box{
    width: 30px;
    height: 150px;
    background-color: rgba(152, 22, 22, 0.792);
    position: fixed;
    right: 0px;
    top: 300px;
    z-index: 1;
    border-radius: 5px 0px 0px 5px;
}
.text-button{
    color: white;
    font-size: 22px;
    writing-mode: vertical-rl;
    margin-top: 30px;
}

</style>