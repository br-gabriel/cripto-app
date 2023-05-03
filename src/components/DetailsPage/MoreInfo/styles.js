import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
`

export const Title = styled.Text`
    font-weight: bold;
    color: white;
    font-size: 24px;
    margin-bottom: 12px;
`

export const InfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    padding-top: 12px;
    padding-bottom: 12px;
`

export const InfoTitle = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`

export const Info = styled.Text`
    color: white;
`

export const Percentage = styled.Text`
    color: ${(props) => (props.value < 0 ? '#FF3030' : '#0CFF6D')};
`