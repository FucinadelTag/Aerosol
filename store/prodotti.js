const listProdotti =
    {
        emed_A1500:{
            nome: 'Aerosol a pistone EMED A1500 (Pinguino)',
            sku: 'EMED_A1500',
            prezzoIntero: 85,
            prezzoScontato: '42,5',
            precentualeSconto: 50,
            risparmio: '42,5',
            immagine: 'https://prismic-io.s3.amazonaws.com/aerosol/63c30ff597d512253e01b1403be2e851b8802ee3_a1500.png'
        },
        emed_A610: {
            nome: 'Aerosol a pistone EMED A610 (Goccia)',
            sku: 'EMED_A610',
            prezzoIntero: 103,
            prezzoScontato: '51,5',
            precentualeSconto: 50,
            risparmio: '51,5',
            immagine: 'https://prismic-io.s3.amazonaws.com/aerosol/8b8433c472bf9ccc4fe6ca7b5862720cad29b0e7_a610-lateral-view.jpg'
        },

    };

export const state = () => ({
  prodotti: listProdotti,
})


export const getters = {
    getProdotti: (state) => {
        return state.prodotti;
    },
}
