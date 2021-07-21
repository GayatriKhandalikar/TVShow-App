<template>
  <div id="app">
    <Header></Header>
     <router-view/>
    <Footer></Footer>
  
  <div>
    <div id="nav">
     
    </div>
    <!-- <router-view /> -->
  </div>
    
   
  </div>
</template>

<script>
 import Header from './components/Header.vue'
 import Footer from './components/Footer.vue'
export default {
 components:{Header,Footer}
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html, body {
  margin: 0;
  height: 100%;
  min-height: 100%;
}
</style>