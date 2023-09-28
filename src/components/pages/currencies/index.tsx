import { useGetAlfaBankRates } from 'components/services/hooks/useGetAlfaBankRates.ts';
import { Spin } from 'shared/components/Spin';

export const Currencies = () => {
    const { rates, loading, date, bankName } = useGetAlfaBankRates();
    return (
        <Spin spinning={loading}>
            <div className="ps-2 mb-2 d-flex justify-content-between">
                <span className="fw-bold">{bankName}</span>
                <span>{date}</span>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Sell</th>
                        <th scope="col">Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {rates?.map(rate => (
                        <tr>
                            <td>
                                {rate.buyIso}/{rate.sellIso}
                            </td>
                            <td>{rate.buyRate}</td>
                            <td>{rate.sellRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Spin>
    );
};
