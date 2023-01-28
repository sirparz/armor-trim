// Netherite Armor Random Trim Generator (NARTG)
// For Codecademy Javascript Portfolio
// Made by: Sir Parz

const trimStyles = ['Sentry', 'Dune', 'Coast', 'Wild', 'Tide', 'Ward', 'Vex', 'Rib', 'Snout', 'Eye', 'Spire'];
const templateOrigins = ['Pillager Outpost', 'Desert Pyramid', 'Shipwreck', 'Jungle Temple', 'Ocean Monument', 'Ancient City', 
  'Woodland Mansion', 'Nether Fortress', 'Bastion Remnant', 'Stronghold', 'End City'];

const trimMaterials = ['Iron', 'Copper', 'Gold', 'Lapis Lazuli', 'Diamond', 'Netherite', 'Redstone', 'Amethyst', 'Quartz'];
const armorPieces = ['helmet', 'chestplate', 'leggings', 'boots'];

// The Core Random Number Generator
const RNG = number => Math.floor(Math.random() * number)

const randomTrim = () => {
  let iChooseYou = RNG(trimStyles.length);
  return {
    style: trimStyles[iChooseYou],
    origin: templateOrigins[iChooseYou],
  }
}

const generateSet = () => {
  let set = {};
  for (let piece of armorPieces) {
    set[piece] = {
      style: randomTrim(),
      material: trimMaterials[RNG(trimMaterials.length)],
    }
  }
  return set;
}
  
//let nanii = generateSet();
//console.log(nanii.chestplate)