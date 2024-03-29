import { NextApiRequest, NextApiResponse } from "next";
import { findRecordByFilter } from "../../lib/airtable";

const getCoffeeStoreById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    try {
        if (id) {
            const records = await findRecordByFilter(Number(id));

            if (records.length !== 0) {
                res.json(records);
            } else {
                res.json({ message: `id could not be found` });
            }
        } else {
            res.status(400);
            res.json({ message: "Id is missing" });
        }
    } catch (error) {
        res.status(500);
        res.json({ message: "Something went wrong", error });
    }
};

export default getCoffeeStoreById;