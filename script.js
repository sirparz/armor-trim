// Netherite Armor Random Trim Generator (NARTG)
// For Codecademy Javascript Portfolio
// Made by: Sir Parz

const trimStyles = ['Sentry', 'Dune', 'Coast', 'Wild', 'Tide', 'Ward', 'Vex', 'Rib', 'Snout', 'Eye', 'Spire'];
const templateOrigins = ['Pillager Outpost', 'Desert Pyramid', 'Shipwreck', 'Jungle Temple', 'Ocean Monument', 'Ancient City', 
  'Woodland Mansion', 'Nether Fortress', 'Bastion Remnant', 'Stronghold', 'End City'];

const trimMaterials = ['Iron', 'Copper', 'Gold', 'Lapis Lazuli', 'Emerald', 'Diamond', /*'Netherite',*/ 'Redstone', 'Amethyst', 'Quartz'];
const armorPieces = ['helmet', 'chestplate', 'leggings', 'boots'];

// The Core Random Number Generator
const RNG = number => Math.floor(Math.random() * number)

const randomTrim = () => {
  let iChooseYou = RNG(trimStyles.length);
  return {
    template: trimStyles[iChooseYou],
    origin: templateOrigins[iChooseYou],
  }
}

// Generate the trimmed armor set randomly
const generateSet = () => {
  let set = {};
  for (let piece of armorPieces) {
    set[piece] = {
      trimStyle: randomTrim(),
      trimMaterial: trimMaterials[RNG(trimMaterials.length)],
    }
  }
  return set;
}

const generateMessage = () => {
  let armorSet = generateSet();
  let messageContent = '';
  //console.log(armorSet);
  messageContent += '\nGone of the days where everyone look like a cloned with Netherite Armor.\n';
  messageContent += 'It\'s about time for you to distinguish yourself in Minecraft with the armor trim.\n';
  messageContent += 'Not sure what trim to choose? We\'re gonna generate the trim for you.\n\n';

  for (let piece of armorPieces) {
    messageContent += `NETHERITE ${piece.toUpperCase()}: \n`;
    messageContent += ` - ${armorSet[piece].trimMaterial}-trimmed` + '\n'
    messageContent += ` - ${armorSet[piece].trimStyle.template} template from the ${armorSet[piece].trimStyle.origin}` + '\n\n'
  }

  messageContent += 'Good luck on hunting the template from each respective location!\n'
  messageContent += 'It will take more than one structure to find a smithing template.\n'
  messageContent += 'Make sure to duplicate the template before the armor trimming operation.\n'
  return messageContent;
}
  
console.log(generateMessage())