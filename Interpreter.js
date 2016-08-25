function Interpreter(stdout, stdin) {
    this.stdout = stdout;
    this.stdin = stdin;
}

Interpreter.prototype.interpret = function (code) {
    this.cells = new Array(30000).fill(0);
    this.ptr = 0;
    this.pos = 0;
    this.code = code.replace(/[^><\+\-\.,\[\]]/g, '');
    var that = this;
    while (that.pos != that.code.length) {
        switch (that.code[that.pos]) {
            case '+':
                that.cells[that.ptr]++;
                that.pos++;
                break;
            case '-':
                that.cells[that.ptr]--;
                that.pos++;
                break;
            case '>':
                that.ptr++;
                that.pos++;
                break;
            case '<':
                that.ptr--;
                that.pos++;
                break;
            case ']':
                if (that.cells[that.ptr] <= 0) {
                    that.pos++;
                }
                else {
                    var pos = that.pos;
                    var count = 1;
                    do {
                        pos--;
                        while (that.code[pos] !== '[') {
                            if (that.code[pos] == ']') {
                                count++;
                            }
                            pos--
                        }
                        count--;
                    }
                    while (count !== 0);
                    that.pos = pos;
                }
                break;
            case '[':
                if (that.cells[that.ptr] == 0) {
                    pos = that.pos;
                    count = 1;
                    do {
                        pos++;
                        while (that.code[pos] !== ']') {
                            if (that.code[pos] == '[') {
                                count++;
                            }
                            pos++
                        }
                        count--;
                    }
                    while (count !== 0);
                    that.pos = pos;
                }
                else {
                    that.pos++;
                }
                break;
            case '.':
                that.stdout.write(String.fromCharCode(that.cells[that.ptr]));
                that.pos++;
                break;
            case ',':
                that.cells[that.ptr] = that.stdin.read().charCodeAt(0);
                that.pos++;
                break;
        }
    }
};

if (typeof exports !== 'undefined') {
    exports.Interpreter = Interpreter;
}


