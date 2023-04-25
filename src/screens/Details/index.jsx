import { Container, Title, Price, Percentage, Header } from "./styles";
import { HistoryChart } from "../../components/DetailsPage/HistoryChart";
import { ChartFilter } from "../../components/DetailsPage/ChartFilter"; 
import { BackButton } from "../../components/BackButton";

export function Details({ route }) {
    const { item, currency } = route.params;
    
    return (
        <Container>
            <BackButton />
            <Header>
                <Title>{item.name}</Title>
                <Price>$ {item.current_price.toFixed(2)}</Price>
                <Percentage value={item.price_change_percentage_24h}>
                    {item.price_change_percentage_24h.toFixed(2)}%
                </Percentage>
            </Header>

            <HistoryChart />
            <ChartFilter />
        </Container>
    )
};