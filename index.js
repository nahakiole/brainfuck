var Interpreter = require('./Interpreter.js').Interpreter;

var fs = require('fs');
var contents = fs.readFileSync(process.argv[2], 'utf8');

var interpreter = new Interpreter({
    write: function (char) {
        process.stdout.write(char);
    }
}, {
    read: function () {
        var buffer = new Buffer(1);
        fs.readSync(process.stdin.fd, buffer, 0, 1);
        return buffer[0];
    }
});

interpreter.interpret(contents);
