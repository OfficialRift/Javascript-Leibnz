let pi = 0;
let variabelpart = 0;

for (let i = 1; i < 100001; i++)
{
    variabelpart += (Math.pow(-1, i+1) / ((2 * i) - 1));
    pi = 4 * variabelpart;
    console.log("Pi: " + pi);
}