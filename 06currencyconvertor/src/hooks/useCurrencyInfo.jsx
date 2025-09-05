import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`;
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                // The API returns rates under the 'rates' key
                setData(res.rates || {});
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;