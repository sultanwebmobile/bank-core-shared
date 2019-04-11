export type ApiExceptionError = {
    type: "exception";
    message: string; // TODO [RM]: TEMP, DEBUG purposes only. Can leak confidential informations.
    stack: string | undefined; // TODO [RM]: TEMP, DEBUG purposes only. Can leak confidential informations.
};
