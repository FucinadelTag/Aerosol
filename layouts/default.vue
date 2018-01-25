<template>
    <div class="default">
        <div class="container">
            <div>
                <Menu/>
                <nuxt/>
            </div>
        </div>
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
</style>
