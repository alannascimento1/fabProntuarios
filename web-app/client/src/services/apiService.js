import Api from '@/services/api'

export default {
  getHistoryKey(key) {
    return Api().post('getHistoryKey', {       
      key: key
    })
  },
  getForKey(key) {
    return Api().post('getForKey', {       
      key: key
    })
  },
  getAll() {
    return Api().get('getAll')
  },
  createPront(id, cpf, name, data, idade, informacao) {
    return Api().post('createPront', {       
      id: id,
      cpf: cpf,
      name: name,
      data: data,
      idade: idade,
      informacao: informacao
    })
  }
}