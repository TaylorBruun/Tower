<template>
    <div class="row flex-column">

        <form @submit.prevent="createEvent" id="event-form">
            <div class="col">
                <label class="text-dark m-2">Event Name: </label>
                <input v-model="editable.name" type="text"  name="name" id="name" aria-describedby="helpId" required />
            </div>
            <div class="col">
                <label class="text-dark m-2">Location: </label>
                <input v-model="editable.location" type="text"  name="location" id="location" aria-describedby="helpId" required />
            </div>
            <div class="col">

                <!-- TODO make this a dropdown or something with only the acceptable enum types -->
                <label class="text-dark m-2">Type: </label>
                <input v-model="editable.type" type="text"  name="type" id="type" aria-describedby="helpId" required />
            </div>
            <div class="col">

                <label class="text-dark m-2">Capacity: </label>
                <input v-model="editable.capacity" type="number"  name="capacity" id="capacity" aria-describedby="helpId" required />
            </div>
            <div class="col">
                <label class="text-dark m-2">Start Date: </label>
                <input v-model="editable.startDate" type="date"  name="startDate" id="startDate" aria-describedby="helpId" required />
            </div>
            <div class="col">
                <label class="text-dark m-2">Cover Image: </label>
                <input v-model="editable.coverImg" type="text"  name="coverImg" id="coverImg" aria-describedby="helpId" required />
            </div>
            <div class="col">

                <label class="text-dark m-2">Description: </label>
                <textarea v-model="editable.description" name="description" id="description"  required></textarea>
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
import { Modal } from "bootstrap"
import { useRouter } from "vue-router"
import { logger } from "../utils/Logger"

export default {
    props: { event: { type: Object, required: false } },
    setup() {
        let editable = ref({})
        const router = useRouter()
        return {
            editable,
            async createEvent() {
                try {
                    let eventData = editable.value
                    let newEvent = await eventsService.createEvent(eventData)
                    logger.log('here is the new event', newEvent)
                    Pop.toast('Event listed', 'success')
                    Modal.getOrCreateInstance(document.getElementById('create-event')).hide()
                    
                    router.push({name: "EventDetails", params: {id: newEvent.id}})
                    editable.value = {}
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