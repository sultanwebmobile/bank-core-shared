/**
 * @swagger
 *
 * definitions:
 *     ApiCurrencyCode:
 *         type: "string"
 *         enum: [usd, cny, pln]
 */
export type ApiCurrencyCode = "usd" | "cny" | "pln";

export const apiCurrencyCodes = ["usd", "cny", "pln"];
