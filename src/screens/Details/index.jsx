import { Container, Title, Price, Percentage, Header } from "./styles";
import { HistoryChart } from "../../components/DetailsPage/HistoryChart";
import { ChartFilter } from "../../components/DetailsPage/ChartFilter"; 
import { BackButton } from "../../components/BackButton";
import { useState } from "react";
import { ScrollView } from "react-native";

export function Details({ route }) {
    const { item, currency } = route.params;
    
    const [filter, setFilter] = useState(15);
    const [interval, setInterval] = useState('&interval=daily');

    function currencyFormatter(currency, price) {
        const formatter = new Intl.NumberFormat(currency == 'usd' ? 'en-US' : 'pt-BR', {
            style: 'currency',
            currency: currency.toUpperCase(),
        })

        return formatter.format(price);
    }

    return (
        <Container>
            <BackButton />
            <ScrollView style={{width: '90%', alignContent: 'center'}} showsVerticalScrollIndicator={false}>
                <Header>
                    <Title>{item.name}</Title>
                    <Price>
                        {currencyFormatter(currency, item.current_price)}
                    </Price>
                    <Percentage value={item.price_change_percentage_24h}>
                        {item.price_change_percentage_24h > 0 ? '+' : ''}
                        {item.price_change_percentage_24h.toFixed(2)}%
                    </Percentage>
                </Header>

                <HistoryChart name={item.id} currency={currency} days={filter} interval={interval} />
                <ChartFilter setFilter={setFilter} setInterval={setInterval} />
            </ScrollView>
        </Container>
    )
};