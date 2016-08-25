# Brainfuck Interpreter

This is my interpreter for the  [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) language. 

The interpreter is written in Javascript and can be used practically everywhere. 
I've created two examples for the use in NodeJS and on a regular webpage.

## Usage 

Run hello world instructions with nodejs:

```
node index.js hello
```

To use interpreter on the webpage you have to open the index.html file in your browser. You can then paste in the code you want to run.


## About Brainfuck

Brainfuck is an esoteric programming language created in 1993 by Urban Müller, and notable for its extreme minimalism.

The language consists of only eight simple commands and an instruction pointer. While it is fully Turing-complete, it is not intended for practical use, but to challenge and amuse programmers.

The language's name is a reference to the slang term brainfuck, which refers to things so complicated or unusual that they exceed the limits of one's understanding.

|Character|Meaning|
|---|---|
|\>|increment the data pointer (to point to the next cell to the right). |
|<|decrement the data pointer (to point to the next cell to the left).|
|+|increment (increase by one) the byte at the data pointer.|
|-|decrement (decrease by one) the byte at the data pointer.|
|.|output the byte at the data pointer.|
|,|accept one byte of input, storing its value in the byte at the data pointer.|
|\[|if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.|
|]|if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.|
Brainfuck. (2016, July 31). In Wikipedia, The Free Encyclopedia. Retrieved 07:25, August 11, 2016, from https://en.wikipedia.org/w/index.php?title=Brainfuck&oldid=732419782

