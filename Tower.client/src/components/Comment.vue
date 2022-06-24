<template>
   <div class="col comment-card">
    <h6>
        <img class="comment-img" :src="comment.creator.picture" alt="">
        {{comment.creator.name}}
    </h6>
    <h6>
       <i @click="removeComment(comment.id)" v-if="account.id == comment.creatorId" title="Remove comment" class="cancel-btn mdi mdi-close-circle"></i> {{comment.body}} 
    </h6>



   </div>

    
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { commentsService } from '../services/CommentsService'


export default {
     props: { comment: { type: Object, required: false } },
    setup(){
        return {
            async removeComment(id){
                await commentsService.removeComment(id)
            },
            account: computed(()=> AppState.account),
        }
    }
}
</script>


<style lang="scss" scoped>
 .comment-card{
    color: rgb(223, 243, 255);
    background-color: #283853;
    transition: all .2s ease;
 }
 .comment-img{
    max-height: 20px;
 }
 .comment-card:hover{
    background-color: #222f44;
 }

 .cancel-btn{
    color:red;
    cursor: pointer
    
}
.cancel-btn:hover{
    color: rgb(185, 25, 25);

}


</style>