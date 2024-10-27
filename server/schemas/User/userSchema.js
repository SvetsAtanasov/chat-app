"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt = require("bcrypt");
var userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});
userSchema.pre("save", function (next) {
    var _this = this;
    bcrypt.hash(this.password, 10).then(function (hash) {
        _this.password = hash;
        next();
    });
});
var UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
