function square(n : number) : number {
    return n*n;
}


function numberString(i : number) : string {
    let res : string = ""; 
    for (let x = 1; x <= i; x++) res = res.concat(x.toString()); 
    return res; 
}