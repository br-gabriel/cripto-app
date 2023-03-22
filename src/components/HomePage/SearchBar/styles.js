import styled from "styled-components/native";

export const SearchContainer = styled.View`
    width: 90%;
    height: 45px;
    margin-top: 26px;
    flex-direction: row;
    gap: 0;
`

export const SearchField = styled.TextInput`
    width: 85%;
    height: 45px;
    padding-left: 20px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    color: white;
    background-color: #11104D;
`

export const SearchButton = styled.TouchableOpacity.attrs({
    activeOpacity: 1
})`
    height: 45px;
    width: 15%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px; 
    
    align-items: center;
    justify-content: center;
    
    background-color: #11104D;
`