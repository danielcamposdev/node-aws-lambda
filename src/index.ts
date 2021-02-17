export const handler = async (): Promise<any> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hello from aws lambda")
    };
    return response;
};