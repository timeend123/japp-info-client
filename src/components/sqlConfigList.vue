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
          <md-table-head>filedMapString</md-table-head>
          <md-table-head>multipe</md-table-head>
          <md-table-head>multipeField</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row>
          <md-table-cell :idinit="id">{{id}}</md-table-cell>
          <md-table-cell>{{note}}</md-table-cell>
          <md-table-cell>{{dsType}}</md-table-cell>
          <md-table-cell>{{sqlTpl}}</md-table-cell>
          <md-table-cell>{{fieldMapString}}</md-table-cell>
          <md-table-cell>{{multipe}}</md-table-cell>
          <md-table-cell>{{multipeField}}</md-table-cell>
            <md-button class="md-icon-button"  @click.native="showDialog" :visible="true" >
              <md-icon >edit</md-icon>
            </md-button>
        </md-table-row>
        <md-button class="md-fab md-fab-top-right">
          <md-icon>add</md-icon>
        </md-button>
      </md-table-body>
    </md-table>
  </div>
</template>


<script>
  export default {
    data () {//初始化数据
      return {
        id: 111,
        note: 222,
        dsType: 333,
        sqlTpl: 444,
        fieldMapString: 555,
        multipe: 666,
        multipeField: 777,
        visible:''
      }
    },
    methods:{//提供一个方法将值传递给主控制组件
      showDialog:function () {
        this.$emit('showmessage',this.visible)
      }
    }

  }
</script>

<style>

</style>
