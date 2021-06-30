// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "../../types/types";

const products: Product[] = [
    {
        _id: "1",
        name: "Laptop 1",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 10,
    },
    {
        _id: "2",
        name: "Laptop 2",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 5,
    },
];



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json(products)
}
