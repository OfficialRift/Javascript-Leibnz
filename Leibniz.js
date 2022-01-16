let pi = 0;

for (let i = 0; i < 100000; i++)
{
    let variabelpart = 0;
    for(let j =1 ; j <= i; j++)
    {
        variabelpart += (Math.pow(-1, j+1) / ((2 * j) - 1));
    }

    pi = 4 * variabelpart;
    console.log("Pi: " + pi);
}