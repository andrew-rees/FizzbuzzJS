// printnumbers function is given a name
function printnumbers ()
// the printout starts at 1, checks that the next result is not greater than 100, and then adds 1 to the previous value)
{
    for (i=1; i<=300; i++)
    {
        //defines the variable output as an array [], but doesn't fill it with values, as we are going to look for the values in the bleow if statements.
        var output = [];
        
        //if i/3 has no remainder, the method .push of the array variable 'output' returns the text
        if (i%3 == 0){
            output.push ("fizz");
        }
        //if i/13 has no remainder, the method .push of the array variable 'output' returns the text. This is here so it returns in front of the 'b' words.
        if (i%13 == 0){
            output.push ("fezz");
        }
        //if i/5 has no remainder, the method .push of the array variable 'output' returns the text
        if (i%5 == 0){
            output.push ("buzz");
        }
        //if i/7 has no remainder, the method .push of the array variable 'output' returns the text
        if (i%7 == 0){
            output.push ("bang");
        }
        //if i/9 has no remainder, the method .push of the array variable 'output' returns the text
        if (i%11 == 0){
            output.push ("bong");
        }
        //if i/17 has no remainder, flip the output round.
        if (i%17 == 0){
            output.reverse();
        }
        //if the length of the output is 0, because none of the above apply, just show the number (and since it is undefined by default, this will be the casefor a number that doesn't divide by other numbers)
        if (output.length == 0){
            output.push (i);
        }
        //output to the console, which naturally includes the [] of the array/list
        console.log(output.join(""));
    };
}
//you must then call the function to make it start displaying numbers
printnumbers()