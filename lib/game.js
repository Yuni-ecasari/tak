require("../settings.js")
const toMs = require('ms');
const fs = require("fs")









//✓
//-------------------------------》TEBAK GAMBAR《-------------------------------\\
exports.addgambar = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTG = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakGambar = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTG = (client, _dir, butgam) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	 
        	teks = `*Game Tebak Gambar*\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butgam)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTGPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
//✓
//-------------------------------》TEBAK LIRIK《-------------------------------\\
exports.addtebaklirik = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTL = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakLirik = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTL = (client, _dir, butlirik) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK LIRIK*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butlirik)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTLPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
//✓
//-------------------------------》SUSUN KATA《-------------------------------\\
exports.addsusunkata = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanSK = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isSusunKata = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuSK = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, { text: `*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}` })
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getSKPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
//✓
//-------------------------------》GAME SIAPA AKU《-------------------------------\\
exports.addsyiko = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanSA = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isSiapaAku = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuSA = (client, _dir, butaku) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK SIAPA AKU*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butaku)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getSAPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

//-------------------------------》Family 100《-------------------------------\\
exports.addfam = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getjawaban100 = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isfam = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuFam = (client, _dir, butfam) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            var juwu = `*Waktu habis*\n\n*Jawaban yang belum terjawab :*\n\n`
            aae = _dir[position].jawaban
            for (let i of aae){
                juwu += `${i}\n`
            }
            client.sendButMessage(_dir[position].id, juwu, fake, butfam)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getfamposi = (chatId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// ✓
//-------------------------------》mtk《-------------------------------\\
exports.addmtk = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanMtk = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isMtk = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuMtk = (client, _dir, butmtk) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME MATH BERAKHIR*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butmtk)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getMtkPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// 
//-------------------------------》TEBAK KATA《-------------------------------\\
exports.addkata = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTK = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakKata = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTK = (client, _dir, butkta) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK KATA*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks , fake, butkta)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTKPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// 
//-------------------------------》TEBAK CAKLOTONG jancok《-------------------------------\\
exports.addcak = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanCL= (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isCaklontong = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuCL = (client, _dir, butckl) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK CAKLONTONG BERAKHIR*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butckl)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getCLPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 

//-------------------------------》TEBAK UNSUR KIMIA《-------------------------------\\
exports.addkimia = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTU = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakKimia = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTU = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, { text: `*GAME TEBAK KIMIA*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`})
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTUPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
// 
//-------------------------------》TEBAK JENAKA《-------------------------------\\
exports.addtebakjenaka = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTJ = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakJenaka = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTJ = (client, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            client.sendMessage(_dir[position].id, { text: `*GAME TEBAK JENAKA*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`})
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTJPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
} 
//✓
//-------------------------------》TEBAK BENDERA《-------------------------------\\
exports.addbendera = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTB = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakBendera = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTB = (client, _dir, butben)=> {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK BENDERA*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks , fake, butben)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTBPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
//✓
//-------------------------------》TEBAK ANIME《-------------------------------\\
exports.addanime = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanTA = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isTebakAnime = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuTA = (client, _dir, butanim) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK ANIME*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butanim)
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getTAPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
//✓
//-------------------------------》Ckl《-------------------------------\\
exports.addckl = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
exports.getJawabanCkl = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
exports.isCkl = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
exports.cekWaktuCkl = (client, _dir, butckl, caklonte) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
        	teks =`*GAME TEBAK CAKLONTONG BERAKHIR*\n\n*Waktu habis*\n\n*Jawaban :* ${_dir[position].jawaban}`
            client.sendButMessage(_dir[position].id, teks, fake, butckl)
            caklonte("Game cak lontong telah berakhir")
            _dir.splice(position, 1)
        }
    }, 1000)
}
exports.getCklPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
