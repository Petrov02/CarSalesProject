import { Router, Request, Response } from "express";
import { Users } from "../models/Users";

export const userRouter = Router();
const usersModel = new Users();

userRouter.post("/api/users", async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const users = await usersModel.getAllUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(401).json({ error: "Потребител не е намерен" });
        }

        if (password !== user.password) {
            return res.status(401).json({ error: "Грешна парола" });
        }

        // Ако всичко е наред, изпращаме съобщение за успешен вход
        res.json({ message: "Успешен вход" });
    } catch (error) {
        console.error("Грешка при проверка на вход:", error);
        res.status(500).json({ error: "Грешка при проверка на вход" });
    }
});

export default userRouter;
