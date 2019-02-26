//STRUCTURE
<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <h4>Edit Text:</h4>
                <textarea 
                        v-model="textBoxInput" @keyup="textChanged"
                        class="form-control" cols="50" rows="4" 
                        placeholder="Add text here...">
                </textarea>
            </div>
        </div>
    </div>
</template>

//JS
<script>
    export default{
        data: function(){
            return{
                textBoxInput: ""
            }
        },
        methods: {
            textChanged: function(){
                this.$emit('displayTextChanged', this.textBoxInput)
            }
        }
    }
</script>

//STYLES
<style lang="scss">
    
</style>
