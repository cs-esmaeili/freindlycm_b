const { table } = require('console');
const Class = require('../models/Class');
const { green, red } = require('colors');

const seqNumber = 2;
const baseUrl = process.env.BASE_URL + JSON.parse(process.env.STORAGE_LOCATION)[2];
const classDir = baseUrl + "/class/";
const specDir = baseUrl + "/spec/";

const seed = async (app) => {
    
    await Class.create({ name: "deathknight", spec: "blood", classIcon: classDir + "deathknight.png", specIcon: specDir + "deathknight/blood.png" });
    await Class.create({ name: "deathknight", spec: "frost", classIcon: classDir + "deathknight.png", specIcon: specDir + "deathknight/frost.png" });
    await Class.create({ name: "deathknight", spec: "unholy", classIcon: classDir + "deathknight.png", specIcon: specDir + "deathknight/unholy.png" });

    await Class.create({ name: "druid", spec: "balance", classIcon: classDir + "druid.png", specIcon: specDir + "druid/balance.png" });
    await Class.create({ name: "druid", spec: "feral", classIcon: classDir + "druid.png", specIcon: specDir + "druid/feral.png" });
    await Class.create({ name: "druid", spec: "guardian", classIcon: classDir + "druid.png", specIcon: specDir + "druid/guardian.png" });
    await Class.create({ name: "druid", spec: "restoration", classIcon: classDir + "druid.png", specIcon: specDir + "druid/restoration.png" });

    await Class.create({ name: "hunter", spec: "beastmastery", classIcon: classDir + "hunter.png", specIcon: specDir + "hunter/beastmastery.png" });
    await Class.create({ name: "hunter", spec: "marksman", classIcon: classDir + "hunter.png", specIcon: specDir + "hunter/marksman.png" });
    await Class.create({ name: "hunter", spec: "survival", classIcon: classDir + "hunter.png", specIcon: specDir + "hunter/survival.png" });

    await Class.create({ name: "mage", spec: "arcane", classIcon: classDir + "mage.png", specIcon: specDir + "mage/arcane.png" });
    await Class.create({ name: "mage", spec: "fire", classIcon: classDir + "mage.png", specIcon: specDir + "mage/fire.png" });
    await Class.create({ name: "mage", spec: "frost", classIcon: classDir + "mage.png", specIcon: specDir + "mage/frost.png" });

    await Class.create({ name: "monk", spec: "brewmaster", classIcon: classDir + "monk.png", specIcon: specDir + "monk/brewmaster.png" });
    await Class.create({ name: "monk", spec: "mistweaver", classIcon: classDir + "monk.png", specIcon: specDir + "monk/mistweaver.png" });
    await Class.create({ name: "monk", spec: "windwalker", classIcon: classDir + "monk.png", specIcon: specDir + "monk/windwalker.png" });

    await Class.create({ name: "paladin", spec: "holy", classIcon: classDir + "paladin.png", specIcon: specDir + "paladin/holy.png" });
    await Class.create({ name: "paladin", spec: "protection", classIcon: classDir + "paladin.png", specIcon: specDir + "paladin/protection.png" });
    await Class.create({ name: "paladin", spec: "retribution", classIcon: classDir + "paladin.png", specIcon: specDir + "paladin/retribution.png" });

    await Class.create({ name: "priest", spec: "discipline", classIcon: classDir + "priest.png", specIcon: specDir + "priest/discipline.png" });
    await Class.create({ name: "priest", spec: "holy", classIcon: classDir + "priest.png", specIcon: specDir + "priest/holy.png" });
    await Class.create({ name: "priest", spec: "shadow", classIcon: classDir + "priest.png", specIcon: specDir + "priest/shadow.png" });

    await Class.create({ name: "shaman", spec: "elemental", classIcon: classDir + "shaman.png", specIcon: specDir + "shaman/elemental.png" });
    await Class.create({ name: "shaman", spec: "enhancement", classIcon: classDir + "shaman.png", specIcon: specDir + "shaman/enhancement.png" });
    await Class.create({ name: "shaman", spec: "restoration", classIcon: classDir + "shaman.png", specIcon: specDir + "shaman/restoration.png" });

    await Class.create({ name: "warlock", spec: "affliction", classIcon: classDir + "warlock.png", specIcon: specDir + "warlock/affliction.png" });
    await Class.create({ name: "warlock", spec: "demonology", classIcon: classDir + "warlock.png", specIcon: specDir + "warlock/demonology.png" });
    await Class.create({ name: "warlock", spec: "destruction", classIcon: classDir + "warlock.png", specIcon: specDir + "warlock/destruction.png" });

    await Class.create({ name: "warrior", spec: "arms", classIcon: classDir + "warrior.png", specIcon: specDir + "warrior/arms.png" });
    await Class.create({ name: "warrior", spec: "fury", classIcon: classDir + "warrior.png", specIcon: specDir + "warrior/fury.png" });
    await Class.create({ name: "warrior", spec: "protection", classIcon: classDir + "warrior.png", specIcon: specDir + "warrior/protection.png" });

    await Class.create({ name: "demonhunter", spec: "havoc", classIcon: classDir + "demonhunter.png", specIcon: specDir + "demonhunter/havoc.png" });
    await Class.create({ name: "demonhunter", spec: "vengeance", classIcon: classDir + "demonhunter.png", specIcon: specDir + "demonhunter/vengeance.png" });

    await Class.create({ name: "evoker", spec: "augmentation", classIcon: classDir + "evoker.png", specIcon: specDir + "evoker/augmentation.png" });
    await Class.create({ name: "evoker", spec: "devastation", classIcon: classDir + "evoker.png", specIcon: specDir + "evoker/devastation.png" });
    await Class.create({ name: "evoker", spec: "preservation", classIcon: classDir + "evoker.png", specIcon: specDir + "evoker/preservation.png" });

    await console.log(`${red(seqNumber)} : ${green('Class seed done')}`);
}

module.exports = {
    seqNumber,
    seed
}