export default class formatMoney {

    // usar valueOff
    
    private static _language = "pt-br"
    private static _currency = "BRL"

    static format(num: number): string {
        return (num ?? 0).toLocaleString(formatMoney._language, {
            style: "currency", currency: formatMoney._currency
        }) 
    }
}