<template lang="html">
    <strong class="dataPromo">{{getScadenzaPromo()}}</strong>
</template>

<script>
import moment from 'moment';
export default {
    methods:{
        getScadenzaPromo:function(){
            moment.locale('it');
            var lastDayOfPromo = moment().endOf('month').format("D\ MMMM YYYY");
            var dayMonth = moment().date();

            if (dayMonth <= 15){
                lastDayOfPromo = moment().endOf('month').format("MMMM YYYY");
                lastDayOfPromo = '15 ' + lastDayOfPromo;
            }

            return lastDayOfPromo;

        }
    },
}
</script>

<style lang="scss">

</style>
