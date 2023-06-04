<template>
<header>
  <nav>
    <div class="brand">
      <img class="logo" src="../images/logo-globstudy.svg" alt="">
    </div>
    <div class="burger" @click="showNav = !showNav">
      <div class="line" :class="{ active: showNav }"></div>
      <div class="line" :class="{ active: showNav }"></div>
      <div class="line" :class="{ active: showNav }"></div>
    </div>
    <ul class="nav-links" :class="{ active: showNav }">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <center>
      <h1 class="title">About Our Students</h1>
  </center>
</header>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style lang="scss">
header{
  background-image: url(../images/banner.png);
  height: 500px;
  width: 100vw;
  background-color: #1f45f4;
  position: relative;
  z-index: 1;
  .title{
    width: 30vw;
    color: white;
    font-size: 50px;
    padding: 5px 5px 5px 5px;
    margin-top: 100px;
    font-weight: 600;
    font-family:sans-serif;
    padding-bottom: 8px;
    @media only screen and (max-width: 636px) {
        font-size: 40px;
        width: 35vw;
    }
    @media only screen and (max-width: 550px) {
        font-size: 40px;
        width: 60vw;
    }
    // @media only screen and (max-width: 460px) {
    //     font-size: 32px;
    // }
    @media only screen and (max-width: 390px) {
        font-size: 35px;
        width: 55vw;
    }
}
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
}

.brand a {
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  position: absolute;
  right: 30px;
  cursor: pointer;
  z-index: 444;
}

.line {
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.line.active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.line.active:nth-child(2) {
  opacity: 0;
}

.line.active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  position: relative;
  @media only screen and (max-width:768px) {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: -20px;
    left: 0;
    background-color: rgba(21, 21, 39, 0.722)
  }
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  font-family: Arial, Helvetica, sans-serif;
}

.nav-links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    padding: 0;
  }

  .nav-links.active {
    display: flex;
  }

  .burger {
    display: flex;
  }
}
</style>
