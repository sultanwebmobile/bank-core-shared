export type ApiFriendId = number;

export type ApiFriend = {
    id: ApiFriendId;
    name: string;
    gender: "m" | "f" | undefined;
};
