export type ApiAccessTokenResponse = {
    token: string;
    expiresInSec: number;
    profile: {
        email: string;
    };
};
