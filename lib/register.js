const fs = require('fs')
let register = JSON.parse(fs.readFileSync('./database/register.json'))


exports.addRegist = (sender, pushname) => { 
 obj = {  id: sender, name: pushname }
register.push(obj)
fs.writeFileSync('./database/register.json', JSON.stringify(register))
}


exports.cekRegist = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}
