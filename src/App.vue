<template>
  <div id="app">
    <b-navbar>
      <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <strong>Contatos</strong>
          </b-navbar-item>
      </template>
      <template slot="start">
          <router-link to="/" tag="b-navbar-item">Home</router-link>
          <router-link to="/add-contact" tag="b-navbar-item">Add</router-link>
      </template>
    </b-navbar>
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>
