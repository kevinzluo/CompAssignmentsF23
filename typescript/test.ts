function square(n: number): number {
    return n*n;
}


function numberString(i: number): string {
    let s: string = "";
    if (i<=0){
        return "-1";
    } else{
        for (let j =1; j<=i; j++){
            s += j;
        }
    }
    return s; 
}