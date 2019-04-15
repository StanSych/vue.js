//STRUCTURE
<template>
    <div @mouseover="showOptions = true" @mouseleave="showOptions = false">
        <form class="small" v-show="showOptions">
            <label for="selectBox">Font Size:</label>
            <select class="custom-select" id="selectBox" v-model="setFontSize">
                <option value="42">42px</option>
                <option value="48">48px</option>
                <option value="56">56px</option>
                <option value="64">64px</option>
            </select>

            <div class="form-check form-check-inline">
                <label class="form-check-label" for="">
                    <input type="radio" class="form-check-input" value="left" v-model="setTextAlign">
                    Left
                </label>
            </div>

            <div class="form-check form-check-inline">
                <label class="form-check-label" for="">
                    <input type="radio" class="form-check-input" value="center" v-model="setTextAlign">
                    Center
                </label>
            </div>

            <div class="form-check form-check-inline">
                <label class="form-check-label" for="">
                    <input type="radio" class="form-check-input" value="right" v-model="setTextAlign">
                    Right
                </label>
            </div>

            <div class="form-check form-check-inline">
                <label for="" class="form-check-input">
                    <input type="checkbox" class="form-check-input" v-model="setBold">
                    <strong>Bold</strong>
                </label>
            </div>

             <div class="form-check form-check-inline">
                <label for="" class="form-check-input">
                    <input type="checkbox" class="form-check-input" v-model="setItalic">
                    <i>Italic</i> 
                </label>
            </div>
        </form>

        <p :style="styleObject" :class="{ bold: setBold, italic: setItalic }">
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
       data: function() {
           return {
               showOptions: false,
               setFontSize: '',
               setTextAlign: '',
               setBold: false,
               setItalic: false
           }
       },
       computed: {
           styleObject: function(){
               return {
                   height: this.containerHeight + 'px',
                   fontSize: this.setFontSize + 'px',
                   textAlign: this.setTextAlign
               }
           }
       }
   }
</script>

//STYLES
<style lang="scss" scoped>
   p{
       font-family: 'Playfair Display', serif;
       font-size: 42px;
       line-height: 42px;
       color: #4d4d4d;
       margin: 5px 0;
       border: 1px dotted grey;
       white-space: pre-line;
       overflow: hidden;
   }

   .bold {
       font-weight: bold;
   }

    .italic {
        font-style: italic;
    }

    form {
        position: absolute;
        border-bottom: 1px dotted grey;
        margin-top: 10px;
        margin-bottom: 5px;
        padding-bottom: 5px;
    }

    select {
        height: 40%;
        width: auto;
        margin-bottom: 5px;
    }

</style>
