<template>
    <div class="default">
        <div class="container">
            <div>
                <Menu/>
                <nuxt/>

                <footer class="footer">
                    <div class="container">
                        <div class="content">
                            <p>
                                <a href="resi" target="_blank">Restituzione e Rimborsi</a> | <a href="privacy">Privacy Policy</a> 
                            </p>
                            <br>
                            <p>
                                <a href="https://www.facebook.com/Solede-132677133933081/" target="_blank"><i class="fa fa-facebook"></i></a> | © Solede è un progetto di Fucina del Tag - Via Pastregno 14 - 20128 MIlano - P.IVA 03201900960 <br>

                            </p>

                        </div>
                    </div>
                </footer>
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
.default {
}
</style>
