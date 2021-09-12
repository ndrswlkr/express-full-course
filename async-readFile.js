const{ readFile, writeFile } = require('fs').promises
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const getFile = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err) 
            } else{
                resolve(data)
            }

        })
    })
}


const start = async () =>{
    try{
        const first = await readFile('./content/first.txt',"utf8")
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-granade.txt', 'this is awesome \n'+ first + "\n" + second)
        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}
start()

/*
getFile('./content/first.txt')
.then((result) => console.log(result.length))
.catch((err) => console.log(err))

getFile('./content/second.txt')
.then((result) => console.log(result.length))
.catch((err) => console.log(err))
*/
