import express from 'express';
import path from 'path';
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/build')));
app.get('/api', (req: any,res: any) => {
    console.log('messsage', req.message.length);
    res.json({message: 'its working'})
})

app.listen(3000, () => {
    console.log('listening on 3000')
})