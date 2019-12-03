export default class AppleService{

    getIphones = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something went wrong"))
                }
                resolve(iphones)
            }, 1000)
        })
    }

}


const iphones = [
    {
        category: "iphone",
        id: 1001,
        model: "Smartphone Apple iPhone 8 64GB (Gold) (MQ6M2)",
        description: "Screen: 4.7 (1334x750) / Processor: six-core Apple A11 Bionic / Camera: 12 MP + 7 MP / OS: iOS 11 / Internal memory: 64 GB / RAM: 2 GB / LTE / GPS, GLONASS, BDS, GALILEO / Dimensions: 138.4x67.3x7.3 mm / Weight: 148 g",
        price: "600",
        img: "https://avic.ua/assets/cache/images/assets/files/products/34325/image/200x220-apple-iphone-8-gold-02.jpg",
        stoсkPrice: "570"
    },
    {
        category: "iphone",
        id: 1002,
        model: "Smartphone Apple iPhone 11 Pro Max 64GB Midnight Green (MWH22)",
        description: "Screen: 6.5 OLED (2688x1242) / Processor: six-core Apple A13 Bionic / Camera: 12 + 12 + 12 MP + 12 MP / OS: iOS 13 / Internal memory: 64 GB / RAM: 6 GB / LTE / GPS, GLONASS , BDS, GALILEO / Dimensions: 158x77.8x8.1 mm / Weight: 226 g",
        price: "1500",
        img: "https://avic.ua/assets/cache/images/assets/files/products/218501/image/200x220-apple-iphone-11-pro-max-midnight-green-1.jpg",
        stoсkPrice: null
    },
    {
        category: "iphone",
        id: 1003,
        model: "Smartphone Apple iPhone 11 64GB Product Red (MWL92)",
        description: "Screen: 6.1 IPS (1792x828) / Processor: six-core Apple A13 Bionic / Camera: 12 + 12 MP + 12 MP / OS: iOS 13 / Internal memory: 64 GB / RAM: 4 GB / LTE / GPS, GLONASS, BDS , GALILEO / Dimensions: 150.9 x 75.7 x 8.3 mm / Weight: 194 g",
        price: "900",
        img: "https://avic.ua/assets/cache/images/assets/files/products/34325/image/200x220-apple-iphone-8-gold-02.jpg",
        stoсkPrice: "860"
    },
];

const ipads = [
    {
        category: "ipad",
        id: 2001,
        model: "Apple iPad Pro 10.5 Wi-Fi 64GB Gold Tablet (MQDX2)",
        description: "Screen: 10.5 (2224x1668) (Retina display) / Processor: six-core Apple A10X (2.36 GHz) / RAM: 4 GB / 64 GB of internal memory / Camera: 12 MP and 7 Mp / OS: iOS 11 / Dimensions: 250, 6x174.1x6.1 mm / Weight: 469 g",
        price: "700",
        img: "https://avic.ua/assets/cache/images/assets/files/products/24660/image/200x220-apple-ipad-pro-10-5-wi-fi-64gb-gold-mqdx2.jpg",
        stoсkPrice: null
    },
    {
        category: "ipad",
        id: 2002,
        model: "Apple iPad Pro 11 (2018) Wi-Fi 256GB Space Gray (MTXQ2)",
        description: "Screen: 11.0 (2388x1668) (Liquid Retina) / Processor: eight-core Apple A12X Bionic / RAM: 4 GB / 256 GB of internal memory / Camera: 12 MP and 7 MP / OS: iOS 12 / Dimensions: 247.6 x 178.5 x 5 9 mm / Weight: 468 g",
        price: "900",
        img: "https://avic.ua/assets/cache/images/assets/files/products/210518/image/200x220-apple-ipad-pro-11-2018-space-gray-1.jpg",
        stoсkPrice: "820"
    },
    {
        categoryId: "ipad",
        id: 2003,
        model: "Tablet Apple iPad mini 4 128Gb WiFi Gold (MK9Q2)",
        description: "Screen: 7.9 (2048x1536) (Retina display) / Processor: Apple A8 (1.5 GHz) / RAM: 2 GB / 128 GB of internal memory / Camera: 8 MP and 1.2 Mp / OS: iOS 9 / Dimensions : 203.2 x 134.8 x 6.1 mm / Weight: 298.8 g",
        price: "400",
        img: "https://avic.ua/assets/cache/images/assets/files/products/15837/image/200x220-Apple-iPad-mini-4-Gold.jpg",
        stoсkPrice: null
    },
]