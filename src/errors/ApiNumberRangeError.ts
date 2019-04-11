import { ApiKeyBasedError } from "./ApiKeyBasedError";

export type ApiNumberRangeError = ApiKeyBasedError & {
    type: "number_range";
    value: number;
    minValue?: number;
    maxValue?: number;
};
