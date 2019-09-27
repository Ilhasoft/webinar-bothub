<template>
  <div 
    v-if="this.filterJobs.length > 0"
    class="list-card-container">
    <card-item 
      v-for="job in filterJobs"
      :key="job"
      :profession="job" />
  </div>
  <div 
    class="avoid-list-card"
    v-else>
    <span>There is not job like that ):</span>
  </div>
</template>

<script>
import CardItem from './CardItem'
import request from '@/services/request';

export default {
  name: 'CardList',
  props: {
    professional: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      jobs: ['advocate','carpenter', 'cooker', 'farmer', 'fireman', 'nurse', 'scientist', 'veterinary'],
      filterJobs: ['advocate','carpenter', 'cooker', 'farmer', 'fireman', 'nurse', 'scientist', 'veterinary'],
    };
  },
  watch: {
    professional(currentValue) {
      if( true ){

        const data = {
          language: 'pt_br',
          text: 'anime de luta'
        }

        request.$http.post('/parse/', data);
      } else {
        this.filterJobs = this.jobs.filter(e => e === currentValue);
        if (!currentValue) {
          this.filterJobs = this.jobs;
        }
      }
     
    }
  },
  components: {
    CardItem
  }
}
</script>

<style>
.list-card-container {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
}

.avoid-list-card {
  font-size: 32px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  margin-top: 300px;
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
</style>