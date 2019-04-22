import { ApiBigQuantError } from "./ApiBigQuantError";
import { ApiBigRangeError } from "./ApiBigRangeError";
import { ApiMissingValueError } from "./ApiMissingValueError";
import { ApiNumberRangeError } from "./ApiNumberRangeError";
import { ApiOtherError } from "./ApiOtherError";
import { ApiInvalidValueError } from "./ApiInvalidValueError";
import { ApiStringLengthError } from "./ApiStringLengthError";
import { ApiNumberIntegerError } from "./ApiNumberIntegerError";
import { ApiExceptionError } from "./ApiExceptionError";
import { ApiResourceDoesntExistsError } from "./ApiResourceDoesntExistsError";
import { ApiResourceAlreadyExistsError } from "./ApiResourceAlreadyExistsError";

export type ApiErrorBase = {};

/**
 * @swagger
 *
 *  definitions:
 *      ApiError:
 *          type: object
 *          properties:
 *              type:
 *                  type: string
 */
export type ApiError =
    | ApiBigQuantError
    | ApiBigRangeError
    | ApiMissingValueError
    | ApiNumberRangeError
    | ApiOtherError
    | ApiInvalidValueError
    | ApiStringLengthError
    | ApiNumberIntegerError
    | ApiExceptionError
    | ApiResourceDoesntExistsError
    | ApiResourceAlreadyExistsError;
