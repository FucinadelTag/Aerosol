module.exports = {
  head: {
        title: 'Aerosol a Pistone Solede',
        htmlAttrs: {
            lang: 'it',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'xWlR0w7rlsVEGy_tq4k2UecX4KolhabTQJ4pKoByRUM' },
            { hid: 'description', name: 'description', content: 'Aerosol Nebulizzatore a Pistone per Neonati, Bambini e Adulti. Acquista Online o al Telefono: Spedizione Gratuita in 2-3 Giorni Lavorativi. Soddisfatti o Rimborsati. Garanzia 2 anni!' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' },
            { rel: 'stylesheet', href:'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'}
        ],
    },
    modules: [
        [
            'nuxt-sass-resources-loader',
            './assets/scss/variables.scss',
        ]
    ],
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    plugins: [
        { src: '~plugins/iconFont.js', ssr: false },
        { src: '~plugins/facebook.js', ssr: false },
        { src: '~plugins/iubenda.js', ssr: false },
        { src: '~plugins/analytics.js', ssr: false }

    ],
    loading: { color: '#3B8070' },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            }
        }
    }
}
