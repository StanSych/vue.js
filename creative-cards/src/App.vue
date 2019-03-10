//MAIN STRUCTURE
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <!-- NAV -->
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        <!-- CURRENT (SELECTED) CARD (PAGE)-->
        <keep-alive>
          <component :is="currentPage"></component>
        </keep-alive>
        <!-- FOOTER -->
        <cc-footer>
          <p class="text-center" slot="app-name">&copy; {{ appName }}</p>
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link">Home</a></li>
              <li class="nav-item"><a class="nav-link">About</a></li>
              <li class="nav-item"><a class="nav-link">Contact</a></li>
            </ul>
          </nav>
        </cc-footer>
        <!-- / -->
      </div>
    </div>
  </div>
</template>

//JS
<script>
  //IMPORT HEADER
  import FirebaseConfig from './firebaseConfig.js'
  import Header from './components/Header.vue'
  import CardFront from './components/card/CardFront.vue'
  import CardInsideLeft from './components/card/CardInsideLeft.vue'
  import CardInsideRight from './components/card/CardInsideRight.vue'
  import CardBack from './components/card/CardBack.vue'
  import Footer from './components/Footer.vue'

  //REGISTER COMPONENTS
  export default {
    data: function(){
      return{
        currentPage: 'cardFront',
        appName: 'Creative Cards'
      }
    },
    components: {
      navHeader: Header,
      cardFront: CardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: CardInsideRight,
      cardBack: CardBack,
      ccFooter: Footer
    }
  }

</script>

//STYLES
<style lang="scss">
  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #111;
  }

  footer{
    margin-top: 2rem;
  }
</style>
