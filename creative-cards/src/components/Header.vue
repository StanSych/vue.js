//STRUCTURE
<template>
    <div>
        <h1 class="text-center">Creative Cards</h1>
        <ul class="nav justify-content-center">
            <li class="nav-item"><a @click="pageSelected='cardFront'" class="nav-link">Front</a></li>
            <li class="nav-item"><a @click="pageSelected='cardInsideLeft'" class="nav-link">Inside Left</a></li> 
            <li class="nav-item"><a @click="pageSelected='cardInsideRight'" class="nav-link">Inside Right</a></li>
            <li class="nav-item"><a @click="pageSelected='cardBack'" class="nav-link">Back</a></li>
        </ul>
    </div>
</template>

//JS
<script>
    export default {
        data: function() {
            return {
                pageSelected: ''
            }
        },
        watch: {
            pageSelected: function() {
                this.$emit('pageWasChanged', this.pageSelected)
            }
        }
    }
</script>

//STYLES
<style lang="scss">
    h1{
        margin-top: 1rem;
    }

    a{
        cursor: pointer;
    }
</style>
