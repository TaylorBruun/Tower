<template>

    <div class="row">

        <img  class="event-img img-fluid" :src="events.coverImg" alt=""> <button @click="createTicket(events.id)" v-if="(events.capacity > 0) && (!events.isCanceled) && (!alreadyAttending(events.id))" class="btn btn-success m-1">Attend</button>
        <h5><img class="img-fluid" :src="events.creator.picture" alt="">{{ events.creator.name }}</h5>
        <h6 class="text-muted">{{ formatDate(events.startDate) }}</h6>
        <h3 :class="{'text-decoration-line-through': events.isCanceled}" >{{ events.name }} <i @click="cancelEvent" v-if="account.id == events.creatorId" title="Cancel event" class="cancel-btn mdi mdi-close-circle"></i> </h3>
        <h5>{{ events.location }}</h5>
        <h6 :class="{ 'text-danger': (events.capacity <= 0) }"> {{ !events.isCanceled ? `It's on!` : `It's canceled :(` }}
            Tickets remaining: {{ events.capacity }}</h6>
        <h6>{{ events.description }}</h6>

        <!-- TODO get some pictures of ticket holders here -->
        <h6>Attending: <TicketHolder v-for="t in tickets" :key="t.id" :ticket="t">7</TicketHolder> </h6>

        <h6>Comments: <Comment v-for="c in comments" :key="c.id" :comment="c" /> </h6>

<form @submit.prevent="createComment" action="">

    <input v-model="editable" type="text" placeholder="Comment on this event"> <button class="btn btn-primary m-1">Comment</button>
</form>

    </div>

</template>


<script>
import { computed, onMounted, popScopeId, ref } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { eventsService } from '../services/EventsService'
import { commentsService } from '../services/CommentsService'
import { ticketsService } from '../services/TicketsService'
import Pop from '../utils/Pop'
import TicketHolder from '../components/TicketHolder.vue'
import Comment from '../components/Comment.vue'


export default {
    //    TODO make it so the page doesnt break if we START on an events details page (refresh instead of navigating here from home)
    setup() {
        let editable = ref('')
        const route = useRoute();
        onMounted(async () => {
            try {
                await eventsService.getEvents();
                await ticketsService.getEventTickets(route.params.id);
                await commentsService.getEventComments(route.params.id)
            }
            catch (error) {
                Pop.error(error);
            }
        });
        return {
            editable,
            formatDate(rawDate) {
                return new Date(rawDate).toLocaleDateString();
            },
            alreadyAttending(eventId){
                let ticketCheck = AppState.currTickets.find(t=> ((t.eventId == eventId) && (t.accountId == AppState.account.id)))
                return ticketCheck
            },
           async createComment(){
            let commentData = {}
             commentData.body = editable.value
             commentData.eventId = route.params.id
                try {
                    await commentsService.createComment(commentData)
                    editable.value = ''
                } catch (error) {
                    Pop.error(error)
                }
            },
            async cancelEvent(){
                try {
                    await eventsService.cancelEvent(route.params.id)
                } catch (error) {
                    Pop.error(error)
                }
            },

            async createTicket(eventId){
                let ticketData ={}
                ticketData.eventId = eventId
                ticketData.accountId = AppState.account.id
                try {
                    await ticketsService.createTicket(ticketData)
                } catch (error) {
                    Pop.error(error)
                }
            },
            
            
            account: computed(()=> AppState.account),
            comments: computed(()=> AppState.comments),
            events: computed(() => AppState.events.find(e => e.id == route.params.id)),
            tickets: computed(() => AppState.currTickets),
        };
    },
    components: { TicketHolder, Comment }
}
</script>


<style lang="scss" scoped>
.cancel-btn{
    color:red;
    cursor: pointer
    
}
.cancel-btn:hover{
    color: rgb(185, 25, 25);

}

.event-img{
    max-width: 500px;
}


</style>