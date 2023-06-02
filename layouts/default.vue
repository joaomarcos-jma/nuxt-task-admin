<template>
  <div>
    <the-header />
    <b-container fluid>
      <b-overlay :show="isLoading">
        <nuxt />
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '@/components/shared/TheHeader.vue'
export default {
  components: { TheHeader },
  computed: {
    ...mapState('config', ['isLoading']),
  },
}
</script>
