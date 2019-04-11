import { ApiAccountId } from "../ApiAccount";
import Big from "big.js";

export type ApiPerformTransferRequest = {
    fromId: ApiAccountId;
    toId: ApiAccountId;
    amount: Big;
};
