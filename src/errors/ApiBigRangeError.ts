import { ApiKeyBasedError } from "./ApiKeyBasedError";
import Big from "big.js";

export type ApiBigRangeError = ApiKeyBasedError & {
    type: "big_range";
    value: Big;
    minValue?: Big;
    maxValue?: Big;
};
