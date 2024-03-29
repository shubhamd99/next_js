import { NextApiRequest, NextApiResponse } from "next";
import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { latLong, limit } = req.query;
        const response = await fetchCoffeeStores(String(latLong), Number(limit));
        res.status(200);
        res.json(response);
    } catch (err) {
        console.error("There is an error", err);
        res.status(500);
        res.json({ message: "Oh no! Something went wrong", err });
    }

    //return
};

export default getCoffeeStoresByLocation;