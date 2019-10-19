import express from 'express';
import path from 'path';
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})
app.get('/api', (_req: any,res: any) => {
    res.json({message: 'its working'})
})

app.listen(3000, () => {
    console.log('listening on 3000')
})