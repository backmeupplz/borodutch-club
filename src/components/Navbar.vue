<template lang="pug">
nav
  v-app-bar(flat, app)
    // Title
    v-toolbar-title.text-uppercase.grey--text
      span {{ $t("title") }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Navbar extends Vue {}
</script>
