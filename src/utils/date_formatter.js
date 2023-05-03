export function dateFormatter(currency, date) {    
    const formattedDate = date.toLocaleDateString(currency === 'usd' ? 'en-US' : 'pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric'
    })

    return formattedDate;
}