import { ApiTransactionCategory } from "./ApiTransactionCategory";
import { ApiMoney } from "./ApiMoney";

/**
 * @swagger
 *
 * definitions:
 *     ApiTransactionId:
 *         type: integer
 */
export type ApiTransactionId = number;

/**
 * @swagger
 *
 * definitions:
 *     ApiTransaction:
 *         type: object
 *         properties:
 *             id:
 *                 $ref: '#/definitions/ApiTransactionId'
 *             date:
 *                 type: string
 *                 format: date-time
 *             category:
 *                 $ref: '#/definitions/ApiTransactionCategory'
 *             title:
 *                 type: string
 *             value:
 *                 $ref: '#/definitions/ApiMoney'
 */
export type ApiTransaction = {
    id: ApiTransactionId;
    date: string; // TODO [RM]: Normalize as UTC, etc., variable name `dateUtc`? Use `Date` type or other (timestamp?)
    category: ApiTransactionCategory;
    title: string;
    value: ApiMoney;
};
