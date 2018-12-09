<template>
    <div id="app">
      <Header></Header>
      <input type="button" value="查询" @click="productGet"></input>
      <h2>{{productName}}</h2>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    export default {
        name: "App",
        computed: {
          ...mapState({
            productName: state=>{
              return state.product.name
            }
          })
        },
        methods: {
            ...mapActions(["productGet"])
        }
    }
</script>

<style scoped>

</style>
