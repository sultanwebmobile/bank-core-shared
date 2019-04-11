import { ApiKeyBasedError } from "./ApiKeyBasedError";

export type ApiOtherError = ApiKeyBasedError & {
    type: "other";
};
