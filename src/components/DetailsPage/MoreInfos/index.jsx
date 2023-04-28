import { ScrollView } from "react-native"
import { Container, MoreInfoTitle, InfoContainer, Title, Result } from "./styles"

export function MoreInfo() {
    return (
        <>
            <Container>
                <MoreInfoTitle>
                    Mais informações
                </MoreInfoTitle>


            </Container>

            <ScrollView style={{width: '90%'}}>
                <InfoContainer>
                    <Title>Capitalização de mercado:</Title>
                    <Result>US$ 419.969.999.693</Result>
                </InfoContainer>

                <InfoContainer>
                    <Title>Volume de negociação de 24 h:</Title>
                    <Result>US$ 28.620.897.975</Result>
                </InfoContainer>

                <InfoContainer>
                    <Title>Avaliação totalmente diluída:</Title>
                    <Result>US$ 456.671.586.000</Result>
                </InfoContainer>

                <InfoContainer>
                    <Title>Fornecimento circulante:</Title>
                    <Result>19.312.281</Result>
                </InfoContainer>

                <InfoContainer>
                    <Title>Fornecimento total:</Title>
                    <Result>21.000.000</Result>
                </InfoContainer>

                <InfoContainer>
                    <Title>Fornecimento máx:</Title>
                    <Result>21.000.000</Result>
                </InfoContainer>
            </ScrollView>
        </>
    )
}