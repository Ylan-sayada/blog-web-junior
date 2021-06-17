type operator = 'greater' | 'lesser' | 'equal';
let checkStringSize = (string: string, length: number, operator: operator, equal?: boolean): boolean => {
    let res = (() => {
        switch (operator) {
            case 'greater':
                return equal ? string.length >= length : string.length > length;
            case 'lesser':
                return equal ? string.length <= length : string.length < length;
            default:
                return string.length === length;
        };
    })();
    return res;
}
export default checkStringSize;