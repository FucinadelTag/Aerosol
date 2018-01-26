<template>
    <div class="default">
        <div class="container">
            <div>
                <Menu/>
                <nuxt/>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" charset="utf-8"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MDBmMGFjMzItODhhNy00OWYzLThkOTktYzU4MGNjNjg5NmQ1NjM2MTk2NTM1MzM1ODI2MDUy"></script>
    </div>

</template>

<script charset="utf-8">
    import Menu from '~/components/menu.vue'

    export default {
        components: {
            Menu

        },
        head () {
            return {
                title: 'Solede - Nebulizzatori e Aerosol',
                meta: [
                    { hid: 'description', name: 'description', content: 'Prova description' }
                ]
            }
        },
    }
</script>

<style>
.default {
    padding: 1rem;
}
</style>
