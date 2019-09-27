<template>
  <div class="card">
    <img :src="imgUrl" alt="Avatar" style="width:100%">
    <div class="container">
      <h4><b>{{profession}}</b></h4> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  computed: {
    imgUrl() {
      return require(`@/assets/${this.profession}.png`)
    }
  },
  props: {
    profession: {
      type: String,
      default: 'nurse'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  transition: 0.3s;
  width: 260px;
}

.card img {
  height: 340px;
}

.card:hover {
  transform: scale(1.02);
}

.container {
  background-color: white;
  padding: 2px 16px;
  text-align: center;
  border-radius: 20px;
}
</style>
