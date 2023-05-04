import { useEffect, useState } from "react";
import { Alert, Dimensions } from 'react-native';
import { api } from '../../../services/api';
import { LineChart } from "react-native-chart-kit";
import { Loading } from '../../Loading';
import { format } from "date-fns";
import { ChartContainer, DialogScreen, DialogText, DialogDate } from "./styles";
import { currencyFormatter } from "../../../utils/currency_formatter";
import { dateFormatter } from "../../../utils/date_formatter";

export function HistoryChart({ name, currency, days, interval }) {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState(null);

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get(`coins/${name}/market_chart?vs_currency=${currency}&days=${days - 1}${interval}`)

            const formattedData = await response.data.prices.map(price => {
                const formattedDate = format(new Date(price[0]), 'dd/MM/yyyy');
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
        fetchData(),
        setSelectedPoint(null)
    }, [, days, interval])

    const handlePointPress = (point) => {
        console.log(point)
        setSelectedPoint(point)
    }

    return (
        <ChartContainer>
            {loading ? (
                <Loading bgColor={'#272657'} />
            ) : (
                <>
                
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
                            r: '1',
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
                    onDataPointClick={({ value, x, y, index }) => {
                        handlePointPress({ value, x, y, date: chartData[index].date })
                    }}
                />
                {selectedPoint && (
                    <DialogScreen style={{
                            left: selectedPoint.x < 100 ? selectedPoint.x : selectedPoint.x - 115, 
                            top: selectedPoint.y < 265 ? selectedPoint.y - 300 : selectedPoint.y - 380
                        }}>
                        <DialogDate>{selectedPoint.date}</DialogDate>
                        <DialogText>Valor:</DialogText>
                        <DialogText>{currencyFormatter(currency, selectedPoint.value)}</DialogText>
                    </DialogScreen>
                )}
                </>
            )}
        </ChartContainer>
    )
}