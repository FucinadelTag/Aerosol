<template lang="html">
    <a
        class="snipcart-add-item button bottone_carrello"
        v-bind:data-item-id="prodotto.sku"
        v-bind:data-item-name="prodotto.nome"
        v-bind:data-item-price="prodotto.prezzoCart"
        data-item-url="https://www.aerosol-online.it/"
        data-item-description="Aerosol a pistone">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Aggiungi al Carrello
    </a>

</template>

<script>
export default {


    props: ['sku'],
    data: function () {
        return {
            prodotti: this.$store.getters['prodotti/getProdotti']
        }
    },
    computed: {
        // a computed getter
        prodotto: function () {
            console.log(this.sku);
            return (this.prodotti[this.sku]);

        }
    }
}
</script>

<style lang="scss">
    .bottone_carrello {
        font-size: 1.4rem;
        text-transform: uppercase;
    }

</style>
