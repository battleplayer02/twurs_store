export interface Product {
    _id: string
    name: string
    image: string
    quantity: number
    description: string
    price: number
    type: string
}

export let Cart: Array<Product>