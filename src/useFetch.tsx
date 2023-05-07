import { useEffect, useState } from "react";

interface Items {
    data: {
        mobile: string;
        email: string;
        skills: string;
        name: string;
        imageUrl: string;
    },
    totalRecords: number;
}


const useFetch = (url, sieveModel) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] =  useState<Array<Items>>();

    const getData = async () => {
        setLoading(true);
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(sieveModel),
            headers: {
                'content-type': 'application/json;charset-UTF-8'
            }
        });
        const data = await response.json();
        console.log(data)

        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [sieveModel.page]);

    return [loading, data];
}

export default useFetch;
