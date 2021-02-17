export const handler = async (): Promise<any> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hi aws lambda")
    };
    return response;
};