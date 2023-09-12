var myFunc = new Function("", 'console.log("hello")');
myFunc.call();

/*
I dont completely understand the logic behind this. But what I THINK is
that it creates and anonymous function firstly. Then I would guess that
the "" part in the brackets declares that it takes in string and reads it
as regular code? The second part starts in '' because the console.log contains
"" symbols so that is just a way for the code to undestand the text doesnt end.
Then it proceeds to read it regularly. I couldnt find anything specific on this
so this is just a guess.
*/
