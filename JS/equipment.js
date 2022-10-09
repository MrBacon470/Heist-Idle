const weapons = [
    {
        name: "AK-47",
        cost: D(0.00),
        damage: D(10.00),
        conceal: D(12.00),
        level: D(0.00),
    },
    {
        name: "M16",
        cost: D(25.00),
        damage: D(12.00),
        conceal: D(15.00),
        level: D(5.00),
    },
    {
        name: "AR-15",
        cost: D(50.00),
        damage: D(15.00),
        conceal: D(17.00),
        level: D(10.00),
    },
    {
        name: "M4A1",
        cost: D(100.00),
        damage: D(17.00),
        conceal: D(20.00),
        level: D(15.00),
    },
    {
        name: "M4A4",
        cost: D(200.00),
        damage: D(20.00),
        conceal: D(22.00),
        level: D(20.00),
    },
    {
        name: "Stg-44",
        cost: D(400.00),
        damage: D(22.00),
        conceal: D(25.00),
        level: D(25.00),
    },
    {
        name: "M14",
        cost: D(800.00),
        damage: D(25.00),
        conceal: D(27.00),
        level: D(30.00),
    },
    {
        name: "FN-SCAR",
        cost: D(1600.00),
        damage: D(27.00),
        conceal: D(30.00),
        level: D(35.00),
    },
    {
        name: "MP40",
        cost: D(3200.00),
        damage: D(30.00),
        conceal: D(32.00),
        level: D(40.00),
    },
    {
        name: "MP5",
        cost: D(6400.00),
        damage: D(32.00),
        conceal: D(35.00),
        level: D(45.00),
    },
    {
        name: "Barrett M82A1",
        cost: D(12800.00),
        damage: D(35.00),
        conceal: D(37.00),
        level: D(50.00),
    },
    {
        name: "M2 Browning",
        cost: D(25600.00),
        damage: D(37.00),
        conceal: D(40.00),
        level: D(55.00),
    },
]

function updateEquipmentUI(a) {
    switch(a) {
        case 0:
            for(let i = 0; i < weapons.length; i++) {
                DOMCacheGetOrSet(`weapName${i}`).innerText = weapons[i].name
                DOMCacheGetOrSet(`weapStats${i}`).innerText = `Cost: $${formatSci(weapons[i].cost)}\nDMG: ${formatSci(weapons[i].damage)}\nCNL: ${formatSci(weapons[i].conceal)}`
                if(data.level.lt(weapons[i].level)) 
                    DOMCacheGetOrSet(`weapButton${i}`).innerText = `Req: Level ${formatSci(weapons[i].level)}`
                else 
                    DOMCacheGetOrSet(`weapButton${i}`).innerText = !data.purchasedWeapon[i] ? `Buy: $${formatSci(weapons[i].cost)}` : 'Purchased'
                if(data.purchasedWeapon[i])
                    DOMCacheGetOrSet(`weapButton${i}`).classList = 'maxed'
                else
                    DOMCacheGetOrSet(`weapButton${i}`).classList = data.spendingCash.lt(weapons[i].cost) || data.level.lt(weapons[i].level) ? 'locked' : 'unlocked'
            }
        break
    }
}