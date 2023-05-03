export function currencyFormatter(currency, price) {
    const formatter = new Intl.NumberFormat(currency == 'usd' ? 'en-US' : 'pt-BR', {
        style: 'currency',
        currency: currency.toUpperCase(),
    })

    return formatter.format(price);
}