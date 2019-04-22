import { ApiCurrencyCode } from "./ApiCurrencyCode";

export type ApiAccountId = number;

export type ApiAccount = {
    id: ApiAccountId;
    balance: string;
    currency: ApiCurrencyCode;
};
