<template>
   <div class="col comment-card">

       !!!!!!!!It's a comment!!!!!!!!
   </div>

    
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>
 .comment-card{
    color: rgb(223, 243, 255);
    background-color: #283853;
    transition: all .2s ease;
 }
 .comment-card:hover{
    transform: scale(1.02);
 }
</style>