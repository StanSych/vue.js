//MAIN STRUCTURE
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <!-- NAV -->
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        <!-- CURRENT (SELECTED) CARD -->
        <keep-alive>
          <component v-bind:is="currentPage"></component>
        </keep-alive>
        <!-- / -->
      </div>
    </div>
  </div>
</template>

//JS
<script>
  //IMPORT HEADER
  import Header from './components/Header.vue'
  import CardFront from './components/card/CardFront.vue'
  import CardInsideLeft from './components/card/CardInsideLeft.vue'
  import CardInsideRight from './components/card/CardInsideRight.vue'
  import CardBack from './components/card/CardBack.vue'

  //REGISTER COMPONENTS
  export default {
    data: function(){
      return{
        currentPage: 'cardFront'
      }
    },
    components: {
      navHeader: Header,
      cardFront: CardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: CardInsideRight,
      cardBack: CardBack
    }
  }

</script>

//STYLES
<style lang="scss">
  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #111;
  }
</style>
