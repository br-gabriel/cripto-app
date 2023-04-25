import { useEffect, useState } from "react";
import { Alert, Dimensions, Text } from 'react-native';
import { api } from '../../../services/api';
import { LineChart } from "react-native-chart-kit";
import { Loading } from '../../Loading';
import { format } from "date-fns";
import { ChartContainer } from "./styles";

export function HistoryChart() {
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState([]);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get(`coins/bitcoin/market_chart?vs_currency=usd&days=3&interval=daily`)

            const formattedData = await response.data.prices.map(price => {
                const formattedDate = format(new Date(price[0]), 'yyyy-MM-dd');
                return { date: formattedDate, price: price[1] };
            })

            setChartData(formattedData)
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

    return (
        <ChartContainer>
            {chartData.length > 0 ? (
                <LineChart
                data={{
                    datasets: [{ data: chartData.map((item) => item.price ) }]
                }}

                width={Dimensions.get('window').width - 32}
                height={301}
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
                    marginTop: -40,
                    paddingTop: 40,
                    borderRadius: 5,
                }}
            />
            ) : (
                <Loading bgColor={'#272657'} />
            )}
        </ChartContainer>
    )
}