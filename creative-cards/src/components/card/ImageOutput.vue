//STRUCTURE
import { functions } from 'firebase';
<template>
    <div class="img-container" :style="styleObject">
       <img src="" id="outputImage" alt="">{{ displayImage }}
    </div>
</template>

//JS
<script>
    import Firebase from 'firebase'

    export default {
        props: {
            displayImage: {
                type: String
            },
            containerHeight: {
                type: Number,
                default: 200
            }
        },
        watch: {
            displayImage: function() {
                var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage)
                storageRef.getDownloadURL().then(function(url) {
                    var img = document.getElementById('outputImage')
                    img.src = url
                })
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
<style lang="scss">
    .img-container {
        border: 1px dotted #ccc;
        overflow: hidden;
        margin: 5px 0;
    }
</style>
