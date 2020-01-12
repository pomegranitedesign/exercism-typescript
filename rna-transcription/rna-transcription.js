"use strict";
exports.__esModule = true;
var Transcriptor = /** @class */ (function () {
    function Transcriptor() {
    }
    Transcriptor.prototype.toRna = function (dna) {
        var dnaLength = dna.length;
        // For a single DNA passed
        if (dnaLength === 1) {
            return this.checkAndReplace(dna);
        }
        else if (dnaLength > 1) {
            var splitted = dna.split("");
            var output = [];
            for (var _i = 0, splitted_1 = splitted; _i < splitted_1.length; _i++) {
                var char = splitted_1[_i];
                output.push(this.checkAndReplace(dna));
            }
            return output.join("");
        }
    };
    Transcriptor.prototype.checkAndReplace = function (dna) {
        switch (dna) {
            case "C":
                return "G";
            case "G":
                return "C";
            case "T":
                return "A";
            case "A":
                return "U";
        }
    };
    return Transcriptor;
}());
var test = new Transcriptor();
test.toRna("ACGTGGTCTTAA");
exports["default"] = Transcriptor;
