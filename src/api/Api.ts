import { Card } from './interface';
const cardUrl: string = 'https://jsonplaceholder.typicode.com/possts';

const callAllCards = async () => {
    try {
        const request: Response = await fetch(cardUrl, {
            method: 'GET',
        });
        const response: [Card] = await request.json();
        if (!request.ok) {
            throw new Error("server doesn't work");
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { callAllCards };
