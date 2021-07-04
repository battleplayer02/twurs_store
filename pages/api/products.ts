// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from "../../types/types";

const products: Product[] = [
    {
        _id: "1",
        name: "Laptop 1",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 10,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis  ",
        price: 10,
        type: "Type 1"
    },
    {
        _id: "2",
        name: "Laptop 2",
        image: "https://lh3.googleusercontent.com/ogw/ADea4I4qqLBtGT5xGk1NoEb7yyaiBAsDU86kRDGLrCb9yA=s83-c-mo",
        quantity: 5,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis  ",
        price: 10,
        type: "Type 2"
    },
    {
        _id: "3",
        name: "Laptop 3",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis  ",
        price: 10.32,
        type: "Type 3"
    },
    {
        _id: "4",
        name: "Laptop 4",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis  ",
        price: 10.32,
        type: "Type 4"
    },
    {
        _id: "5",
        name: "Laptop 5",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis  ",
        price: 10.32,
        type: "Type 5",
    },
    {
        _id: "6",
        name: "Laptop 5",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        quantity: 8,
        description: "Lorem ipsum dolor sit m amet laudantium ipsum! Blanditiis beatae consequuntur molestiae laboriosam explicabo. Nam aliquid repellat illum. Eligendi quis  ",
        price: 10.32,
        type: "Type 6",
    },
];



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json(products)
}
