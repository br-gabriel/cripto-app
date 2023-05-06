import { FlatList, Text, View } from "react-native"
import { Container, Title, CriptoName, CriptoSymbol, CriptoImage, CriptoListItem } from "./styles"

export function SearchResultsList({result, currency}) {
    return (
        <Container>
            <Title>Pesquisa</Title>
            <FlatList
                data={result}
                keyExtractor={item => item.id.toString()}
                style={{marginBottom: 200}}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <CriptoListItem>
                        <CriptoImage source={{ uri: item.large }} />
                        <View style={{flexDirection: 'column'}}>
                            <CriptoName>{item.name}</CriptoName>
                            <CriptoSymbol>{item.symbol}</CriptoSymbol>
                        </View>
                    </CriptoListItem>
                )}
            />
        </Container>
    )
}