<template lang="html">
    <div>
        <div class="columns">
            <div class="column">
                <nav class="navbar myMenu" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img class="imglogo" src="https://prismic-io.s3.amazonaws.com/solede/ad1a0872cb0cc3f8bbdc38aec95e622b7bff6b0a.png" alt="Solede">
                        </a>

                        <button class="button navbar-burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href=""></a>
                        </div>
                        <div class="navbar-end">
                            <a class="navbar-item" href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i> Carrello</a>
                        </div>
                    </div>
                </nav>
                <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-menu">
                        <div class="navbar-start">
                            <a v-for="item in menuItems" class="navbar-item" v-bind:href="'/' + item.link" v-bind:class="item.isActive">{{item.name}}</a>
                        </div>
                    </div>
                </nav> -->

            </div>

        </div>


    </div>

</template>

<script>
export default {
}
</script>

<style lang="scss">
    .myMenu {
        img {
            max-height: 100%;
        }
        a {
            letter-spacing: 0.35rem;
        }
    }
</style>
