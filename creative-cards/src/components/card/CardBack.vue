//STRUCTURE
<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr>
        </div>
        <div class="col-sm-6 card card-display">
            <cc-image-output :displayImage="imageName" :containerHeight="400" :clearImageProp="clearImage"></cc-image-output>
        </div>
    </div>
</template>

//JS
<script>
    import ImageUpload from './ImageUpload.vue'
    import ImageOutput from './ImageOutput.vue'

    export default {
        data: function() {
            return {
                imageName: ''
            }
        },
        methods: {
            clearImage: function () {
                if(this.imageName != '') {
                    this.imageName = 'home-slide.jpg'
                }
            }
        },
        components: {
            ccImageUpload: ImageUpload,
            ccImageOutput: ImageOutput
        }
    }
</script>

//STYLES
<style lang="scss">//add [scoped] to restict styles for this template only

</style>
