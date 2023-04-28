import { useEffect, useState } from "react";
import { Alert, Dimensions } from 'react-native';
import { api } from '../../../services/api';
import { LineChart } from "react-native-chart-kit";
import { Loading } from '../../Loading';
import { format } from "date-fns";
import { ChartContainer } from "./styles";

export function HistoryChart({ name, currency, days, interval }) {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get(`coins/${name}/market_chart?vs_currency=${currency}&days=${days - 1}${interval}`)

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
    }, [, days, interval])

    return (
        <ChartContainer>
            {loading ? (
                <Loading bgColor={'#272657'} />
            ) : (
                <LineChart
                    data={{
                        datasets: [{ data: chartData.map((item) => item.price) }]
                    }}

                    width={Dimensions.get('window').width - 32}
                    height={301}
                    yAxisLabel="$"
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
                            r: '0',
                            strokeWidth: '0',
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
            )}
        </ChartContainer>
    )
}