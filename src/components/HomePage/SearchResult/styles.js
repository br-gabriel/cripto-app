import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    margin-top: 36px;
`

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
`

export const CriptoListItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    margin-bottom: 35px;
    flex-direction: row;
    gap: 16px;
    align-items: center;
`

export const CriptoName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`

export const CriptoSymbol = styled.Text`
    font-size: 12px;
    color: white;
    text-transform: uppercase;
`

export const CriptoImage = styled.Image`
    background-color: #11104D;
    width: 40px;
    height: 40px;
    border-radius: 100px;
`