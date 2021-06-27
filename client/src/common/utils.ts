export let checkObjectBoolValue = (object: { [index: string]: boolean }, expectedValue: boolean): boolean => {
    let res = false;
    for (let key in object) {
        if (object[key] !== expectedValue) {
            res = true;
            break;
        }
    }
    return res;
}

type operator = 'greater' | 'lesser' | 'equal';
export let checkStringSize = (string: string, length: number, operator: operator, equal?: boolean): boolean => {
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
export let countDay = (dateStart: Date, dateEnd?: Date): number => {
    let res = typeof (dateEnd) != 'undefined' ? dateEnd.getTime() - dateStart.getTime() : Date.now() - dateStart.getTime();
    res = (res / (1000 * 60 * 60 * 24));
    return Math.floor(res);
}

export let minTwoDigits = (num: number): string => {
    return (num < 10 ? '0' : '') + num;
}

export let getFullDate = (date: Date): string => {

    let year = date.getFullYear();
    let month = minTwoDigits((date.getMonth() + 1));
    let day = minTwoDigits((date.getDate() + 1));
    return (`${year}/${month}/${day}`);
}

export let getFullTime = (date: Date): string => {
    let second = minTwoDigits(date.getHours());
    let minute = minTwoDigits(date.getMinutes());
    let hour = minTwoDigits(date.getSeconds())

    return (`${second}:${minute}:${hour}`);
}
export let getRect = (el: HTMLElement): DOMRect => {
    return el.getBoundingClientRect();

}
export let isMobile = (): boolean => {
    return window.innerWidth <= 720;
}
export let isEmail = (str: string): boolean => {
    //eslint-disable-next-line
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(str);
}
export let isExternal = (link: string): boolean => {
    return link.split('/')[0] === ("https:" || "http:");
}
export let containsHeb = (str: string): boolean => {
    return (/[\u0590-\u05FF]/).test(str);
}
export let isUndefined = (element: any): boolean => {
    return typeof element === 'undefined';
}
