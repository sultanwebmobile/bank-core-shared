import { ApiKeyBasedError } from "./ApiKeyBasedError";

export type ApiInvalidValueError = ApiKeyBasedError & {
    type: "invalid_value";
};
