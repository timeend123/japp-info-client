<!--sql配置的显示列表组件-->
<template>
  <div>
    <md-table id="table">
      <md-table-header>
        <md-table-row>
          <md-table-head>id</md-table-head>
          <md-table-head>note</md-table-head>
          <md-table-head>dsType</md-table-head>
          <md-table-head>sqlTpl</md-table-head>
          <md-table-head>filedMap</md-table-head>
          <md-table-head>multipe</md-table-head>
          <md-table-head>multipeField</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="(obj,index) in objs" :key="index">
          <md-table-cell>{{obj.id}}</md-table-cell>
          <md-table-cell>{{obj.note}}</md-table-cell>
          <md-table-cell>{{obj.dsType}}</md-table-cell>
          <md-table-cell class="sqlTpl">{{obj.sqlTpl}}</md-table-cell>
          <md-table-cell class="fieldMap">{{obj.fieldMap}}</md-table-cell>
          <md-table-cell>{{obj.multipe}}</md-table-cell>
          <md-table-cell>{{obj.multipeField}}</md-table-cell>
          <md-button class="md-icon-button" @click.native="edit(obj)">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button" @click.native="del(index)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-row>
        <md-button class="md-fab md-fab-top-right" @click.native="add">
          <md-icon>add</md-icon>
        </md-button>
      </md-table-body>
    </md-table>
  </div>
</template>


<script>
  export default {
    methods: {//提供一个方法将值传递给主控制组件
      add: function () {//添加的方法
        this.$emit('add')
      },
      edit: function (obj) {//编辑更新的方法
        this.$emit('edit', obj)
      },
      del: function (index) {//删除的方法
        this.$emit('del', index)
      }
    },
    props: ['objs']
  }
</script>

<style>
  .sqlTpl div.md-table-cell-container {
    width: 10px;
    height: 48px;
    overflow: hidden;
  }

  .fieldMap div.md-table-cell-container {
    width: 10px;
    height: 48px;
    overflow: hidden;
  }
</style>
