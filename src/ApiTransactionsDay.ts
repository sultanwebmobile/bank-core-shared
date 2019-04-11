import { ApiMoney } from "./ApiMoney";

// TODO [RM]: aggregate of transactions value for single day

/**
 * @swagger
 *
 * definitions:
 *     ApiTransactionsDay:
 *         type: object
 *         properties:
 *             date:
 *                 type: string
 *                 format: date
 *             value:
 *                 $ref: '#/definitions/ApiMoney'
 */
export type ApiTransactionsDay = {
    date: string; // TODO [RM]: Full date (day); Which timezone? Figure out.
    value: ApiMoney;
};
