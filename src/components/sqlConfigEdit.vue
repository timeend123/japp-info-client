<!--编辑窗口组件-->
<template>
  <Modal
    v-model="visible"
    title="修改"
    @on-ok="ok"
    @on-cancel="cancel">
    <div >
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>note</label>
          <md-input v-model="note"></md-input>
        </md-input-container>
        <md-input-container>
          <label>dsType</label>
          <md-input v-model="dsType"></md-input>
        </md-input-container>
        <md-input-container>
          <label>sqlTpl</label>
          <md-input v-model="sqlTpl"></md-input>
        </md-input-container>
        <md-input-container>
          <label>filedMapString</label>
          <md-input v-model="filedMapString"></md-input>
        </md-input-container>
        <md-input-container>
          <label>multipe</label>
          <md-input v-model="multipe"></md-input>
        </md-input-container>
        <md-input-container>
          <label>multipeField</label>
          <md-input v-model="multipeField"></md-input>
        </md-input-container>
      </form>
    </div>
  </Modal>
</template>

<script>
  export default {
    methods: {
      ok () {
        this.visible=false
      },
      cancel () {
        this.visible=false
      }
    },
    data () {
      return {
        visible:false,
        modal1: false
      }
    },
    props:['visible'],
  }
</script>

<style>

</style>
