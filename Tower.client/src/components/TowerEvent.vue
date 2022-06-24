<template>
    <div @click="selectEvent" class="event-card selectable elevation-4 p-2 m-2 col-5">

        <img class="img-fluid" :src="events.coverImg" alt="">
        <button @click.stop="deleteTicket(events.id)" v-if="route.name == 'Account'" class="btn btn-danger">Delete
            Ticket</button>
        <h6 class="text-muted">{{ formatDate(events.startDate) }}</h6>
        <h3 :class="{ 'text-decoration-line-through': events.isCanceled }">{{ events.name }}</h3>
        <h5>{{ events.location }}</h5>
        <h6 :class="{ 'text-danger': (events.capacity <= 0) }">Tickets remaining: {{ events.capacity }}</h6>

    </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { ticketsService } from '../services/TicketsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
    props: { events: { type: Object, required: true } },

    setup(props) {
        const router = useRouter()
        const route = useRoute()

        return {
            route,
            

            formatDate(rawDate) {
                return new Date(rawDate).toLocaleDateString()
            },

            selectEvent() {
                logger.log("pushing with id", props.events.id)
                router.push({ name: "EventDetails", params: { id: props.events.id } })
            },

            async deleteTicket(eventId) {
                logger.log("calling delete on", eventId)
                await ticketsService.deleteTicket(eventId)
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.event-card {
    color: rgb(223, 243, 255);
    background-color: #283853;
    transition: all .2s ease;
}

.event-card:hover {
    transform: scale(1.02);
}
</style>