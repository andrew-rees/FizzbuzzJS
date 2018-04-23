// printnumbers function is given a name
function printnumbers ()
// the printout starts at 1, checks that the next result is not greater than 100, and then adds 1 to the previous value)
{
    for (i=1; i<=200; i++)
    {
        //if 11, show bong
        if (i%11 == 0){
            console.log("bong")
        }
        //if 3, 5 and 7, show fizzbuzzbang
        else if ((i%3 == 0) && (i%5 == 0) && (i%7 == 0)){
            console.log("fizzbuzzbang")
        }
        //if 3 and 7, show fizzbang
        else if ((i%3 == 0) && (i%7==0)){
            console.log("fizzbang")
        }
        //if 5 and 7, show buzzbang
        else if ((i%5 == 0) && (i%7==0)){
            console.log("buzzbang");
        }
        //if 3 and 5, show fizzbuzz
        else if ((i%3 == 0) && (i%5==0)){
            console.log("fizzbuzz");
        } 
        // or, if the % of the value of 'i'/5 = 0, show 'buzz'
        else if (i%5 == 0){
            console.log("buzz");
        }
        //or, if the % of the value of 'i'/3 = 0, show 'fizz'
        else if (i%3 == 0){
            console.log("fizz")
        }
        //or, if the % of the value of 'i'/7 = 0, show 'bang'
        else if (i%7 == 0){
            console.log("bang")
        }
        //otherwise, print the value of 'i'
        else 
        {
            console.log(i)
        }
    };
}
//you must then call the function to make it start displaying numbers
printnumbers()