export default class formatDate {
    static ddmmyy = {
        format(date: Date, separator: string = "/"): string {
            const day = date.getDate().toString().padStart(2, "0")
            const month = (date.getMonth() + 1).toString().padStart(2, "0")
            return `${day}${separator}${month}${separator}${date.getFullYear()}` 
        }
    }

    static yymmdd = {
        format(date: Date, separator: string = "-"): string {
            const day = date.getDate().toString().padStart(2, "0")
            const month = (date.getMonth() + 1).toString().padStart(2, "0")
            return `${day}${separator}${month}${separator}${date.getFullYear()}` 
        }
    }
}