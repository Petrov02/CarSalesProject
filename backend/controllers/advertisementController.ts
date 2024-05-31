import { Request, Response } from 'express';
import { Advertisements } from '../models/Advertisement';

export const getAllAdvertisements = async (req: Request, res: Response) => {
    try {
        const advertisements = await new Advertisements().getAllAdvertisements();
        res.json(advertisements);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch advertisements' });
    }
};

