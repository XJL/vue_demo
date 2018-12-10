<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "App",
        computed: {
          ...mapState({

          })
        },
        methods: {
            ...mapActions([
              "homeGet"
            ])
        }
    }
</script>

<style scoped>

</style>
