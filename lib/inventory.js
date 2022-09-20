require("../settings.js")
    const fs = require('fs')  
  let _inventoryOrang = JSON.parse(fs.readFileSync('./database/inventory.json'))
  let besiAwal = rpg.besiawal
  let goldAwal = rpg.goldawal
  let emeraldAwal = rpg.emeraldawal
  let umpanAwal = rpg.umpanawal
  let potionAwal = rpg.potionawal
  exports.addInventori = (sender) => {
     let obj = { id: sender, besi: besiAwal, gold: goldAwal, emerald: emeraldAwal, umpan: umpanAwal, potion: potionAwal, ikan: 0, ayam: 0, kelinci: 0, domba: 0, sapi: 0, gajah: 0,  ikanGoreng: 0, ayamGoreng: 0, kelinciGoreng: 0, dombaGoreng: 0, sapiGoreng: 0, gajahGoreng: 0 }
         _inventoryOrang.push(obj)
        fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
   }
  exports.cekInventoryAdaAtauGak = (sender) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  exports.addBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getBesi = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].besi
            }
        }     
  exports.addEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getEmas = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gold
            }
        }     
  exports.addEmerald = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangEmerald = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getEmerald = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].emerald
            }
        }     
        
  exports.addUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getUmpan = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].umpan
            }
        }  
  exports.addPotion = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangPotion = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getPotion = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].potion
            }
        }       
  exports.addAyam = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayam += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangAyam = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayam -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getAyam = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ayam
            }
        }    
  exports.addIkan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikan += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangIkan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikan -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getIkan = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ikan
            }
        }      
  exports.addKelinci = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinci += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangKelinci = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinci -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getKelinci = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].kelinci
            }
        }     
  exports.addDomba = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].domba += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangDomba = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].domba -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getDomba = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].domba
            }
        } 
    exports.addSapi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapi += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangSapi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapi -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getSapi = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].sapi
            }
        }     
                           
  exports.addGajah = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajah += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangGajah = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajah -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getGajah = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gajah
            }
        }     
        
//================================================================================\\
  exports.addIkanGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikanGoreng += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangIkanGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikanGoreng -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getIkanGoreng = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ikanGoreng
            }
        }              
        
exports.addAyamGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayamGoreng += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangAyamGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayamGoreng -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getAyamGoreng = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ayamGoreng
            }
        }            
        
          exports.addKelinciGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinciGoreng += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangKelinciGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinciGoreng -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getKelinciGoreng = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].kelinciGoreng
            }
        }     
        
         exports.addDombaGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].dombaGoreng += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangDombaGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].dombaGoreng -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getDombaGoreng = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].dombaGoreng
            }
        } 
        
 exports.addSapiGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapiGoreng += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangSapiGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapiGoreng -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getSapiGoreng = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].sapiGoreng
            }
        }     
                           
  exports.addGajahGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajahGoreng += amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.kurangGajahGoreng = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajahGoreng -= amount
                fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   exports.getGajahGoreng = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gajahGoreng
            }
        }     
                
        
        
