//MAIN STRUCTURE
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <!-- NAV -->
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        
        <!-- CURRENT (SELECTED) CARD (PAGE)-->
        <div id="instructions" class="text-center italic">
          <div class="row">
            <section class="col-sm-6">
              <p><em>&larr; Make changes in the edit card area below:</em></p>
            </section>
            <section class="col-sm-6">
              <p><em>Ant they will show on the card! &rarr;</em></p>
            </section>
          </div>
        </div>

        <transition 
        appear
        appear-active-class="custom-appear-active-class"
        name="fade" 
        mode="out-in"
        @enter="enter"
        type="transition">
          <keep-alive>
            <component :is="currentPage"></component>
          </keep-alive>
        </transition>

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
    methods: {
      enter: function(el) {
        document.getElementById('instructions').style.display = "none";
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

  //animations & transitions
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

    .fade-enter-active{
      transition: opacity 1s ease-in-out;
    }

    .custom-appear-active-class {
      transition: opacity 1s;
    }
    
    .fade-leave-active {
      transition: opacity .45s ease-in-out;
    }

    .custom-enter-active {
        animation: scale-in 0.5s;
    }

    .custom-leave-active {
        animation: scale-out 0.5s;
    }

    @keyframes scale-in {
        0% {
            transform: scale(0);
        } 

        100% {
            transform: scale(1);
        }
    }

    @keyframes scale-out {
        0% {
            transform: scale(1);
        } 

        100% {
            transform: scale(0);
        }
    }
</style>
