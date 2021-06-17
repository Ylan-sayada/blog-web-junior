export default function isEmail(str:string){
    //eslint-disable-next-line
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(str);
}