// printnumbers function is given a name
function printnumbers ()
// the printout starts at 1, checks that the next result is not greater than 100, and then adds 1 to the previous value)
{
    for (i=1; i<=100; i++)
    {
        // so, if both (3 and 5) divide exactly into 'i', then show 'fizzbuzz'
        if ((i%3 == 0) && (i%5==0)){
            console.log("fizzbuzz");
        } 
        // or, if the % of the value of 'i'/5 = 0, show 'buzz'
        else if (i%5 == 0){
            console.log("buzz");
        }
        //or, if the % of the value of 'i'/3 = 0, show 'fizz'//
        else if (i%3 == 0)
        {
            console.log("fizz")
        }
            //otherwise, print the value of 'i'
        else 
        {
            console.log(i)
        }
    };
}
//you must call the function to make it work.
printnumbers()
