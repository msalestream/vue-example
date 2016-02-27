define(function() {
    String.prototype.trimChar = function(character) {
        var str = this;

        if(character) {
            if (str.substr(0, 1) === character) {
                str = str.substring(1);
            }

            var len = str.length;
            if (str.substr(len-1, 1) === character) {
                str = str.substring(0, len-1);
            }

            return str;
        } else {
            console.error("Invalid character supplied for trimChar");
        }
    };
});
