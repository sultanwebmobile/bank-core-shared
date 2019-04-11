import { ApiErrorBase } from "./ApiError";

export type ApiKeyBasedError = ApiErrorBase & {
    key?: string;
};
