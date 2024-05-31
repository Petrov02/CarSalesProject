import express, { Router, Request, Response } from 'express';
import { Models, Users,User, Advertisement,Fuels,Brands } from '../models/AllModels';
import { Advertisements } from '../models/Advertisement';

const router: Router = express.Router();

router.get('/users', async (req: Request, res: Response) => {
    const usersModel = new Users();
    const users: User[] = await usersModel.getAllUsers();

    if (users.length === 0) {
        return res.status(404).json({ error: 'Моля, регистрирайте се.' });
    }

    res.send(users);
});

router.post('/users', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body as User;
    const usersModel = new Users();
    const users: User[] = await usersModel.getAllUsers();

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({ error: 'Потребителското име вече съществува.' });
    }

});

router.post('/users/login', async (req: Request, res: Response) => {
    const { username, password } = req.body as User;

    if (!username || !password) {
        return res.status(400).json({ error: 'Моля, въведете потребителско име и парола.' });
    }

    const usersModel = new Users();
    const users: User[] = await usersModel.getAllUsers();
    const existingUser = users.find(user => user.username === username && user.password === password);

    if (existingUser) {
        return res.status(200).json({ message: 'Добре дошли!' });
    } else {
        return res.status(401).json({ error: 'Грешно потребителско име или парола.' });
    }
});

router.post('/users/register', async (req: Request, res: Response) => {
    const { username, password, email } = req.body ;

    if (!username || !password || !email) {
        return res.status(400).json({ error: 'Моля, въведете потребителско име и парола.' });
    }

    const usersModel = new Users();
    const newResult = await usersModel.NewRegister(username, password, email)

    if (newResult) {
        return res.status(200).json({ message: 'Успешна регистрация!' });
    } else {
        return res.status(401).json({ error: 'Потребителското име е заето.' });
    }
});

router.get('/models', async (req: Request, res: Response) => {
    const model: Models = new Models();
    const Results= await model.getAllModels();
    res.send (Results)
});


router.get('/advertisement', async (req: Request, res: Response) => {
    try {
        const advertisementsModel = new Advertisements();
        const results = await advertisementsModel.getAllAdvertisements();
        res.json(results);
    } catch (error) {
        console.log (error)
        res.status(500).json({ error: 'Възникна грешка при извличането на обявите.' });
    }
});

router.get('/advertisement/:id', async (req: Request, res: Response) => {
    try {
        const advertisementsModel = new Advertisements();
        const advertisementID = +req.params.id;
        const result = await advertisementsModel.getAdvertisementById(advertisementID);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ error: 'Обявата не е намерена.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Възникна грешка при извличането на обявата.' });
    }
});

router.get('/advertisement/:brand/:model/:fuel', async (req: Request, res: Response) => {
    try {
        const advertisementsModel = new Advertisements();
        const {brand, model, fuel} = req.params;
        const result = await advertisementsModel.getFilteredAdvertisement(brand, model, fuel);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ error: 'Обявата не е намерена.' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Възникна грешка при извличането на обявата.' });
    }
});

router.get('/fuels', async (req: Request, res: Response) => {
    const fuels: Fuels = new Fuels();
    const Results= await fuels.getAllFuels();
    res.send (Results)
});

router.get('/brands', async (req: Request, res: Response) => {
    const brands: Brands = new Brands();
    const Results= await brands.getAllBrands();
    res.send (Results)
});

router.get('/models/:brand', async (req: Request, res: Response) => {
    const brand = req.params.brand;
    const models: Models = new Models();
    const Results= await models.getModelsByBrand(brand);
    res.send (Results)
});

export default router;
