//STRUCTURE
import { functions } from 'firebase';
<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Upload Image:</h4>
            <div class="form-group">
                <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
            </div>
            <progress value="0" max="100" id="progressBar"></progress>
            <br>
            <img id="image" src="" alt="">
            <button class="btn button" type="button" id="setImageButton">Set Image</button>
        </div>
    </div>
</template>

//JS
<script>
import Firebase from 'firebase'
    export default {
        data: function() {
            return {
                file: ''
            }
        },
        methods: {
           uploadFile: function(event) {
                this.file = event.target.files[0]
                var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
                var upload = storageRef.put(this.file)

                // create thumbnail
                var reader = new FileReader()
                reader.readAsDataURL(this.file)

                reader.onload = function(e) {
                    document.getElementById('image').src = e.target.result
                }

                // progress bar
                upload.on('state_changed', function(snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    document.getElementById('progressBar').value = progress;
                })

                this.$emit('displayImageChanged', this.file.name)
            }
        }
    }
</script>

//STYLES
<style lang="scss" scoped>
   img {
       max-width: 200px;
   }
</style>
