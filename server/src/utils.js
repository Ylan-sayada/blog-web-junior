let containString = (element) =>{
    return new RegExp(/[a-zA-Z]/g).test(element);
}
let  containsHeb= (str) =>  {
    return (/[\u0590-\u05FF]/).test(str);
}
exports.containString = containString;
exports.containsHeb = containsHeb