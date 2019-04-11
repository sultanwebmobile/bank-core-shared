import { ApiKeyBasedError } from "./ApiKeyBasedError";
import Big from "big.js";

export type ApiBigQuantError = ApiKeyBasedError & {
    type: "big_quant";
    value: Big;
    quant: Big;
};
