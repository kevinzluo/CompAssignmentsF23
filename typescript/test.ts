function square(n: number):number {
    return n*n;
}


function numberString(i: number):string {
    let string: string = "";
    for (let j: number = 0; j < i; j++) {
        string += j + 1;
    }
            return string; 
}