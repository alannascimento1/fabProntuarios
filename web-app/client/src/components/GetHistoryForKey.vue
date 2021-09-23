<template>
  <div class="posts">
    <h1>Buscar Histórico por ID</h1>
    <!--span><b>{{ response }}</b></span><br /-->
    <select v-model="selected">
      <option v-bind:key="prontEntry.Key" v-for="prontEntry in prontKeys" >{{ prontEntry.Key }}</option>
    </select>    
    <br />
    <!-- <input type="text" v-model="chaveAuxiliar" placeholder="Entre com a chave"> -->
    <br /><br />
    <button v-on:click="getHistoryKey()">Buscar Histórico</button>
    <br />
    <span v-if="response"><b>{{ response }}</b></span><br />
  </div>
</template>

<script>
import PostsService from '@/services/apiService'
export default {
  name: 'response',
  data () {
    return {
        changeOwner: {},
        prontKeys: [],
        selectedOption: null,
        response: null,
        chaveAuxiliar: null,
        selected: null
    }
  },
  mounted () {
    this.load(),
    this.selectedOption = this.value
  },
  methods: {
    async load () {
      const apiResponse = await PostsService.getAll()
      this.prontKeys = apiResponse.data
    },
    async getHistoryKey() {
        const apiResponse = await PostsService.getHistoryKey(this.selected)
        this.response = apiResponse.data
        console.log(this.response)
      }
  }
}
</script>
