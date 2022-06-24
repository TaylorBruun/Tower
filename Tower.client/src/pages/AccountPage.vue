<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

<div class="row">

  <h5>Your Events:</h5>
  <TowerEvent v-for="e in myTickets" :key="e.id" :events="e.event"/>
</div>
    
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { eventsService } from '../services/EventsService';
import { ticketsService } from '../services/TicketsService';
import Pop from '../utils/Pop';
import TowerEvent from '../components/TowerEvent.vue';
export default {
    name: "Account",
    setup() {
        onMounted(async () => {
            try {
                await eventsService.getEvents();
                await ticketsService.getMyTickets();
                await eventsService.getEventsForMyTickets();
            }
            catch (error) {
                Pop.error(error);
            }
        });
        return {
            account: computed(() => AppState.account),
            myEvents: computed(() => AppState.eventsAttending),
            myTickets: computed(()=> AppState.myTickets)
        };
    },
    components: { TowerEvent }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
