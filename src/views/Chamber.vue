<template lang="pug">
.v-container.pa-4
  // Main content
  v-layout.text-center(column, justify-center, align-center)
    v-flex(xs12, md10)
      .headline.pb-4 Секретная комната

    v-flex.pt-4
      .caption
        router-link(to='/privacy') Политика конфиденциальности
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Chamber extends Vue {}
</script>
