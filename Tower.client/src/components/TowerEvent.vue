<template>
    <div  class="event-card selectable elevation-4 p-2 m-2 col-5">
       
        <img class="img-fluid" :src="events.coverImg" alt="">
<h6 class="text-muted">{{formatDate(events.startDate)}}</h6>
<h3>{{events.name}}</h3>
<h5>{{events.location}}</h5>
<h6 :class="{'text-danger': (events.capacity <= 0)}">Tickets remaining: {{events.capacity}}</h6>

    </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'

export default {
    props: { events: { type: Object, required: true}},
    
    setup(){
        
        return {
            
            formatDate(rawDate){
                return new Date(rawDate).toLocaleDateString()
            }
        }
    }
}
</script>


<style lang="scss" scoped>
 .event-card{
    color: rgb(223, 243, 255);
    background-color: #283853;
    transition: all .2s ease;

    
 }

 .event-card:hover{
    transform: scale(1.02);
    
 }
</style>