//MAIN STRUCTURE
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <!-- NAV -->
        <nav-header>

        </nav-header>
        <!-- / -->
        
        <!-- CARD FRONT -->
        <card-front>

        </card-front>
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

  //REGISTER COMPONENTS
  export default {
    components: {
      navHeader: Header,
      cardFront: CardFront
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
