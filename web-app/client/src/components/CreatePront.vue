<template>
  <div class="posts">
    <h1>Adicionar Prontuario</h1>    
    <!--span><b>{{ response }}</b></span><br /-->
    <form v-on:submit="addPront">
      <input type="text" v-model="newPront.id" placeholder="Enter id">
      <br />
      <input type="text" v-model="newPront.cpf" placeholder="Enter cpf">
      <br />
      <input type="text" v-model="newPront.name" placeholder="Enter name">
      <br />
      <input type="text" v-model="newPront.data" placeholder="Enter data">
      <br />
      <input type="text" v-model="newPront.idade" placeholder="Enter idade">
      <br />
      <input type="text" v-model="newPront.informacao" placeholder="Enter informacao">
      <br />

      <input type="submit" value="Submit">
      
    </form>

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
        newPront: {},
        response: null
    }
  },
  methods: {    
    async addPront() {
        const apiResponse = await PostsService.createPront(this.newPront.id, this.newPront.cpf, this.newPront.name, this.newPront.data, this.newPront.idade, this.newPront.informacao)
        this.response = apiResponse.data
        
        console.log('add prontuario');
        console.log(this.newPront);
      }
  }
}
</script>
