let checkObjectBoolValue = (object: { [index: string]: boolean }, expectedValue: boolean): boolean => {
    let res = true;
    for (let key in object) {
        if (object[key] !== expectedValue) {
            res = false;
            break;
        }
    }
    return res
}
export default checkObjectBoolValue;
