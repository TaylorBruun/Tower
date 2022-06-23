<template>
<div class="row flex-column">

    <form @submit.prevent="createEvent" id="event-form">
<div class="col">
<label class="text-dark m-2">Event Name: </label>
    <input
      
      type="text"
      aria-describedby="helpId"
      required
    />
</div>
<div class="col">

    <!-- TODO make this a dropdown or something with only the acceptable enum types -->
    <label class="text-dark m-2">Type: </label>
    <input
      
      type="text"
      aria-describedby="helpId"
      required
    />
</div>
<div class="col">

<label class="text-dark m-2">Capacity: </label>
    <input
      
      type="text"
      aria-describedby="helpId"
      required
    />
</div>
<div class="col">
<label class="text-dark m-2">Start Date: </label>
    <input
      
      type="date"
      aria-describedby="helpId"
      required
    />
</div>
<div class="col">
    <label class="text-dark m-2">Cover Image: </label>
    <input
      
      type="text"
      aria-describedby="helpId"
      required
    />
</div>
<div class="col">

    <label class="text-dark m-2">Description: </label>
    <textarea  required ></textarea>
</div>



    <button v-if="!event" class="btn btn-success" type="button " @click="">
      Create!
    </button>
    <button class="btn btn-warning" type="button " data-bs-dismiss="modal">Cancel!</button>
    
  </form>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { eventsService } from "../services/EventsService"
import Pop from "../utils/Pop"

import { onMounted, watchEffect } from '@vue/runtime-core'

export default {
    props: { event: {type: Object, required: false}},
    setup(){
        
    
        return {
                async createEvent(){
                    try {
                        await eventsService.createEvent()
                        Pop.toast('Event listed', 'success')
                        Modal.getOrCreateInstance(document.getElementById('create-event')).hide()
                    } catch (error) {
                        Pop.error(error)
                    }
                }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>