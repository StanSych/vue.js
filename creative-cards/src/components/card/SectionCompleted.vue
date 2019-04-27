//STRUCTURE
<template>
    <div class="row">
        <div class="form-check form-check-inline">
            <div class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="checked" @click="sectionCompleted">
                Mark Section as Completed
            </div>
        </div>
    </div>
</template>

//JS
<script>
  import { EventBus } from '../../main.js'

  export default {
      data: function() {
          return {
              checked: ''
          }
      },
      methods: {
          sectionCompleted: function() {
              EventBus.$emit('mark-as-completed', this.checked)
          }
      }
  }
</script>

//STYLES
<style lang="scss">//add [scoped] to restict styles for this template only
   
</style>
