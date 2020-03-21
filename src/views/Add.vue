<template>
  <section class="section">
    <div class="container">
      <b-field label="Nome">
        <b-input name="nome" placeholder="Nome" expanded v-model="nome"></b-input>
      </b-field>

      <b-field label="E-mail">
        <b-input name="email" type="email" placeholder="asd@cutrale.com" expanded v-model="email"></b-input>
      </b-field>

      <b-field label="Setor">
        <b-input v-model="setor" placeholder="Informática"></b-input>
      </b-field>

      <b-field label="Ramal">
        <b-input placeholder="9999" v-model="ramal" type="number" min="111" max="9999"></b-input>
      </b-field>

      <b-field grouped><!-- Label left empty for spacing -->
        <p class="control">
          <button class="button is-success" @click="salvar">
            Salvar e adicionar mais um
          </button>
        </p>
        <p class="control">
          <button class="button is-info" @click="salvarevoltar">
            Salvar
          </button>
        </p>
        <p class="control">
          <button class="button is-light" @click="back">
            Cancelar
          </button>
        </p>
      </b-field>
    </div>
  </section>
</template>

<script>
import Pessoa from '@/schema/Pessoa'

export default {
  name: 'AddContact',
  data () {
    return {
      nome: '',
      ramal: '',
      email: '',
      setor: '',
      lista: []
    }
  },
  methods: {
    salvar () {
      const p = new Pessoa()

      p.nome = this.nome
      p.email = this.email
      p.ramal = this.ramal
      p.setor = this.setor

      if (p.nome == null || p.ramal == null) {
        this.danger()
      } else {
        this.lista.push(p)
        window.localStorage.setItem('lista', JSON.stringify(this.lista))
      }
      // limpa os campos
      this.limpar()
    },
    salvarevoltar () {
      this.salvar()
      this.$router.push('/')
    },
    back () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    limpar () {
      this.nome = ''
      this.email = ''
      this.ramal = ''
      this.setor = ''
    },
    danger () {
      this.$buefy.toast.open({
        duration: 5000,
        message: 'Nome e ramal não podem ser vazios',
        position: 'is-bottom',
        type: 'is-danger'
      })
    }
  },
  beforeMount () {
    // se o localStorage estiver null
    if (window.localStorage.getItem('lista') == null) {
      // preenche com um objeto vazio
      window.localStorage.setItem('lista', JSON.stringify(this.lista))
      console.log('Lista vazia!')
    } else {
      // senão ele carrega o objeto que tiver
      this.lista = JSON.parse(window.localStorage.getItem('lista'))
    }
  }
}
</script>
