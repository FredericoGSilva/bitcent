export default class formatDate {
    static ddmmyy = {
        format(date: Date, separator: string = "/"): string {
            return `${date.getDate()}${separator}${date.getMonth() + 1}${separator}${date.getFullYear()}`
        }
    }
}