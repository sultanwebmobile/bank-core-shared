export type ApiResourceDoesntExistsError = {
    type: "resource_doesnt_exists";
    resourceName?: string;
    resourceId?: number | string;
};
