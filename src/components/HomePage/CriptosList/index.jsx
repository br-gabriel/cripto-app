import { FlatList, View } from "react-native";
import { CriptoImage, CriptoSymbol, CriptoPercentage, CriptoHighlight, CriptoListItem, LeftSideListItem, RightSideListItem, UsdText, BrlText, BrlCurrencyBtn, Container, HeaderList, SelectCurrency, Title, UsdCurrencyBtn } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CriptoList({data, currency, setCurrency}) {  
    const { navigate } = useNavigation();
    
    function changeCurrency(value) {
        setCurrency(value);
    }

    function currencyFormatter(currency, price) {
        const formatter = new Intl.NumberFormat(currency == 'usd' ? 'en-US' : 'pt-BR', {
            style: 'currency',
            currency: currency.toUpperCase(),
        })

        return formatter.format(price);
    }

    return (
        <Container>
            <HeaderList>
                <Title>Moedas</Title>
                
                <SelectCurrency>
                    <UsdCurrencyBtn value={currency} onPress={() => changeCurrency('usd')}>
                        <UsdText value={currency}>
                            USD
                        </UsdText>
                    </UsdCurrencyBtn>

                    <BrlCurrencyBtn value={currency} onPress={() => changeCurrency('brl')}>
                        <BrlText value={currency}>
                            BRL
                        </BrlText>
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
                    <CriptoListItem 
                        onPress={() => navigate('Details', {item, currency})}
                    >
                        
                        <View style={{flexDirection: "row", gap: 18}}>
                            <CriptoImage source={{ uri: item.image }} />
                            <LeftSideListItem>
                                <CriptoHighlight>{item.name}</CriptoHighlight>
                                <CriptoSymbol>{item.symbol}</CriptoSymbol>
                            </LeftSideListItem>
                        </View>
                        
                        <RightSideListItem>
                            <CriptoHighlight>
                                {currencyFormatter(currency, item.current_price)}
                            </CriptoHighlight>

                            <CriptoPercentage value={item.price_change_percentage_24h}>
                                {item.price_change_percentage_24h > 0 ? '+' : ''}
                                {item.price_change_percentage_24h.toFixed(2)}%
                            </CriptoPercentage>
                        </RightSideListItem>

                    </CriptoListItem>
                )}
            />
        </Container>
    )
}