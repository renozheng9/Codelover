<template>
    <div class="findMusicComponent">
        <router-view></router-view>
        <!-- <recommend></recommend>
        <rank></rank>
        <list></list>
        <radio></radio>
        <singer></singer>
        <newdisc></newdisc> -->
    </div> 
</template>
<script>
// import {findMusic} from '../service/dataProcessing'
// import recommend from './navController/recommend'
// import rank from './navController/rank'
// import list from './navController/list'
// import radio from './navController/radio'
// import singer from './navController/singer'
// import newdisc from './navController/newdisc'

    export default {
        data () {
            return {
                
            }
        },

        components: {
            // recommend,
            // rank,
            // list,
            // radio,
            // singer,
            // newdisc
            
        },

        computed:{

        }
    }
</script>
<style scoped>
    .findMusicComponent{
        width: 100%;
        height: auto;
    }

</style>