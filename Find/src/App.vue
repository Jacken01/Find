<template>
  <div id="app">
    <keep-alive :exclude="A">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      A: ['Posted', 'CorDetail', 'JobDetail', 'CorInfo', 'CorUpdate', 'CorForm', 'Info', 'StuUpdate', 'Student', 'Cor', 'JobList']
    }
  }
}
</script>

<style>

</style>
