<template>
  <div class="posts">
    <h1>Busca Todas Transações</h1>    
    <div v-bind:key="prontEntry.Key" v-for="prontEntry in response" >
      <p> {{ prontEntry.Key }} | {{ prontEntry.Record }}  </p>
    </div>
    
  </div>
</template>

<script>
import PostsService from '@/services/apiService'
export default {
  name: 'response',
  data () {
    return {
      response: {}
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    async load () {
      const apiResponse = await PostsService.getAll()
      this.response = apiResponse.data
    }
  }
}
</script>