<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ nome }} - <strong>{{ ramal }}</strong></p>
          <p class="subtitle is-6">{{ setor }} </p>
        </div>
      </div>
      <div class="content">
        <p>{{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCard',
  props: {
    nome: String,
    email: String,
    setor: String,
    ramal: [Number, String]
  }
}
</script>
