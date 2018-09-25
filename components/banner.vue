<template lang="html">
    <section class="banner">
        <div class="columns">
                <div class="column">
                        <span class="sconto">50% di Sconto </span> <br><i>Fino al  <scadenzaPromo /></i><br>

                        <span class="phoneAction">
                            <span class="subSconto"><i>Ordina Subito!</i></span><br>
                            <addToCartButton sku="emed_A1500" />
                        </span>
                </div>
        </div>
    </section>


</template>

<script>
import scadenzaPromo from '~/components/scadenzaPromo.vue'
import addToCartButton from '~/components/addToCartButton.vue'

export default {
    components: {
        scadenzaPromo,
        addToCartButton
    },
}
</script>

<style lang="scss">

.banner {
    text-align: center;
    padding-top: rem-calc(50, null);
    padding-bottom: rem-calc(50, null);
    padding-left: rem-calc(20, null);
    padding-right: rem-calc(20, null);
    letter-spacing: 1px;

    .sconto {
        font-size: 5vw;
        text-transform: none;
        font-weight: 700;
        font-style: normal;
        color: $rosso-color;
    }

    .subSconto {
        font-size: 3vw;
        text-transform: none;
        font-weight: 100;
        font-style: normal;
        color: #000000;
    }

}

.numero-verde {
    font-size: 2rem;
    color: #008a2e;
}
</style>
