/** @param {NS} ns **/
export async function main(ns) {

    let allServersArray = [
        "home", "millenium-fitness", "alpha-ent", "rho-construction", "aevum-police", "lexo-corp",
        "aerocorp", "global-pharm", "galactic-cyber", "snap-fitness", "omnia", "unitalife", "deltaone",
        "icarus", "zeus-med", "defcomm", "univ-energy", "solaris", "infocomm", "zb-def", "taiyang-digital",
        "nova-med", "titan-labs", "run4theh111z", "microdyne", "applied-energetics", "fulcrumtech", "stormtech",
        "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "nectar-net", "n00dles", "foodnstuff",
        "iron-gym", "max-hardware", "CSEC", "zer0",
        "neo-net", "omega-net", "silver-helix", "phantasy", "crush-fitness", "netlink", "avmnite-02h", "the-hub", "comptek", "johnson-ortho",
        "zb-institute", "syscore", "rothman-uni", "catalyst", "summit-uni", "I.I.I.I",
        "vitalife", "helios", "omnitek", ".", "4sigma", "kuai-gong", "powerhouse-fitness", "b-and-a", "blade", "nwo",
        "clarkinc", "ecorp", "megacorp", "The-Cave", "fulcrumassets"
    ];
    let playerHackLevel = ns.getHackingLevel();
    let targetJsonArray = [];
    allServersArray.forEach(hostName => {
        let name = hostName;
        let maxMoney = ns.getServerMaxMoney(hostName);
        let reqHacking = ns.getServerRequiredHackingLevel(hostName);
        // if is has money to steal and it is hackable profile it and add to json
        if (maxMoney !== 0 && reqHacking < playerHackLevel) {
            let avaMoney = ns.getServerMoneyAvailable(hostName);
            let curSecurity = ns.getServerSecurityLevel(hostName);
            let minSecurity = ns.getServerMinSecurityLevel(hostName);
            let hasRoot = ns.hasRootAccess(hostName);
            ///keep players hacking lvl separate
            let targetObj =
                `{
                    "Name": "${name}"",
                    "Stats":
                    {
                        "MoneyMax": "${maxMoney}",
                        "MoneyAva": "${avaMoney}",
                        "SecurityCur": "${curSecurity}",
                        "SecurityMin": "${minSecurity}",
                        "RequiredHack": "${reqHacking}",
                        "HaveRoot": "${hasRoot}"
                    }
                }`
            //Add each json string to array so help build valid json
            targetJsonArray.push(targetObj);
        }

    });


    let allTargetsJson = "{";
    let arrayLength = targetJsonArray.length;
    for (let i = 0; i < arrayLength; i++) {
        if (i < (arrayLength - 1)) {
            allTargetsJson += `${targetJsonArray[i]},`
        } else {
            allTargetsJson += `${targetJsonArray[i]}}`
        }
    }

    ns.print(allTargetsJson);
    // writes all current targets to .json.txt
    await ns.write('CurrentTargetsJson.json', allTargetsJson, "W");
}

