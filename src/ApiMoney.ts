import { ApiCurrencyCode } from "./ApiCurrencyCode";

/**
 * @swagger
 *
 * definitions:
 *     ApiMoney:
 *         type: object
 *         properties:
 *             value:
 *                 type: string
 *                 format: big
 *             currencyCode:
 *                 $ref: '#/definitions/ApiCurrencyCode'
 */
export type ApiMoney = {
    value: string;
    currencyCode: ApiCurrencyCode;
};
