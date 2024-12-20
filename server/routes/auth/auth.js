"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bcrypt = require("bcrypt");
var jsonwebtoken = require("jsonwebtoken");
var dotenv = require("dotenv");
var util = require("util");
var authController_1 = require("./../../services/database/auth/authController");
var user_1 = require("../../services/database/user/user");
dotenv.config();
var jwt = {
    sign: util.promisify(jsonwebtoken.sign),
    verify: util.promisify(jsonwebtoken.verify),
};
var authRouter = (0, express_1.Router)();
authRouter.post("/register", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, repeatPassword, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, authController_1.register)(email, password, repeatPassword)];
            case 2:
                _b.sent();
                res.status(200).json({ success: "Registration successful" });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(err_1.status).json({ error: err_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
authRouter.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, isPasswordValid, jwtToken, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                console.log(email);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, (0, user_1.findUser)(email)];
            case 2:
                user = _b.sent();
                if (!user) {
                    throw new Error("Invalid Email");
                }
                return [4 /*yield*/, bcrypt.compare(password, user.password)];
            case 3:
                isPasswordValid = _b.sent();
                if (!isPasswordValid) {
                    throw new Error("Invalid Password");
                }
                return [4 /*yield*/, jwt.sign({ email: email }, process.env.JWT_SECRET, {
                        expiresIn: "1h",
                    })];
            case 4:
                jwtToken = _b.sent();
                res.status(200).json({ jwtToken: jwtToken });
                return [3 /*break*/, 6];
            case 5:
                err_2 = _b.sent();
                res.status(400).json({ error: err_2.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = authRouter;
