import { FlatList, View, Image } from "react-native";
import { CriptoImage, CriptoSymbol, CriptoPercentage, CriptoHighlight, CriptoListItem, LeftSideListItem, RightSideListItem, SelectedText, SimpleText, BrlCurrencyBtn, Container, HeaderList, SelectCurrency, Title, UsdCurrencyBtn } from "./styles";

export function CriptoList({data, currency, setCurrency}) {  
    return (
        <Container>
            <HeaderList>
                <Title>Moedas</Title>
                
                <SelectCurrency>
                    <UsdCurrencyBtn>
                        <SelectedText>USD</SelectedText>
                    </UsdCurrencyBtn>

                    <BrlCurrencyBtn>
                        <SimpleText>BRL</SimpleText>
                    </BrlCurrencyBtn>
                </SelectCurrency>
            </HeaderList>

            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                style={{marginBottom: 200}}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <CriptoListItem>
                        <View style={{flexDirection: "row", gap: 18}}>
                            <CriptoImage source={{ uri: item.image }} />
                            <LeftSideListItem>
                                <CriptoHighlight>{item.name}</CriptoHighlight>
                                <CriptoSymbol>{item.symbol}</CriptoSymbol>
                            </LeftSideListItem>
                        </View>
                        
                        <RightSideListItem>
                            <CriptoHighlight>$ {item.current_price.toFixed(2)}</CriptoHighlight>
                            <CriptoPercentage value={item.price_change_percentage_24h}>
                                {item.price_change_percentage_24h.toFixed(2)}%
                            </CriptoPercentage>
                        </RightSideListItem>
                    </CriptoListItem>
                )}
            />
        </Container>
    )
}