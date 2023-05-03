import { Container, Title, InfoContainer, InfoTitle, Info, Percentage } from "./styles";
import { currencyFormatter } from "../../../utils/currency_formatter";
import { dateFormatter } from "../../../utils/date_formatter";

export function Informations({high_24h, low_24h, mkt_cap_rank, mkt_cap, total_volume, percent_7d, percent_30d, percent_1y, genesis_date, currency}) {
    return (
        <Container>
            <Title>Mais informações</Title>

            <InfoContainer>
                <InfoTitle>Alta 24h:</InfoTitle>
                <Info>{currencyFormatter(currency, high_24h)}</Info>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Baixa 24h:</InfoTitle>
                <Info>{currencyFormatter(currency, low_24h)}</Info>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Rank Market Cap:</InfoTitle>
                <Info>{mkt_cap_rank}º</Info>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Market Cap:</InfoTitle>
                <Info>{currencyFormatter(currency, mkt_cap)}</Info>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Volume 24h:</InfoTitle>
                <Info>{currencyFormatter(currency, total_volume)}</Info>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Variação em 7d:</InfoTitle>
                <Percentage value={percent_7d}>
                    {percent_7d > 0 ? '+' : ''}
                    {percent_7d.toFixed(2)}%
                </Percentage>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Variação em 30d:</InfoTitle>
                <Percentage value={percent_30d}>
                    {percent_30d > 0 ? '+' : ''}
                    {percent_30d.toFixed(2)}%
                </Percentage>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Variação em 1 ano:</InfoTitle>
                <Percentage value={percent_1y}>
                    {percent_1y > 0 ? '+' : ''}
                    {percent_1y.toFixed(2)}%
                </Percentage>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Criado em:</InfoTitle>
                <Info>{dateFormatter(currency, new Date(genesis_date))}</Info>
            </InfoContainer>
        </Container>
    )
}