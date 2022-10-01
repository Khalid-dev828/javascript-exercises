const reverseString = function(string) {

    str = string.split("");
        revStr = str.reverse();
        res = revStr.join("");
        return res;
};

// Do not edit below this line
module.exports = reverseString;
