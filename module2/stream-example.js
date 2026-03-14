import {createServer} from 'http';
import {createReadStream} from 'fs'
const server = createServer((req, res) => {
    const stream = createReadStream('file3.txt')
    stream.pipe(res);
    // console.log(res)
})
