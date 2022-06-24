<template>

    <div class="row">

        <img class="img-fluid" :src="events.coverImg" alt="">
        <h5><img class="img-fluid" :src="events.creator.picture" alt="">{{ events.creator.name }}</h5>
        <h6 class="text-muted">{{ formatDate(events.startDate) }}</h6>
        <h3>{{ events.name }}</h3>
        <h5>{{ events.location }}</h5>
        <h6 :class="{ 'text-danger': (events.capacity <= 0) }"> {{ !events.isCanceled ? `It's on!` : `It's canceled :(` }}
            Tickets remaining: {{ events.capacity }}</h6>
        <h6>{{ events.description }}</h6>

    </div>

</template>


<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { eventsService } from '../services/EventsService'
import Pop from '../utils/Pop'


export default {
//    TODO make it so the page doesnt break if we START on an events details page (refresh instead of navigating here from home)
    setup() {
        const route = useRoute()
        onMounted(async () => {
            try {
                await eventsService.getEvents();
            }
            catch (error) {
                Pop.error(error);
            }
        });
        return {
            formatDate(rawDate){
                return new Date(rawDate).toLocaleDateString()
            },

            events: computed(() => AppState.events.find(e => e.id == route.params.id))
        }
    }
}
</script>


<style lang="scss" scoped>
</style>