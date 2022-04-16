//lbc=last ball commentary

const request= require('request')

const cheerio = require('cheerio')


console.log("Before")

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",cb);

function cb(error,response,html){
    if(error){
        console.log(error)
 }
 else{
        // console.log(response && response.statusCode)
        handleHTML(html)
 }
}

function handleHTML(html){
    // in selTool we are basically getting the whole HTML in cheerio's format
    let selTool = cheerio.load(html)
    //console.log(selTool)


let contentArr = selTool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')

for(let i=0 ; i<1 ; i++){
    let data = selTool(contentArr[i]).text()
    console.log(data)
}

}
console.log("After")