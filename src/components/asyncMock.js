
const products = [
    {
        id:'01',
        name:'Uñas francesa',
        price: 11900,
        category:'impress',
        img: 'https://imsibeauty.com/wp-content/uploads/2023/07/Diseno-sin-titulo-2023-07-18T174250.984.jpg',
        stock:8,
        description:'Uñas press on largo S'

    },
    {
        id:'02',
        name:'Uñas San Patrik',
        price: 12900,
        category:'impress',
        img:'https://imsibeauty.com/wp-content/uploads/2023/02/Diseno-sin-titulo-2023-02-24T144104.604.jpg',
        stock:6,
        description:'Uñas press on largo S'

    },
    {
        id:'03',
        name:'Uñas rosa',
        price: 11900,
        category:'impress',
        img:'https://imsibeauty.com/wp-content/uploads/2023/02/Diseno-sin-titulo-89.jpg',
        stock:7,
        description:'Uñas press on largo S'

    },
    {
        id:'04',
        name:'Esponja exfoliante',
        price: 2900,
        category:'skincare',
        img:'https://imsibeauty.com/wp-content/uploads/2022/12/Kiss_FacialExfoliateCleansingSponge_CLE07_Package_Front_731509780697_Jan.15.2020-web.jpg',
        stock:10,
        description:'Esponja facial limpiadora y exfoliante'

    },
    {
        id:'05',
        name:'Esponja suave',
        price: 1900,
        category:'skincare',
        img:'https://imsibeauty.com/wp-content/uploads/2022/12/P0000CXH_500_500.jpg',
        stock:8,
        description:'Esponja facial limpiadora y aplicadora'

    },
    {
        id:'06',
        name:'Serum facial',
        price: 21000,
        category:'skincare',
        img:'https://imsibeauty.com/wp-content/uploads/2022/05/1-4-3.png',
        stock:9,
        description:'Serum facial con acido hialuronico'

    },
    {
        id:'07',
        name:'Pestañas kiss',
        price: 5000,
        category:'pestanas',
        img:'https://imsibeauty.com/wp-content/uploads/2022/07/Kiss_MLBBMyLashButBatter_KMBB03_Package_Front_7315.jpg',
        stock:6,
        description:'Pestañas extralargas'

    },
    {
        id:'08',
        name:'Pestañas falsies',
        price: 6000,
        category:'pestanas',
        img:'https://imsibeauty.com/wp-content/uploads/2023/06/Kiss_ILM02_ImpressPressOnFalsies_Package_Front_731509883862_Oct.13.2022-web-1.jpg',
        stock:7,
        description:'Pestañas tupidas'

    },
    {
        id:'09',
        name:'Pestañas falscara',
        price: 8000,
        category:'pestanas',
        img:'https://imsibeauty.com/wp-content/uploads/2023/07/Kiss_Falscara_KFCM02_Package_Front_731509838343_Jun.15.2021-web.jpg',
        stock:4,
        description:'Pestañas ultraduraderas'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}