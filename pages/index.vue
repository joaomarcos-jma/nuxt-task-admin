<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data: () => ({
    rulesData: [],
  }),
  computed: mapState('house', ['entities', 'loading']),
  watch: {
    entities(val) {
    },
  },
  beforeMount() {
    this.$store.dispatch('house/getHouseRulesList')
  },
}
</script>
