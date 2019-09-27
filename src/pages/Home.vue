<template>
  <div class="s003">
    <form @submit.prevent="searchProfessional()">
      <input-search @value="searchProfessional($event)"/>
    </form>
    <card-list :professional="filterData"></card-list>
  </div>
</template>

<script>
import CardList from '@/components/CardList'
import InputSearch from '@/components/InputSearch'

export default {
  name: 'Home',
  components: {
    CardList,
    InputSearch
  },
  data: function() {
    return {
      filterData: ''
    };
  },
  methods: {
    searchProfessional(value) {    
      this.filterData = value;
    }
  }
}
</script>

<style>
.s003 {
  min-height: 100vh;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-flex-pack: center;
      justify-content: flex-start;
  -ms-flex-align: center;
      align-items: center;
  font-family: 'Poppins', sans-serif;
  background-color: #a598ee;
  background-size: cover;
  background-position: center center;
  padding: 15px;
}

.s003 form {
  width: 100%;
  max-width: 790px;
  margin-bottom: 0;
}

.s003 form .inner-form {
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-align: center;
      align-items: center;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.list-card-container {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
}

@media screen and (max-width: 880px) {
  .list-card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .list-card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

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