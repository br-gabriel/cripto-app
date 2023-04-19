import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import { Alert, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Loading } from '../../Loading';
import moment from 'moment';

export function HistoryChart() {
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState([]);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get(`coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`)

            const formattedData = response.data.prices.map(price => {
                const formattedDate = moment(price[0]).format('YYYY-MM-DD');
                return { date: formattedDate, price: price[1] };
            })

            setChartData(formattedData);
        } catch (error) {
            Alert.alert('Ops', 'Não foi possível carregar o gráfico')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    if (loading) {
        return (
            <Loading />
        );
    };

    return (
        <>
            <LineChart
                data={{
                    datasets: [{ data: chartData.map((item) => item.price ) }]
                }}

                width={Dimensions.get('window').width - 32}
                height={300}
                yAxisLabel="$"
                yAxisSuffix="k"
                withVerticalLines={false}
                yLabelsOffset={10}
                withVerticalLabels={false}

                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#272657',
                    backgroundGradientTo: '#272657',
                    decimalPlaces: 0,
                    color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: '2',
                        strokeWidth: '1',
                        stroke: '#fff'
                    }
                }}
                bezier
                style={{
                    marginTop: 0,
                    paddingTop: 40,
                    borderRadius: 5,
                }}
            />
        </>
    )
}