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
    <b-field grouped position="is-right">
      <div class="buttons">
        <b-tooltip label="Tooltip right"
            position="is-top"
            :active="active">
          <b-button type="is-info" size="is-small" class="clipboard" :data-clipboard-text="this.export" @click="success">Export</b-button>
        </b-tooltip>

        <b-button type="is-info" size="is-small" @click="isCardModalActive = true">Import</b-button>
      </div>
      </b-field>
    <b-table :data="lista" :columns="columns"></b-table>

    <b-modal :active.sync="isCardModalActive" :widht="480" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <b-input type="textarea" id="import"></b-input>
            <b-button @click="save" type="is-info">Importar</b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import TheCard from '@/components/TheCard.vue'
import ClipboardJS from 'clipboard/dist/clipboard'

/* eslint-disable no-new */
new ClipboardJS('.clipboard')

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
      name: '',
      isCardModalActive: false,
      active: false
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
    },
    export () {
      return JSON.stringify(this.lista)
    }
  },
  methods: {
    goTO () {
      this.$router.push('add-contact')
    },
    success () {
      this.$buefy.toast.open({
        message: 'Copiado para área de transferência!'
      })
    }
    /* importar () {
      console.log(document.getElementById('#import').getValue())

      window.localStorage.setItem('lista', JSON.stringify(this.lista))
    } */
  }
}
</script>
