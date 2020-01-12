"use strict";
exports.__esModule = true;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        var _this = this;
        this.colors = [];
        this.value = function () {
            var allColors = [
                "Black",
                "Brown",
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue",
                "Violet",
                "Grey",
                "White"
            ];
            var indexes = [];
            var _loop_1 = function (i) {
                var index = allColors.findIndex(function (color) { return color === _this.colors[i]; });
                indexes.push(index);
            };
            for (var i = 0; i < _this.colors.length; i++) {
                _loop_1(i);
            }
            return parseInt(indexes.join(""));
        };
        this.colors = colors;
    }
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
var myResistorColor = new ResistorColor(["brown", "black"]);
myResistorColor.value();
