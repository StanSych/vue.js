//STRUCTURE
import { functions } from 'firebase';
<template>
    <div class="img-container" :style="styleObject" @mouseover="showOptions = true" @mouseleave="showOptions = false">
        <button type="button" class="btn btn-outline-danger btn-sm" @click="clearImageProp" v-show="showOptions">Remove Image</button>
        <img src="" id="outputImage" alt="">{{ displayImage }}
    </div>
</template>

//JS
<script>
    import Firebase, { functions } from 'firebase'

    export default {
        props: {
            displayImage: {
                type: String
            },
            containerHeight: {
                type: Number,
                default: 200
            },
            clearImageProp: Function
        },
        data: function () {
            return {
                showOptions: false
            }
        },
        watch: {
            displayImage: function() {
                var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage)
                storageRef.getDownloadURL().then(function(url) {
                    var img = document.getElementById('outputImage')
                    img.src = url
                    setDraggable();
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

    function setDraggable() {
        $('#outputImage').draggable();
    }
</script>

//STYLES
<style lang="scss">
    .img-container {
        border: 1px dotted #ccc;
        overflow: hidden;
        margin: 5px 0;
    }

    button {
        position: absolute;
        z-index: 1;
    }

    img {
        width: 130%;
    }
</style>
