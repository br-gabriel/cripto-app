import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #05043D;
    padding-top: 32px;
`

export const Header = styled.View`
    width: 90%;
    align-items: flex-start;
    justify-content: center;

    margin-top: 16px;
    gap: 5px;
`

export const Title = styled.Text`
    font-size: 16px;
    color: white;
    font-weight: bold;
`

export const Price = styled.Text`
    font-size: 28px;
    color: white;
    font-weight: bold;
`

export const Percentage = styled.Text`
    font-size: 16px;
    color: ${(props) => (props.value < 0 ? '#FF3030' : '#0CFF6D')};
`