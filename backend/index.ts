import express from 'express'
import obqviRouter from './routers/obqvi'; 
import { userRouter } from './routers/userRouter';

const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors({
    origin: "*"
}))
app.use('/api', obqviRouter);
app.use('/api/users', userRouter);

app.listen(3004, () => {
    console.log('Сървърът стартира на порт 3004');
});