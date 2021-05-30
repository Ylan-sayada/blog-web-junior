export default function containsHeb(str:string) {
    return (/[\u0590-\u05FF]/).test(str);
}

