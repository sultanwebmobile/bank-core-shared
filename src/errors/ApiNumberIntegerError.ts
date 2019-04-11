import { ApiKeyBasedError } from "./ApiKeyBasedError";

export type ApiNumberIntegerError = ApiKeyBasedError & {
    type: "number_integer";
    value: number;
};
