import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    margin-top: 36px;
`

export const HeaderList = styled.View`
    width: 100%;
    height: 33px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const SelectCurrency = styled.View`
    width: 100px;
    flex-direction: row;
`

export const UsdCurrencyBtn = styled.TouchableOpacity`
    width: 50px;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color: ${(props) => (props.value === "usd" ? '#232277' : '#11104D')};
`

export const BrlCurrencyBtn = styled.TouchableOpacity`
    width: 50px;
    align-items: center;
    justify-content: center;
    
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: ${(props) => (props.value === "brl" ? '#232277' : '#11104D')};
`

export const UsdText = styled.Text`
    color: white;
    font-weight: ${(props) => (props.value === 'usd' ? 'bold' : 'normal')};
`

export const BrlText = styled.Text`
    color: white;
    font-weight: ${(props) => (props.value === 'brl' ? 'bold' : 'normal')};
`

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`
// =================FlatList================== //

export const CriptoListItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    margin-bottom: 35px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LeftSideListItem = styled.View`
    flex-direction: column;
    align-items: flex-start;
`

export const RightSideListItem = styled.View`
    flex-direction: column;
    align-items: flex-end;
`

export const CriptoHighlight = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`

export const CriptoSymbol = styled.Text`
    font-size: 12px;
    color: white;
    text-transform: uppercase;
`

export const CriptoPercentage = styled.Text`
    font-size: 12px;
    color: ${(props) => (props.value < 0 ? '#FF3030' : '#0CFF6D')};
`

export const CriptoImage = styled.Image`
    background-color: #11104D;
    width: 40px;
    height: 40px;
    border-radius: 100px;
`