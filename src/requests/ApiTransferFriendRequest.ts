import { ApiAccountId } from "../ApiAccount";

export type ApiTransferFriendRequest = {
    accountId: ApiAccountId;
    amount: string;
    title: string;
};
