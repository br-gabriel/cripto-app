import styled from "styled-components/native";

export const Filter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    width: 90%;
`
export const FilterButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})`
    background-color: #272657;
    padding: 4px 12px;
    border-radius: 50px;
`

export const FilterText = styled.Text`
    color: white;
    font-size: 16px;
`
