<template>
  <div class="bg-dark container-fluid">

<div class="row ">
  <div class="col d-flex justify-content-around">

    <button @click="filterEvents = ''" class=" m-1 btn btn-secondary">All</button>
    <button @click="filterEvents = 'concert'" class=" m-1 btn btn-secondary">Concert</button>
    <button @click="filterEvents = 'convention'" class=" m-1 btn btn-secondary">Convention</button>
    <button @click="filterEvents = 'sport'" class=" m-1 btn btn-secondary">Sport</button>
    <button @click="filterEvents = 'digital'" class=" m-1 btn btn-secondary">Digital</button>

  </div>
</div>
    <div class="row d-flex justify-content-between">

      <TowerEvent v-for="e in events" :key="e.id" :events="e" />

    </div>
  </div>
    
  
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import Pop from '../utils/Pop'
import {eventsService} from '../services/EventsService'
import TowerEvent from '../components/TowerEvent.vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import EventForm from '../components/EventForm.vue'



export default {
  name: "Home",
  setup() {
    const filterEvents = ref('')
    onMounted(async () => {
      try {
        await eventsService.getEvents();
      }
      catch (error) {
        Pop.error(error);
      }
    });
    return {
      filterEvents,
     
      
      // TODO is it possible to put a transition on this filter? it is very abrupt
      events: computed(() => AppState.events.filter(e =>  filterEvents.value ? e.type == filterEvents.value : true)),
    };
  },
  components: { TowerEvent, EventForm }
}
</script>

<style scoped lang="scss">

</style>
