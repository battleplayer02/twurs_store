import { useEffect, useState } from "react"
import Product from "../components/Product";
import { Product as ProductType } from "../types/types";

export default function shop() {

    const [data, setData] = useState<ProductType[]>([]);

    useEffect(async () => {
        const res = await fetch(`/api/products`);
        const incomingData: ProductType[] = await res.json();
        setData(incomingData)

    }, [])
    return (
        <div className="p-6 py-20 font-sans antialiased">
            {data.length == 0 ? "Loading...." :
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        {
                            data.map((item: ProductType) => (
                                <Product productDetails={item} key={item._id} />
                            ))
                        }
                    </div>
                </div>
            }
        </div >
    )
}
