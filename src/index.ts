export const handler = async (): Promise<any> => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Hi from aws lambda")
    };
    return response;
};