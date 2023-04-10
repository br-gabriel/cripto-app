import styled from "styled-components/native";

export const Filter = styled.View`
    width: 90%;
    margin-top: 15px;
    margin-bottom: 40px;
    padding-left: 5px;
    padding-right: 5px;
    
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonFilter = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 25px;

    border-radius: 5px;
`

export const SelectedFilter = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    color: white;
    background-color: red;
    padding: 5px;
    border-radius: 10px;

    width: 30px;
    height: 30px;
`

export const FilterText = styled.Text`
    color: white;
    font-weight: normal;
    font-size: 14px;
`
