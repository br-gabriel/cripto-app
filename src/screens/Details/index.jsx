import { Alert, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Title, Price, Percentage, Header } from "./styles";
import { HistoryChart } from "../../components/DetailsPage/HistoryChart";
import { ChartFilter } from "../../components/DetailsPage/ChartFilter"; 
import { BackButton } from "../../components/BackButton";
import { Informations } from "../../components/DetailsPage/MoreInfo";
import { Loading } from "../../components/Loading";
import { currencyFormatter } from "../../utils/currency_formatter";

export function Details({ route }) {
    const { item, currency } = route.params;
    
    const [filter, setFilter] = useState(15);
    const [interval, setInterval] = useState('&interval=daily');
    const [criptoData, setCriptoData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData(currency) {
        try {
            setLoading(true)
            const response = await api.get(`coins/${item.id}`)
            setCriptoData(response.data)
        } catch (error) {
            Alert.alert("Ops", "Não foi possível carregar as informações da moeda")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(currency)
    }, [])

    return (
        <>
            {loading ? (
                <Loading bgColor={'#05043D'} />
            ) : (
                <Container>
                    <BackButton />
                    <ScrollView style={{ width: '90%', alignContent: 'center' }} showsVerticalScrollIndicator={false}>
                        <Header>
                            <Title>
                                {criptoData.name}
                            </Title>
                            <Price>
                                {currency === 'usd' ? 
                                    currencyFormatter(currency, criptoData.market_data.current_price.usd) 
                                :
                                    currencyFormatter(currency, criptoData.market_data.current_price.brl) 
                                }
                            </Price>
                            <Percentage value={criptoData.market_data.price_change_percentage_24h}>
                                {criptoData.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                                {criptoData.market_data.price_change_percentage_24h.toFixed(2)}%
                            </Percentage>
                        </Header>

                        <HistoryChart name={criptoData.id} currency={currency} days={filter} interval={interval} />
                        <ChartFilter setFilter={setFilter} setInterval={setInterval} />

                        <Informations 
                            high_24h={criptoData.market_data.high_24h[currency]}
                            low_24h={criptoData.market_data.low_24h[currency]}
                            mkt_cap_rank={criptoData.market_cap_rank} 
                            mkt_cap={criptoData.market_data.market_cap[currency]}
                            total_volume={criptoData.market_data.total_volume[currency]}
                            percent_7d={criptoData.market_data.price_change_percentage_7d} 
                            percent_30d={criptoData.market_data.price_change_percentage_30d} 
                            percent_1y={criptoData.market_data.price_change_percentage_1y}
                            genesis_date={criptoData.genesis_date}
                            currency={currency}
                        />
                    </ScrollView>
                </Container>
            )}
        </>
    )
};