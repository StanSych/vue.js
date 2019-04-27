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
    import SectionCompleted from './SectionCompleted.vue'
    import { clearImageMixin } from '../../clearImageMixin.js'

    export default {
        mixins: [clearImageMixin],
        data: function() {
            return {
                imageName: ''
            }
        },
        components: {
            ccImageUpload: ImageUpload,
            ccImageOutput: ImageOutput,
            ccSectionCompleted: SectionCompleted
        }
    }
</script>

//STYLES
<style lang="scss">//add [scoped] to restict styles for this template only

</style>
