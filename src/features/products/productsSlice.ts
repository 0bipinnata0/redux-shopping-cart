import { createSlice } from '@reduxjs/toolkit';
import { Product } from "../../app/api";

export interface ProductsState {
    products: { [id: string]: Product }
}

const initialState: ProductsState = {
    products: {
        207: {
            "id": "207",
            "name": "Bananas",
            "price": 1.09,
            "description": "This cluster of delicious bananas will keep your hunger down while filling you with nutritious potassium. ",
            "imageURL": "https://live.staticflickr.com/7013/6612824761_3f66a93c71_b.jpg",
            "imageAlt": "A single bunch of 4 yellow bananas connected toegher",
            "imageCredit": "\"Bananas (edited)\" by 24oranges.nl is licensed under CC BY-SA 2.0"
        },
        208: {
            "id": "208",
            "name": "Chocolates",
            "price": 9.99,
            "description": "This 3-pack of fine Zotter chocolates comes all the way from Austria and will bring you the comfort and joy you need this very day.",
            "imageURL": "https://cdn.shopify.com/s/files/1/0386/0293/2356/products/image_2c5617fb-89a7-4d04-9bfb-f0c0dcd28f6d_590x.jpg?v=1612476249",
            "imageAlt": "3 chocolate bars from Zotter Choclates",
            "imageCredit": "Kari Ferguson, Oh Hello Again 2021"
        },
        209: {
            "id": "209",
            "name": "Ice cream",
            "price": 3.49,
            "description": "This is a delicious ice cream cone that will literally melt in your mouth. Enjoy on any warm summer day.",
            "imageURL": "https://live.staticflickr.com/4162/34323731175_1d163a49ed_b.jpg",
            "imageAlt": "ice cream cone",
            "imageCredit": "\"ice cream cone\" by sussexcareers is marked under CC0 1.0."
        },
        300: {
            "id": "300",
            "name": "Headphones",
            "price": 34.99,
            "description": "Look cool while blocking out the rest of the world.",
            "imageURL": "https://live.staticflickr.com/5763/22921682035_334b6161c9_b.jpg",
            "imageAlt": "Cool looking headphones in gray and black",
            "imageCredit": "\"Headphones in Black and White\" by Image Catalog is marked under CC0 1.0."
        },
        302: {
            "id": "302",
            "name": "Candle",
            "price": 20.0,
            "description": "Do not leave this candle burning all night, but enjoy the smell and warm color it provides.",
            "imageURL": "https://live.staticflickr.com/4222/34089272484_40ab76ce4e_b.jpg",
            "imageAlt": "upclose shot of a lit candle that by Walrus36",
            "imageCredit": "\"Candle\" by Walrus36 is licensed with CC BY 2.0."
        }
    }
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

const productsReducer = productsSlice.reducer

export default productsReducer