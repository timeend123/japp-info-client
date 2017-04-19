<!--主要组件，控制各个组件之间进行交流-->
<template>
    <div  v-md-theme="'default'">
      <md-toolbar>
        <div class="md-title">japp-info测试</div>
      </md-toolbar>
      <sql-config-list v-on:showmessage="showDialog"></sql-config-list>
      <sql-config-edit :visible="visible"></sql-config-edit>
    </div>
</template>

<script>
  import sqlConfigList from './sqlConfigList.vue'
  import sqlConfigEdit from './sqlConfigEdit.vue'
  import store from '../vuex/store'
export default {
  data(){
    return{
      visible:false
    }
  },
  components:{
    sqlConfigList,
    sqlConfigEdit
  },
  methods:{
   showDialog:function (visible) {
      this.visible=visible
   }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
