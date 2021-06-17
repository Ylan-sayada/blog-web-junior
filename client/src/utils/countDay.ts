export default function countDay(dateStart:Date,dateEnd?:Date){
    let res = typeof(dateEnd) != 'undefined' ?dateEnd.getTime() - dateStart.getTime() : Date.now() - dateStart.getTime();
    res = (res / (1000*60*60*24));
    return Math.floor(res);
}