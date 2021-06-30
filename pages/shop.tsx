import { useEffect, useState } from "react"
import { Product } from "../types/types";

export default function shop() {

    const [data, setData] = useState<Product[]>([]);

    useEffect(async () => {
        const res = await fetch(`/api/products`);
        const incomingData: Product[] = await res.json();
        setData(incomingData)

    }, [])
    return (
        <div>
            fetching data  <br /><br /><br />
            {data.length == 0 ? "Loading...." : JSON.stringify(data)}
        </div>
    )
}
