var Greeter = /** @class */ (function () {
    function Greeter(nameObj, skill) {
        if (skill === void 0) { skill = "programming"; }
        this.fullName = "";
        this.skills = [
            { name: "programming", point: 3 }
        ];
        this.fullName = nameObj.lastName + " " + nameObj.firstName;
        this.skill = skill;
    }
    Greeter.prototype.greet = function () {
        return "Hello, my name is " + this.fullName + ", and I love " + this.skill + ".";
    };
    return Greeter;
}());
var nameParam = { lastName: 'Cserkó', firstName: 'József', age: "33" };
var printGreeting = function (nameParam) {
    var g = new Greeter(nameParam, 'dancing');
    document.body.innerHTML = g.greet();
};
printGreeting(nameParam);
