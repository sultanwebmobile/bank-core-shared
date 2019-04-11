import { ApiKeyBasedError } from "./ApiKeyBasedError";

export type ApiMissingValueError = ApiKeyBasedError & {
    type: "missing_value";
};
