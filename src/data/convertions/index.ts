export const addDotsToValue = (value: number) => value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

export const addressToChunks = (address: string, length: number): string[] | null => {
    return address.match(new RegExp('.{1,' + length + '}', 'g'))
}
