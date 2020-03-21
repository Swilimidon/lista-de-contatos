<template>
  <div class="container">
    <b-field label="Find a name">
      <b-autocomplete
          v-model="lista.nome"
          placeholder="ex. Ana"
          :keep-first="true"
          :open-on-focus="true"
          :data="filteredDataObj"
          field="nome"
          @select="option => selected = option">
          <template slot="footer">
            <a @click="goTO">
              <span> Add new... </span>
            </a>
          </template>
        </b-autocomplete>
      </b-field>

      <the-card v-show="selected"
        v-bind="selected">
      </the-card>
      <hr>
    <b-table :data="lista" :columns="columns"></b-table>
  </div>
</template>
<script>
import TheCard from '@/components/TheCard.vue'

export default {
  name: 'Home',
  components: {
    TheCard
  },
  data () {
    return {
      columns: [
        {
          field: 'nome',
          label: 'Nome'
        },
        {
          field: 'email',
          label: 'E-mail'
        },
        {
          field: 'ramal',
          label: 'Ramal',
          width: 40
        },
        {
          field: 'setor',
          label: 'Setor'
        }
      ],
      selected: '',
      name: ''
    }
  },
  computed: {
    lista () {
      if (window.localStorage.getItem('lista') != null) {
        return JSON.parse(window.localStorage.getItem('lista'))
      } else {
        return null
      }
    },
    filteredDataObj () {
      if (this.lista != null) {
        return this.lista.filter((option) => {
          return option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        })
      } else {
        return []
      }
    }
  },
  methods: {
    goTO () {
      this.$router.push('add-contact')
    }
  }
}
</script>
