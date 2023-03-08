import { HeaderPrice, Price, PriceLabel } from "./styles";

export function CurrentPrice() {
    return (
        <HeaderPrice>
            <Price>US$ 54.356,44</Price>
            <PriceLabel>última cotação</PriceLabel>
        </HeaderPrice>
    )
}