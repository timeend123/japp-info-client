<!--编辑窗口组件-->
<template>
  <div>
    <md-dialog ref="dialog1" :md-click-outside-to-close=false :md-esc-to-close=false>
      <md-dialog-title>编辑窗口</md-dialog-title>
      <md-dialog-content>
        <form>
          <md-input-container>
            <label>note</label>
            <md-input v-model="obj.note"></md-input>
          </md-input-container>
          <div class="field-group">
            <md-input-container>
              <label>dsType</label>
              <md-select v-model="obj.dsType">
                <md-option value="OA_0_144">OA_0_144</md-option>
                <md-option value="HR_0_130">HR_0_130</md-option>
              </md-select>
            </md-input-container>
          </div>
          <md-input-container class="sqlTpl">
            <label>sqlTpl</label>
            <md-textarea v-model="obj.sqlTpl" rows="3" required></md-textarea>
          </md-input-container>

          <md-layout md-row>
            <label style="margin-top: 12px">fieldMap</label>
            <md-button class="md-icon-button md-primary " @click.native="addks" style="margin-top: 0px">
              <md-icon>add</md-icon>
            </md-button>
          </md-layout>
          <md-layout md-row v-for="(it,index) in kvs" :key="index">
            <md-button class="md-icon-button md-primary " @click.native="delks(index)" style="margin-top: 18px">
              <md-icon>delete</md-icon>
            </md-button>
            <md-input-container style="width: 37%">
              <md-input v-model="it.key" required></md-input>
            </md-input-container>
            <span style="width: 5%;margin-top: 25px;text-align: center;">:</span>
            <md-input-container style="width: 37%">
              <md-input v-model="it.value" required></md-input>
            </md-input-container>
          </md-layout>

          <div class="field-group">
            <md-checkbox v-model="obj.multipe">multipe</md-checkbox>
          </div>
          <md-input-container v-if="obj.multipe">
            <label>multipeField</label>
            <md-input v-model="obj.multipeField" required></md-input>
          </md-input-container>
        </form>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click.native="save(obj)">保存</md-button>
        <md-button class="md-primary" @click.native="closeDialog">取消</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        obj: {},
        kvs: []
      }
    },
    methods: {
      /*保存*/
      save: function (obj) {
        let self = this
        let map = {}
        //将key数组和value数组重新转化为对象
        self.kvs.forEach((ele) => {
          map[ele.key] = ele.value;
        })
        obj.fieldMap = map
        if (self.judge(obj)) {
          self.$emit('save', obj)
          self.$refs['dialog1'].close()
          document.documentElement.style.cssText = 'overflow:visible';
        }
      },
      /*打开当前窗口*/
      openDialog(obj){
        let self = this
        self.obj=Object.assign({},obj||{multipe:true,dsType: 'OA_0_144'})
        let kvs = []
        // 将对象的属性和属性值以键值对的方式存入数组中
        if (self.obj.fieldMap) {
          for (let p in self.obj.fieldMap) {
            let kv = {key: p, value: self.obj.fieldMap[p]}
            kvs.push(kv)
            self.kvs = kvs
          }
        } else {
          //初始化对象的属性
          let kv = {key: '', value: ''}
          kvs.push(kv)
          self.kvs = kvs
        }
        self.$refs['dialog1'].open()
        document.documentElement.style.cssText = 'overflow:hidden'
      },
      /*取消*/
      closeDialog() {
        let self = this
        self.$refs['dialog1'].close()
        document.documentElement.style.cssText = 'overflow:visible';
      },
      /*增加一个fieldMap*/
      addks: function () {
        let self = this
        let kv = {key: '', value: ''}
        let kvs = self.kvs.concat()
        kvs.splice(0, 0, kv)
        self.kvs = kvs
      },
      /*删除一个fieldmap*/
      delks: function (index) {
        let self = this
        let kv = {key: '', value: ''}
        if (self.kvs.length == 1) {//fieldmap至少要有一对
          self.kvs.splice(0, 1, kv)
        } else {
          self.kvs.splice(index, 1)
        }
      },
      /*保存时对输入框的一系列判断*/
      judge: function (obj) {
        let sql = obj.sqlTpl || ''
        let map = obj.fieldMap
        if (sql === '') {//判断sqlTpl不能为空
          alert('sqlTpl不能为空')
          return false
        }
        for (let p in obj.fieldMap) {
          let kv = {key: p, value: obj.fieldMap[p]}
          if (p === '') {
            alert('键值对不能为空')
            return false
          }
          if (obj.fieldMap[p] === '') {
            alert('键值对不能为空')
            return false
          }
        }
        if (obj.multipe) {
          if (!obj.multipeField) {
            alert('multipeField不能为空')
            return false
          }
        }
        return true
      }
    }
  }
</script>

<style>
  .sqlTpl textarea.md-input {
    overflow-y: hidden !important;
  }
</style>
