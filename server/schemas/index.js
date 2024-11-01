"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = exports.UserModel = void 0;
var userSchema_1 = require("./User/userSchema");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return userSchema_1.default; } });
var chatSchema_1 = require("./Chat/chatSchema");
Object.defineProperty(exports, "ChatModel", { enumerable: true, get: function () { return chatSchema_1.default; } });
