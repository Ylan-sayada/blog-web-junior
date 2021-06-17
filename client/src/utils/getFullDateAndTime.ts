import minTwoDigits from './minTwoDigits';
let getFullDate = (date: Date): string => {

    let year = date.getFullYear();
    let month = minTwoDigits((date.getMonth() + 1));
    let day = minTwoDigits((date.getDate() + 1));
    return (`${year}/${month}/${day}`);
}
let getFullTime = (date: Date): string => {
    let second = minTwoDigits(date.getHours());
    let minute = minTwoDigits(date.getMinutes());
    let hour = minTwoDigits(date.getSeconds())

    return (`${second}:${minute}:${hour}`);
}
export { getFullDate, getFullTime };