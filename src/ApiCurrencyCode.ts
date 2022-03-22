/**
 * @swagger
 *
 * definitions:
 *     ApiCurrencyCode:
 *         type: "string"
 *         enum: [usd, cny, kzt]
 */
export type ApiCurrencyCode = "usd" | "cny" | "kzt";

export const apiCurrencyCodes = ["usd", "cny", "kzt"];
