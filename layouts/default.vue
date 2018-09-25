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
                                <a href="resi" target="_blank">Restituzione e Rimborsi</a> | <a href="privacy" target="_blank">Privacy Policy</a>
                            </p>
                            <br>
                            <p>
                                <a href="https://www.facebook.com/Solede-132677133933081/" target="_blank"><i class="fa fa-facebook"></i></a> | © Solede è un progetto di Fucina del Tag - Via Pastregno 14 - 20128 Milano - P.IVA 03201900960 <br>

                            </p>

                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MDBmMGFjMzItODhhNy00OWYzLThkOTktYzU4MGNjNjg5NmQ1NjM2MTk2NTM1MzM1ODI2MDUy"></script>
        <script type="text/javascript" src="/javascript/snipcart/it.js" ></script>
        <script type="text/javascript" src="/javascript/snipcart/mySnipcart.js" ></script>
    </div>




</template>

<script charset="utf-8">
    import Menu from '~/components/menu.vue'

    export default {
        components: {
            Menu

        }
    }
</script>

<style>
.default {
}
</style>
