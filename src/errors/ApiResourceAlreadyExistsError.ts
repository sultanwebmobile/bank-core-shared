export type ApiResourceAlreadyExistsError = {
    type: "resource_already_exists";
    resourceName?: string;
    resourceId?: number | string;
};
