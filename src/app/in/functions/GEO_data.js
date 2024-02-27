

export default async function GEOdata (param) {
    const geoData = {
        "rikutaka":{lati:[39.026252,39.026600],long:[141.626045,141.626486]},
        "itinoseki":{lati:[38.934004,38.934238],long:[141.115004,141.115503]},
        "ousyu":{lati:[39.192762,39.192936],long:[141.169642,141.169936]},
        "all":{lati:[38.943044,39.030271],long:[141.608075,141.719296]}
    }

    return geoData[param]
}

//緯度:latitude＝赤道（0~90）
//経度:longitude＝グリニッジ天文台(0~180)
