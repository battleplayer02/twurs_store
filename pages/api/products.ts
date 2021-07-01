// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "../../types/types";

const products: Product[] = [
    {
        _id: "1",
        name: "Laptop 1",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 10,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis vero temporibus quam! ",
        price: 12782
    },
    {
        _id: "2",
        name: "Laptop 2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 5,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis vero temporibus quam! ",
        price: 12782
    },
    {
        _id: "3",
        name: "Laptop 2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis vero temporibus quam! ",
        price: 12782.32
    },
    {
        _id: "4",
        name: "Laptop 2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis vero temporibus quam! ",
        price: 12782.32
    },
    {
        _id: "5",
        name: "Laptop 2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis vero temporibus quam! ",
        price: 12782.32
    },
];



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json(products)
}
