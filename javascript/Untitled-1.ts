
function square(number: number): number 
{
    return number * number;
}

function numberString(i: number): string | number {
    if (i < 0) 
    {
        return -1;
    } 
    else 
    {
        while (i > 0) 
        {
            console.log(i - 1);
             i--;
        }
    }
    return "";
}