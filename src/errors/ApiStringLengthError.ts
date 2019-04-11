import { ApiKeyBasedError } from "./ApiKeyBasedError";

export type ApiStringLengthError = ApiKeyBasedError & {
    type: "string_length";
    length: number;
    minLength?: number;
    maxLength?: number;
};
