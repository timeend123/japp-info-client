<!--主要组件，控制各个组件之间进行交流,编写所有逻辑代码-->
<template>
  <div>
    <md-toolbar>
      <div class="md-title">japp-info测试</div>
    </md-toolbar>
    <!--显示列表组件-->
    <sql-config-list @add="updateSqlConfig" @edit="updateSqlConfig" @del="del" :objs="objs"></sql-config-list>
    <!--编辑窗口组件-->
    <sql-config-edit @save="save" ref="dialog"></sql-config-edit>
  </div>
</template>

<script>
  import sqlConfigList from './sqlConfigList.vue'
  import sqlConfigEdit from './sqlConfigEdit.vue'
  export default {
    /*dialog是新的窗口，index是数组的编号，objs是对象数组，obj一个对象*/
    data(){
      return {
//        apiUrl: 'http://localhost:8080/info/api/sqlConfigs',
        apiUrl:'',
        objs: []
      }
    },
    components: {
      sqlConfigList,
      sqlConfigEdit
    },
    methods: {
      /*增加和编辑的更新方法，传进来一个数组编号，如果传进来的值不为空则进行编辑更新，为空则进行编辑增加*/
      updateSqlConfig(obj){
        this.$refs.dialog.openDialog(obj)
      },
      /*删除操作*/
      del: function (index) {
        let self = this
        self.$http.delete(self.apiUrl + '/' + self.objs[index].id, self.objs[index].id).then(() => self.objs.splice(index, 1))
      },
      /*保存*/
      save: function (obj) {
        let self = this
        if (obj.id) {
          let old = this.objs.find(it => it.id === obj.id);
          let index = this.objs.indexOf(old);
          self.$http.put(self.apiUrl + '/' + obj.id, obj).then(() => self.$set(this.objs, index, obj))
        } else {
          self.$http.post(this.apiUrl, obj).then((response) => {
            obj.id = response.data.id
            self.objs.push(obj)
          })
        }
      }
    },
    /*页面加载时从后台获取数据的方法*/
    created: function () {
      let self = this
      self.apiUrl=domain.sqlConfigUrl
//      self.apiUrl=window.location.href+'/sqlConfigs'
      self.$http.get(self.apiUrl).then((response) => {
        self.objs = response.data;
        this.$set(self.objs, response)
      }, (response) => {
        alert('页面加载错误')
      })
    }
  }
</script>

<style>
</style>
