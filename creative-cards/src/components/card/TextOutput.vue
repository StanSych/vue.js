//STRUCTURE
<template>
    <div>
        <p :style="styleObject">
            {{ displayText }}
        </p>
    </div>
</template>

//JS
<script>
   export default {
       props: {
           displayText: [String],
           containerHeight: {
               type: Number,
               default: 200
           }
       },
       computed: {
           styleObject: function(){
               return {
                   height: this.containerHeight + 'px'
               }
           }
       }
   }
</script>

//STYLES
<style lang="scss" scoped>
    //font-family: 'Playfair Display', serif;
   p{
       font-family: 'Playfair Display', serif;
       font-size: 42px;
       line-height: 42px;
       text-shadow: 2px 2px 2px #aaa;
       color: #4d4d4d;
       margin: 5px 0;
       border: 1px dotted grey;
       white-space: pre-line;
       overflow: hidden;
   }
</style>
