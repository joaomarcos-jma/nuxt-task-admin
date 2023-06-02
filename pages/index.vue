<template>
  <div>
    <b-container class="container">
      <b-card title="House Rules" tag="article">
        <b-card-img src="@/static/images/house.jpg"></b-card-img>
        <b-card-text> CRUD - House Rules </b-card-text>
        <b-button to="/house" variant="primary">Show Rules</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.container {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
