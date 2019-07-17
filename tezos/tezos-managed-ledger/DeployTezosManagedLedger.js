"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var conseiljs_1 = require("conseiljs");
function deployContract(opArgs) {
    return __awaiter(this, void 0, void 0, function () {
        var michelson, michelson_storage, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    michelson = "\n    parameter\n   (or (pair address (pair address nat))\n      (or (pair address nat)\n         (or (pair\n               (pair address address)\n               (contract nat))\n            (or (pair address (contract nat))\n                  (or (pair unit (contract nat))\n                     (or bool\n                        (or address\n                              (or (pair unit (contract address))\n                                 (or (pair address nat)\n                                    (pair address nat))))))))));\n   storage\n   (pair (map address (pair nat (map address nat))) (pair address (pair bool nat)));\n   code { DUP ;\n      CAR ;\n      DIP { CDR } ;\n      IF_LEFT\n         { DIP { DUP ;\n               CDR ;\n               CDR ;\n               CAR ;\n               IF { PUSH (pair string unit) (Pair \"OperationsArePaused\" Unit) ; FAILWITH } {} } ;\n         DUP ;\n         CDR ;\n         CAR ;\n         DIP { DUP ; CAR } ;\n         CAST address ;\n         COMPARE ;\n         EQ ;\n         IF { DROP }\n            { DUP ;\n               CAR ;\n               DIP { DIP { DUP } ; SWAP } ;\n               SENDER ;\n               COMPARE ;\n               EQ ;\n               IF { DROP ; PUSH bool False } { CDR ; CAR ; SENDER ; COMPARE ; NEQ } ;\n               IF { DUP ;\n                     DIP { DUP ;\n                           DIP { DIP { DUP } ;\n                                 CAR ;\n                                 SENDER ;\n                                 PAIR ;\n                                 DUP ;\n                                 DIP { CDR ;\n                                       DIP { CAR } ;\n                                       GET ;\n                                       IF_NONE { EMPTY_MAP address nat } { CDR } } ;\n                                 CAR ;\n                                 GET ;\n                                 IF_NONE { PUSH nat 0 } {} } ;\n                           DUP ;\n                           CAR ;\n                           DIP { SENDER ;\n                                 DIP { DUP ;\n                                       CDR ;\n                                       CDR ;\n                                       DIP { DIP { DUP } ; SWAP } ;\n                                       SWAP ;\n                                       SUB ;\n                                       ISNAT ;\n                                       IF_NONE\n                                       { DIP { DUP } ;\n                                          SWAP ;\n                                          DIP { DUP } ;\n                                          SWAP ;\n                                          CDR ;\n                                          CDR ;\n                                          PAIR ;\n                                          PUSH string \"NotEnoughAllowance\" ;\n                                          PAIR ;\n                                          FAILWITH }\n                                       {} } ;\n                                 PAIR } ;\n                           PAIR ;\n                           DIP { DROP ; DROP } ;\n                           DIP { DUP ; CAR } ;\n                           SWAP ;\n                           DIP { DUP ; CAR } ;\n                           SWAP ;\n                           GET ;\n                           IF_NONE\n                           { PUSH nat 0 ;\n                              DIP { EMPTY_MAP address nat } ;\n                              PAIR ;\n                              EMPTY_MAP address nat }\n                           { DUP ; CDR } ;\n                           DIP { DIP { DUP } ; SWAP } ;\n                           SWAP ;\n                           CDR ;\n                           CDR ;\n                           DUP ;\n                           INT ;\n                           EQ ;\n                           IF { DROP ; NONE nat } { SOME } ;\n                           DIP { DIP { DIP { DUP } ; SWAP } ; SWAP } ;\n                           SWAP ;\n                           CDR ;\n                           CAR ;\n                           UPDATE ;\n                           DIP { DUP ; DIP { CAR } ; CDR } ;\n                           DIP { DROP } ;\n                           SWAP ;\n                           PAIR ;\n                           SOME ;\n                           SWAP ;\n                           CAR ;\n                           DIP { DIP { DUP ; CAR } } ;\n                           UPDATE ;\n                           DIP { DUP ; DIP { CDR } ; CAR } ;\n                           DIP { DROP } ;\n                           PAIR } }\n                  {} ;\n               DIP { DUP } ;\n               SWAP ;\n               CAR ;\n               DIP { DUP } ;\n               SWAP ;\n               CDR ;\n               CAR ;\n               GET ;\n               IF_NONE\n                  { DUP ;\n                  CDR ;\n                  CDR ;\n                  INT ;\n                  EQ ;\n                  IF { NONE (pair nat (map address nat)) }\n                     { DUP ; CDR ; CDR ; DIP { EMPTY_MAP address nat } ; PAIR ; SOME } }\n                  { DIP { DUP } ;\n                  SWAP ;\n                  CDR ;\n                  CDR ;\n                  DIP { DUP ; CAR } ;\n                  ADD ;\n                  DIP { DUP ; DIP { CDR } ; CAR } ;\n                  DIP { DROP } ;\n                  PAIR ;\n                  SOME } ;\n               SWAP ;\n               DIP { DIP { DUP ; CAR } } ;\n               DUP ;\n               DIP { CDR ;\n                     CAR ;\n                     UPDATE ;\n                     DIP { DUP ; DIP { CDR } ; CAR } ;\n                     DIP { DROP } ;\n                     PAIR } ;\n               DUP ;\n               DIP { CDR ;\n                     CDR ;\n                     INT ;\n                     DIP { DUP ; CDR ; DUP ; CDR ; CDR } ;\n                     ADD ;\n                     ISNAT ;\n                     IF_NONE\n                        { PUSH string\n                              \"Unexpected failure: Negative total supply\" ;\n                        FAILWITH }\n                        {} ;\n                     DIP { DUP ; DIP { CAR } ; CDR } ;\n                     DIP { DUP ; DIP { CAR } ; CDR } ;\n                     DIP { DROP } ;\n                     SWAP ;\n                     PAIR ;\n                     SWAP ;\n                     PAIR ;\n                     DIP { DUP ; DIP { CAR } ; CDR } ;\n                     DIP { DROP } ;\n                     SWAP ;\n                     PAIR } ;\n               DIP { DUP } ;\n               SWAP ;\n               CAR ;\n               DIP { DUP } ;\n               SWAP ;\n               CAR ;\n               GET ;\n               IF_NONE\n                  { CDR ;\n                  CDR ;\n                  PUSH nat 0 ;\n                  SWAP ;\n                  PAIR ;\n                  PUSH string \"NotEnoughBalance\" ;\n                  PAIR ;\n                  FAILWITH }\n                  {} ;\n               DUP ;\n               CAR ;\n               DIP { DIP { DUP } ; SWAP } ;\n               SWAP ;\n               CDR ;\n               CDR ;\n               SWAP ;\n               SUB ;\n               ISNAT ;\n               IF_NONE\n                  { CAR ;\n                  DIP { DUP } ;\n                  SWAP ;\n                  CDR ;\n                  CDR ;\n                  PAIR ;\n                  PUSH string \"NotEnoughBalance\" ;\n                  PAIR ;\n                  FAILWITH }\n                  {} ;\n               DIP { DUP ; DIP { CDR } ; CAR } ;\n               DIP { DROP } ;\n               PAIR ;\n               DIP { DUP } ;\n               SWAP ;\n               DIP { DUP ;\n                     CAR ;\n                     INT ;\n                     EQ ;\n                     IF { DUP ;\n                           CDR ;\n                           SIZE ;\n                           INT ;\n                           EQ ;\n                           IF { DROP ; NONE (pair nat (map address nat)) } { SOME } }\n                        { SOME } ;\n                     SWAP ;\n                     CAR ;\n                     DIP { DIP { DUP ; CAR } } ;\n                     UPDATE ;\n                     DIP { DUP ; DIP { CDR } ; CAR } ;\n                     DIP { DROP } ;\n                     PAIR } ;\n               DUP ;\n               DIP { CDR ;\n                     CDR ;\n                     NEG ;\n                     DIP { DUP ; CDR ; DUP ; CDR ; CDR } ;\n                     ADD ;\n                     ISNAT ;\n                     IF_NONE\n                        { PUSH string\n                              \"Unexpected failure: Negative total supply\" ;\n                        FAILWITH }\n                        {} ;\n                     DIP { DUP ; DIP { CAR } ; CDR } ;\n                     DIP { DUP ; DIP { CAR } ; CDR } ;\n                     DIP { DROP } ;\n                     SWAP ;\n                     PAIR ;\n                     SWAP ;\n                     PAIR ;\n                     DIP { DUP ; DIP { CAR } ; CDR } ;\n                     DIP { DROP } ;\n                     SWAP ;\n                     PAIR } ;\n               DROP } ;\n         NIL operation ;\n         PAIR }\n         { IF_LEFT\n            { DIP { DUP ;\n                     CDR ;\n                     CDR ;\n                     CAR ;\n                     IF { PUSH (pair string unit) (Pair \"OperationsArePaused\" Unit) ; FAILWITH } {} } ;\n               SENDER ;\n               PAIR ;\n               DIP { DUP } ;\n               SWAP ;\n               DIP { DUP } ;\n               SWAP ;\n               DUP ;\n               DIP { CAR ;\n                     DIP { CAR } ;\n                     GET ;\n                     IF_NONE { EMPTY_MAP address nat } { CDR } } ;\n               CDR ;\n               CAR ;\n               GET ;\n               IF_NONE { PUSH nat 0 } {} ;\n               DUP ;\n               INT ;\n               EQ ;\n               IF { DROP }\n                  { DIP { DUP } ;\n                  SWAP ;\n                  CDR ;\n                  CDR ;\n                  INT ;\n                  EQ ;\n                  IF { DROP } { PUSH string \"UnsafeAllowanceChange\" ; PAIR ; FAILWITH } } ;\n               DIP { DUP ; CAR } ;\n               SWAP ;\n               DIP { DUP ; CAR } ;\n               SWAP ;\n               GET ;\n               IF_NONE\n               { PUSH nat 0 ;\n                  DIP { EMPTY_MAP address nat } ;\n                  PAIR ;\n                  EMPTY_MAP address nat }\n               { DUP ; CDR } ;\n               DIP { DIP { DUP } ; SWAP } ;\n               SWAP ;\n               CDR ;\n               CDR ;\n               DUP ;\n               INT ;\n               EQ ;\n               IF { DROP ; NONE nat } { SOME } ;\n               DIP { DIP { DIP { DUP } ; SWAP } ; SWAP } ;\n               SWAP ;\n               CDR ;\n               CAR ;\n               UPDATE ;\n               DIP { DUP ; DIP { CAR } ; CDR } ;\n               DIP { DROP } ;\n               SWAP ;\n               PAIR ;\n               SOME ;\n               SWAP ;\n               CAR ;\n               DIP { DIP { DUP ; CAR } } ;\n               UPDATE ;\n               DIP { DUP ; DIP { CDR } ; CAR } ;\n               DIP { DROP } ;\n               PAIR ;\n               NIL operation ;\n               PAIR }\n            { IF_LEFT\n               { DUP ;\n                  CAR ;\n                  DIP { CDR } ;\n                  DIP { DIP { DUP } ; SWAP } ;\n                  PAIR ;\n                  DUP ;\n                  CAR ;\n                  DIP { CDR } ;\n                  DUP ;\n                  DIP { CAR ;\n                        DIP { CAR } ;\n                        GET ;\n                        IF_NONE { EMPTY_MAP address nat } { CDR } } ;\n                  CDR ;\n                  GET ;\n                  IF_NONE { PUSH nat 0 } {} ;\n                  DIP { AMOUNT } ;\n                  TRANSFER_TOKENS ;\n                  NIL operation ;\n                  SWAP ;\n                  CONS ;\n                  PAIR }\n               { IF_LEFT\n                     { DUP ;\n                     CAR ;\n                     DIP { CDR } ;\n                     DIP { DIP { DUP } ; SWAP } ;\n                     PAIR ;\n                     DUP ;\n                     CAR ;\n                     DIP { CDR } ;\n                     DIP { CAR } ;\n                     GET ;\n                     IF_NONE { PUSH nat 0 } { CAR } ;\n                     DIP { AMOUNT } ;\n                     TRANSFER_TOKENS ;\n                     NIL operation ;\n                     SWAP ;\n                     CONS ;\n                     PAIR }\n                     { IF_LEFT\n                        { DUP ;\n                           CAR ;\n                           DIP { CDR } ;\n                           DIP { DIP { DUP } ; SWAP } ;\n                           PAIR ;\n                           CDR ;\n                           CDR ;\n                           CDR ;\n                           CDR ;\n                           DIP { AMOUNT } ;\n                           TRANSFER_TOKENS ;\n                           NIL operation ;\n                           SWAP ;\n                           CONS ;\n                           PAIR }\n                        { IF_LEFT\n                           { DIP { DUP ;\n                                    CDR ;\n                                    CAR ;\n                                    SENDER ;\n                                    COMPARE ;\n                                    EQ ;\n                                    IF {} { PUSH (pair string unit) (Pair \"SenderIsNotAdmin\" Unit) ; FAILWITH } } ;\n                              DIP { DUP ; CDR } ;\n                              DIP { DUP ; DIP { CAR } ; CDR } ;\n                              DIP { DUP ; DIP { CDR } ; CAR } ;\n                              DIP { DROP } ;\n                              PAIR ;\n                              SWAP ;\n                              PAIR ;\n                              DIP { DUP ; DIP { CAR } ; CDR } ;\n                              DIP { DROP } ;\n                              SWAP ;\n                              PAIR ;\n                              NIL operation ;\n                              PAIR }\n                           { IF_LEFT\n                                 { DIP { DUP ;\n                                       CDR ;\n                                       CAR ;\n                                       SENDER ;\n                                       COMPARE ;\n                                       EQ ;\n                                       IF {} { PUSH (pair string unit) (Pair \"SenderIsNotAdmin\" Unit) ; FAILWITH } } ;\n                                 DIP { DUP ; CDR } ;\n                                 DIP { DUP ; DIP { CDR } ; CAR } ;\n                                 DIP { DROP } ;\n                                 PAIR ;\n                                 DIP { DUP ; DIP { CAR } ; CDR } ;\n                                 DIP { DROP } ;\n                                 SWAP ;\n                                 PAIR ;\n                                 NIL operation ;\n                                 PAIR }\n                                 { IF_LEFT\n                                    { DUP ;\n                                       CAR ;\n                                       DIP { CDR } ;\n                                       DIP { DIP { DUP } ; SWAP } ;\n                                       PAIR ;\n                                       CDR ;\n                                       CDR ;\n                                       CAR ;\n                                       DIP { AMOUNT } ;\n                                       TRANSFER_TOKENS ;\n                                       NIL operation ;\n                                       SWAP ;\n                                       CONS ;\n                                       PAIR }\n                                    { IF_LEFT\n                                       { DIP { DUP ;\n                                                CDR ;\n                                                CAR ;\n                                                SENDER ;\n                                                COMPARE ;\n                                                EQ ;\n                                                IF {} { PUSH (pair string unit) (Pair \"SenderIsNotAdmin\" Unit) ; FAILWITH } } ;\n                                          DIP { DUP } ;\n                                          SWAP ;\n                                          CAR ;\n                                          DIP { DUP } ;\n                                          SWAP ;\n                                          CAR ;\n                                          GET ;\n                                          IF_NONE\n                                             { DUP ;\n                                             CDR ;\n                                             INT ;\n                                             EQ ;\n                                             IF { NONE (pair nat (map address nat)) }\n                                                { DUP ; CDR ; DIP { EMPTY_MAP address nat } ; PAIR ; SOME } }\n                                             { DIP { DUP } ;\n                                             SWAP ;\n                                             CDR ;\n                                             DIP { DUP ; CAR } ;\n                                             ADD ;\n                                             DIP { DUP ; DIP { CDR } ; CAR } ;\n                                             DIP { DROP } ;\n                                             PAIR ;\n                                             SOME } ;\n                                          SWAP ;\n                                          DIP { DIP { DUP ; CAR } } ;\n                                          DUP ;\n                                          DIP { CAR ;\n                                                UPDATE ;\n                                                DIP { DUP ; DIP { CDR } ; CAR } ;\n                                                DIP { DROP } ;\n                                                PAIR } ;\n                                          DUP ;\n                                          DIP { CDR ;\n                                                INT ;\n                                                DIP { DUP ; CDR ; DUP ; CDR ; CDR } ;\n                                                ADD ;\n                                                ISNAT ;\n                                                IF_NONE\n                                                   { PUSH string\n                                                         \"Unexpected failure: Negative total supply\" ;\n                                                   FAILWITH }\n                                                   {} ;\n                                                DIP { DUP ; DIP { CAR } ; CDR } ;\n                                                DIP { DUP ; DIP { CAR } ; CDR } ;\n                                                DIP { DROP } ;\n                                                SWAP ;\n                                                PAIR ;\n                                                SWAP ;\n                                                PAIR ;\n                                                DIP { DUP ; DIP { CAR } ; CDR } ;\n                                                DIP { DROP } ;\n                                                SWAP ;\n                                                PAIR } ;\n                                          DROP ;\n                                          NIL operation ;\n                                          PAIR }\n                                       { DIP { DUP ;\n                                                CDR ;\n                                                CAR ;\n                                                SENDER ;\n                                                COMPARE ;\n                                                EQ ;\n                                                IF {} { PUSH (pair string unit) (Pair \"SenderIsNotAdmin\" Unit) ; FAILWITH } } ;\n                                          DIP { DUP } ;\n                                          SWAP ;\n                                          CAR ;\n                                          DIP { DUP } ;\n                                          SWAP ;\n                                          CAR ;\n                                          GET ;\n                                          IF_NONE\n                                             { CDR ;\n                                             PUSH nat 0 ;\n                                             SWAP ;\n                                             PAIR ;\n                                             PUSH string \"NotEnoughBalance\" ;\n                                             PAIR ;\n                                             FAILWITH }\n                                             {} ;\n                                          DUP ;\n                                          CAR ;\n                                          DIP { DIP { DUP } ; SWAP } ;\n                                          SWAP ;\n                                          CDR ;\n                                          SWAP ;\n                                          SUB ;\n                                          ISNAT ;\n                                          IF_NONE\n                                             { CAR ;\n                                             DIP { DUP } ;\n                                             SWAP ;\n                                             CDR ;\n                                             PAIR ;\n                                             PUSH string \"NotEnoughBalance\" ;\n                                             PAIR ;\n                                             FAILWITH }\n                                             {} ;\n                                          DIP { DUP ; DIP { CDR } ; CAR } ;\n                                          DIP { DROP } ;\n                                          PAIR ;\n                                          DIP { DUP } ;\n                                          SWAP ;\n                                          DIP { DUP ;\n                                                CAR ;\n                                                INT ;\n                                                EQ ;\n                                                IF { DUP ;\n                                                      CDR ;\n                                                      SIZE ;\n                                                      INT ;\n                                                      EQ ;\n                                                      IF { DROP ; NONE (pair nat (map address nat)) } { SOME } }\n                                                   { SOME } ;\n                                                SWAP ;\n                                                CAR ;\n                                                DIP { DIP { DUP ; CAR } } ;\n                                                UPDATE ;\n                                                DIP { DUP ; DIP { CDR } ; CAR } ;\n                                                DIP { DROP } ;\n                                                PAIR } ;\n                                          DUP ;\n                                          DIP { CDR ;\n                                                NEG ;\n                                                DIP { DUP ; CDR ; DUP ; CDR ; CDR } ;\n                                                ADD ;\n                                                ISNAT ;\n                                                IF_NONE\n                                                   { PUSH string\n                                                         \"Unexpected failure: Negative total supply\" ;\n                                                   FAILWITH }\n                                                   {} ;\n                                                DIP { DUP ; DIP { CAR } ; CDR } ;\n                                                DIP { DUP ; DIP { CAR } ; CDR } ;\n                                                DIP { DROP } ;\n                                                SWAP ;\n                                                PAIR ;\n                                                SWAP ;\n                                                PAIR ;\n                                                DIP { DUP ; DIP { CAR } ; CDR } ;\n                                                DIP { DROP } ;\n                                                SWAP ;\n                                                PAIR } ;\n                                          DROP ;\n                                          NIL operation ;\n                                          PAIR } } } } } } } } } }\n    ";
                    michelson_storage = 'Pair {} (Pair "tz1WpPzK6NwWVTJcXqFvYmoA6msQeVy1YP6z" (Pair False 0))';
                    return [4 /*yield*/, conseiljs_1.TezosNodeWriter.sendContractOriginationOperation(opArgs.server, opArgs.keyStore, 0, undefined, false, true, 15000000, '', 5392, 144382, michelson, michelson_storage, conseiljs_1.TezosParameterFormat.Michelson)];
                case 1:
                    result = _a.sent();
                    console.log("Injected operation group id " + result.operationGroupID);
                    return [2 /*return*/];
            }
        });
    });
}
exports.deployContract = deployContract;
