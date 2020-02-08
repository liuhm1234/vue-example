<template>
    <div class="about">
        about
        <hr/>
        <ul class="nav">
          <router-link to="/about" tag="li" exact>study</router-link>
          <router-link to="/about/work" tag="li">work</router-link>
          <router-link to="/about/hobby" tag="li">hobby</router-link>
          <router-link to="/" tag="li">home</router-link>
        </ul>
        <router-view/>
    </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style scoped>

</style>
