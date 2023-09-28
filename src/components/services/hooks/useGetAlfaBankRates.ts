import { useEffect, useMemo, useState } from 'react';

const GET_ALFA_BANK_RATES_URL = 'https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates';

type Rate = {
    sellRate: number;
    sellIso: string;
    sellCode: number;
    buyRate: number;
    buyIso: 'RUB';
    buyCode: number;
    quantity: number;
    name: string | null;
    date: string;
};

const bankName = 'Alfa-bank';

export const useGetAlfaBankRates = () => {
    const [rates, setRates] = useState<Array<Rate> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch(GET_ALFA_BANK_RATES_URL)
            .then(res => res.json())
            .then(res => {
                setRates(res.rates);
                setLoading(false);
            });
    }, []);

    const date = useMemo(() => rates && rates[0].date, [rates]);

    return { rates, loading, date, bankName };
};
