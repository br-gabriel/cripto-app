import { useEffect, useState } from "react";
import { HeaderPrice, CriptoName, Price, PriceLabel } from "./styles";
import { api } from "../../services/api";

export function CurrentPrice() {
    return (
        <HeaderPrice>
            <CriptoName>teste</CriptoName>
            <Price>teste</Price>
            <PriceLabel>teste</PriceLabel>
        </HeaderPrice>
    )
}