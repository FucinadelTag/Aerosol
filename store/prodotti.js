const listProdotti =
    {
        emed_A1500:{
            nome: 'Aerosol a pistone',
            sku: 'EMED_A1500',
            prezzoIntero: 100,
            prezzoScontato: 50,
            precentualeSconto: 50,
            risparmio: 50,
            immagine: 'https://prismic-io.s3.amazonaws.com/aerosol/63c30ff597d512253e01b1403be2e851b8802ee3_a1500.png'
        },
        emed_A610: {
            nome: 'Aerosol a pistone',
            sku: 'EMED_A610',
            prezzoIntero: 100,
            prezzoScontato: 60,
            precentualeSconto: 40,
            risparmio: 40,
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
