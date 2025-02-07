"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

//const buildDir = path.join(basePath, "/build");
//const layersDir = path.join(basePath, "/layers");
const buildDir = "../build";
const layersDir = "../layers";

const description =
  "A collection of 10,000 algorithmically generated conscious avatars elevating the metaverse and beyond";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's
/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 */
const startIndex = 1;

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 10000,
    namePrefix: "Conscious Avatar", // Use to add a name to Metadata `name:`
    layersOrder: [
      ,
      {
        name: "Background",
        options: {
          bypassDNA: false,
        },
      },
      { name: "Base Character" },
      { name: "Tattoo" },
      { name: "Clothes" },
      {
        name: "Expression",
        options: {
          bypassDNA: false,
        },
      },
      { name: "Hair" },
      { name: "Necklace" },
      { name: "Eyes" },
      { name: "Earings" },
      // { name: "Beard" },
      { name: "Headware" },
      { name: "Sneakers" },
    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  "Copper Rock": [
    "Black Helix",
    "Gold Helix",
    "Black Loop",
    "Black Stud",
    "Double Black Stud",
    "Double Gold Stud",
    "Gold Ring",
    "Gold Stud",
  ],
  "Indigo Rock": [
    "Black Helix",
    "Gold Helix",
    "Black Loop",
    "Black Stud",
    "Double Black Stud",
    "Double Gold Stud",
    "Gold Ring",
    "Gold Stud",
  ],
  "Pink Rock": [
    "Black Helix",
    "Gold Helix",
    "Black Loop",
    "Black Stud",
    "Double Black Stud",
    "Double Gold Stud",
    "Gold Ring",
    "Gold Stud",
  ],
  "Purple Rock": [
    "Black Helix",
    "Gold Helix",
    "Black Loop",
    "Black Stud",
    "Double Black Stud",
    "Double Gold Stud",
    "Gold Ring",
    "Gold Stud",
  ],
  "Sun Set Rock": [
    "Black Helix",
    "Gold Helix",
    "Black Loop",
    "Black Stud",
    "Double Black Stud",
    "Double Gold Stud",
    "Gold Ring",
    "Gold Stud",
  ],
  Aqua: ["Blangkon", "Indigenous", "Sarong"],
  Tan: ["Blangkon", "Indigenous", "Sarong"],
  Olive: ["Blangkon", "Indigenous", "Sarong"],
  Fair: ["Blangkon", "Indigenous", "Sarong"],
  Bronze: ["Blangkon", "Indigenous", "Sarong"],
  Copper: ["Blangkon", "Indigenous", "Sarong"],
  Brown: ["Blangkon", "Indigenous", "Sarong"],
  Charcoal: ["Blangkon", "Indigenous", "Sarong"],
  Diamond: ["Blangkon", "Indigenous", "Sarong"],
  Ebony: ["Blangkon", "Indigenous", "Sarong"],
  Glitch: ["Blangkon", "Indigenous", "Sarong"],
  Gold: ["Blangkon", "Indigenous", "Sarong"],
  Graphite: ["Blangkon", "Indigenous", "Sarong"],
  Granite: ["Blangkon", "Indigenous", "Sarong"],
  Gray: ["Blangkon", "Indigenous", "Sarong"],
  Ivory: ["Blangkon", "Indigenous", "Sarong"],
  Onyx: ["Blangkon", "Indigenous", "Sarong"],
  Sapphire: ["Blangkon", "Indigenous", "Sarong"],
  Spectrum: ["Blangkon", "Indigenous", "Sarong"],

  "Black Hoddie": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  Blangkon: [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Casual Blue Gold Crimson": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Casual Blue Gold": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Casual Blue Gray": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Casual Blue Peach": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Casual Blue": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Casual Dark Blue": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Green Hoddie": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  Indigenous: [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  Sarong: [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Magenta Hoodie": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Maroon Hoodie": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Purple Hoodie": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Relaxed Blue": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Relaxed Orange": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Traditional Blue": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Traditional Crimson": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Traditional Magenta": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Traditional Orange": [
    "Maelstrom",
    "Maelstrom Tails",
    "Rock Maelstrom",
    "Emo Maelstrom",
    "Emo Jester",
    "Rock Jester",
    "Prince of Chaos",
    "The Ace of Knaves",
    "Helmet Blue",
    "Helmet Indigo",
  ],
  "Space Indigo": [
    "Aqua Punk",
    "Auburn Afro",
    "Auburn Rock",
    "Gold Punk",
    "Tinted Punk",
    "Bald",
    "Gray Emo ",
    "Black Afro",
    "Indigo Emo",
    "Black Beard",
    "Indigo Rock",
    "Brown Afro",
    "Brownish Afro",
    "Jade Afro",
    "Magenta Flame",
    "Magenta Punk",
    "Emo Maelstrom",
    "Rock Maelstrom",
    "Blue Flame Mohawk",
    "Maroon Afro",
    "Blue Knot",
    "Mop Top",
    "Neon Emo",
    "Pink Rock",
    "Purple Rock",
    "Red Flame Mohawk",
    "Cooper Natural Afro",
    "Red Knot",
    "Red Punk",
    "Copper Rock",
    "Red Shadow Punk",
    "Maroon Punk",
    "Redish Knot",
    "Saphire Flame Mohawk",
    "Brown Beard",
    "Copper Beard",
    "Magenta Beard",
    "Black Brown Afro",
    "Maelstrom",
    "Gold Afro",
  ],
  "Space Blue": [
    "Aqua Punk",
    "Auburn Afro",
    "Auburn Rock",
    "Gold Punk",
    "Tinted Punk",
    "Bald",
    "Gray Emo ",
    "Black Afro",
    "Indigo Emo",
    "Black Beard",
    "Indigo Rock",
    "Brown Afro",
    "Brownish Afro",
    "Jade Afro",
    "Magenta Flame",
    "Magenta Punk",
    "Emo Maelstrom",
    "Rock Maelstrom",
    "Blue Flame Mohawk",
    "Maroon Afro",
    "Blue Knot",
    "Mop Top",
    "Neon Emo",
    "Pink Rock",
    "Purple Rock",
    "Red Flame Mohawk",
    "Cooper Natural Afro",
    "Red Knot",
    "Red Punk",
    "Copper Rock",
    "Red Shadow Punk",
    "Maroon Punk",
    "Redish Knot",
    "Saphire Flame Mohawk",
    "Brown Beard",
    "Copper Beard",
    "Magenta Beard",
    "Black Brown Afro",
    "Maelstrom",
    "Gold Afro",
  ],
  Jester: [
    "Aqua Punk",
    "Auburn Afro",
    "Auburn Rock",
    "Gold Punk",
    "Tinted Punk",
    "Bald",
    "Gray Emo ",
    "Black Afro",
    "Indigo Emo",
    "Black Beard",
    "Indigo Rock",
    "Brown Afro",
    "Jade Afro",
    "Black Dreadlocks Silver Beads",
    "Light Emo",
    "Black Natural Afro",
    "Magenta Flame",
    "Blue Emo",
    "Magenta Punk",
    "Maelstrom",
    "Maelstrom Tails",
    "Emo Maelstrom",
    "Rock Maelstrom",
    "Blue Flame Mohawk",
    "Maroon Afro",
    "Blue Knot",
    "Mop Top",
    "Blue Low Cut",
    "Neon Emo",
    "Pink Rock",
    "Brown Dreadlocks",
    "Purple Rock",
    "Brown Low Cut",
    "Rasta Gold",
    "Rasta Red",
    "Red Flame Mohawk",
    "Cooper Natural Afro",
    "Red Knot",
    "Copper Dreadlocks",
    "Red Punk",
    "Copper Rock",
    "Red Shadow Punk",
    "Maroon Punk",
    "Redish Knot",
    "Dark Shag ",
    "Rasta Spectrum",
    "Rasta Black and Gold",
    "Saphire Flame Mohawk",
    "Rasta Auburn and Gold",
    "Rasta Black and Gold",
    "Rasta Black and Silver Beads",
    "Rasta Black and Spectrum",
    "Rasta Brown and  Silver",
    "Rasta Brown and Gold",
    "Rasta Brown and Green",
    "Rasta Copper and Gold",
    "Rasta Red and Gold",
    "Rasta Red and Silver",
    "Rasta Red and Spectrum",
    "Rasta Red",
    "Brown Beard",
    "Copper Beard",
    "Magenta Beard",
    "Helmet Blue",
    "Helmet Indigo",
    "Front Cut Black",
    "Front Cut Blue",
    "Front Cut Green",
    "Front Cut Indigo",
    "Front Cut Orange",
    "Front Cut Pink",
    "Front Cut Red",
    "Highlight Afro",
    "Black Brown Afro",
    "Brownish Afro",
  ],
  Joker: [
    "Aqua Punk",
    "Auburn Afro",
    "Auburn Rock",
    "Gold Punk",
    "Tinted Punk",
    "Bald",
    "Gray Emo ",
    "Black Afro",
    "Indigo Emo",
    "Black Beard",
    "Indigo Rock",
    "Brown Afro",
    "Jade Afro",
    "Black Dreadlocks Silver Beads",
    "Light Emo",
    "Black Natural Afro",
    "Maelstrom",
    "Maelstrom Tails",
    "Emo Maelstrom",
    "Rock Maelstrom",
    "Magenta Flame",
    "Blue Emo",
    "Magenta Punk",
    "Blue Flame Mohawk",
    "Maroon Afro",
    "Blue Knot",
    "Mop Top",
    "Blue Low Cut",
    "Neon Emo",
    "Pink Rock",
    "Brown Dreadlocks",
    "Purple Rock",
    "Brown Low Cut",
    "Rasta Gold",
    "Rasta Red",
    "Red Flame Mohawk",
    "Cooper Natural Afro",
    "Red Knot",
    "Copper Dreadlocks",
    "Red Punk",
    "Copper Rock",
    "Red Shadow Punk",
    "Maroon Punk",
    "Redish Knot",
    "Dark Shag ",
    "Rasta Spectrum",
    "Rasta Black and Gold",
    "Saphire Flame Mohawk",
    "Rasta Auburn and Gold",
    "Rasta Black and Gold",
    "Rasta Black and Silver Beads",
    "Rasta Black and Spectrum",
    "Rasta Brown and  Silver",
    "Rasta Brown and Gold",
    "Rasta Brown and Green",
    "Rasta Copper and Gold",
    "Rasta Red and Gold",
    "Rasta Red and Silver",
    "Rasta Red and Spectrum",
    "Rasta Red",
    "Brown Beard",
    "Copper Beard",
    "Magenta Beard",
    "Helmet Blue",
    "Helmet Indigo",
    "Front Cut Black",
    "Front Cut Blue",
    "Front Cut Green",
    "Front Cut Indigo",
    "Front Cut Orange",
    "Front Cut Pink",
    "Front Cut Red",
    "Highlight Afro",
    "Black Brown Afro",
    "Brownish Afro",
  ],
  Ninja: [
    /* "Aqua Punk",
    "Auburn Afro",
    "Auburn Rock",
    "Gold Punk", "Tinted Punk",
    "Bald",
    "Gray Emo ",
    "Black Afro",
    "Indigo Emo",
    "Black Beard",
    "Indigo Rock",
    "Brown Afro",
    "Jade Afro",
    "Black Dreadlocks Silver Beads",
    "Light Emo",
    "Black Natural Afro",
    "Magenta Flame",
    "Blue Emo",
    "Magenta Punk",
    "Blue Flame Mohawk",
    "Maroon Afro",
    "Blue Knot",
    "Mop Top",
    "Blue Low Cut",
    "Neon Emo",
    "Pink Rock",
    "Brown Dreadlocks",
    "Purple Rock",
    "Brown Low Cut",
    "Rasta Gold",
    "Rasta Red",
    "Red Flame Mohawk",
    "Cooper Natural Afro",
    "Red Knot",
    "Copper Dreadlocks",
    "Red Punk",
    "Copper Rock",
    "Red Shadow Punk",
    "Maroon Punk",
    "Redish Knot",
    "Dark Shag ",
    "Rasta Spectrum",
    "Rasta Black and Gold",
    "Saphire Flame Mohawk",
    "Rasta Auburn and Gold",
    "Rasta Black and Gold",
    "Rasta Black and Silver Beads",
    "Rasta Black and Spectrum",
    "Rasta Brown and  Silver",
    "Rasta Brown and Gold",
    "Rasta Brown and Green",
    "Rasta Copper and Gold",
    "Rasta Red and Gold",
    "Rasta Red and Silver",
    "Rasta Red and Spectrum",
    "Rasta Red",
    "Brown Beard",
    "Copper Beard",
    "Magenta Beard",*/
    "Rock Jester",
    "Emo Jester",
    "Helmet Blue",
    "Helmet Indigo",
    "Prince of Chaos",
    "The Ace of Knaves",
  ],
  "West Papua Shaman": [
    "Prince of Chaos",
    "The Ace of Knaves",
    "Air Jesters",
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "Ol Glas Shaman": [
    "Prince of Chaos",
    "The Ace of Knaves",
    "Air Jesters",
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "Papua Shaman": [
    "Prince of Chaos",
    "The Ace of Knaves",
    "Air Jesters",
    "Helmet Blue",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "Helmet Indigo",
  ],
  "Kejawen Shaman": [
    "Prince of Chaos",
    "The Ace of Knaves",
    "Air Jesters",
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "Kebatinan Shaman": [
    "Prince of Chaos",
    "The Ace of Knaves",
    "Air Jesters",
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "Aqua Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Auburn Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Black Brown Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brownish Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Auburn Rock": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Gold Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Tinted Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  Bald: [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Gray Emo ": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Black Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Indigo Emo": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Black Beard": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown Beard": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Copper Beard": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Magenta Beard": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Indigo Rock": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Gold Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Highlight Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Jade Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Black Dreadlocks Silver Beads": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Light Emo": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Black Natural Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Red Fire Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "Magenta Flame": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Blue Emo": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Magenta Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Blue Flame Mohawk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Maroon Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Blue Knot": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Mop Top": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Blue Low Cut": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Neon Emo": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Rasta Spectrum": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Pink Rock": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown Dreadlocks": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Purple Rock": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown Low Cut": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Rasta Gold": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Rasta Red": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown and Green Rasta Black and Gold": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Red Dreadlocks Silver Beads": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Brown and Green Dreadlocks Silver Beads": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Red Flame Mohawk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Cooper Natural Afro": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
    "Indigo Wizard Hat",
  ],
  "Red Knot": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Copper Dreadlocks": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Red Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Copper Rock": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Red Shadow Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Maroon Punk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Redish Knot": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Dark Shag ": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Rasta Spectrum": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Rasta Black and Gold": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Saphire Flame Mohawk": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  Maelstrom: [
    "Helmet Blue",
    "Helmet Indigo",
    "Indigo Wizard Hat",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
    "Blangkon",
  ],
  "Maelstrom Tails": [
    "Helmet Blue",
    "Helmet Indigo",
    "Indigo Wizard Hat",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
    "Blangkon",
  ],
  "Emo Maelstrom": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Rock Maelstrom": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
    "The Ace of Knaves",
    "Prince of Chaos",
  ],
  "Emo Jester": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "Rock Jester": [
    "Helmet Blue",
    "Helmet Indigo",
    "Ruby Wizard Hat",
    "Sapphire Wizard Hat",
    "Indigo Wizard Hat",
  ],
  "BTC Pendant": ["Brown Beard", "Copper Beard", "Magenta Beard"],
  Beaded: ["Brown Beard", "Copper Beard", "Magenta Beard"],
  "ETH Pendant": ["Brown Beard", "Copper Beard", "Magenta Beard"],
  Emerald: ["Brown Beard", "Copper Beard", "Magenta Beard"],
  "Gold Link": ["Brown Beard", "Copper Beard", "Magenta Beard"],
  "Jade Pendant": ["Brown Beard", "Copper Beard", "Magenta Beard"],
  "Platinum Link": ["Brown Beard", "Copper Beard", "Magenta Beard"],
  Spiked: ["Brown Beard", "Copper Beard", "Magenta Beard"],
  "Onyx Link": ["Brown Beard", "Copper Beard", "Magenta Beard"],
  "Indigo Wizardry": [
    "Helmet Blue",
    "Blangkon",
    "Helmet Indigo",
    "Black Hoddie",
    "Casual Blue Gold Crimson",
    "Casual Blue Gold",
    "Casual Blue Gray",
    "Casual Blue Peach",
    "Casual Blue",
    "Casual Dark Blue",
    "Green Hoddie",
    "Indigenous",
    "Ninja",
    "Magenta Hoodie",
    "Maroon Hoodie",
    "Purple Hoodie",
    "Relaxed Blue",
    "Relaxed Orange",
    "Space Blue",
    "Space Indigo",
    "Traditional Blue",
    "Traditional Crimson",
    "Traditional Magenta",
    "Traditional Orange",
    "West Papua Shaman",
    "Ol Glas Shaman",
    "Papua Shaman",
    "Kebatinan Shaman",
    "Kejawen Shaman",
  ],
  "Spectrum Wizardry": [
    "Helmet Blue",
    "Blangkon",
    "Helmet Indigo",
    "Black Hoddie",
    "Casual Blue Gold Crimson",
    "Casual Blue Gold",
    "Casual Blue Gray",
    "Casual Blue Peach",
    "Casual Blue",
    "Casual Dark Blue",
    "Green Hoddie",
    "Indigenous",
    "Ninja",
    "Magenta Hoodie",
    "Maroon Hoodie",
    "Purple Hoodie",
    "Relaxed Blue",
    "Relaxed Orange",
    "Space Blue",
    "Space Indigo",
    "Traditional Blue",
    "Traditional Crimson",
    "Traditional Magenta",
    "Traditional Orange",
    "West Papua Shaman",
    "Ol Glas Shaman",
    "Papua Shaman",
    "Kebatinan Shaman",
    "Kejawen Shaman",
  ],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  Sarong: ["Bald", "Blangkon"],
  "Ol Glas Shaman": ["Bald", "Sarong", "Indigenous"],
  "Papua Shaman": ["Bald", "Sarong", "Indigenous"],
  "West Papua Shaman": ["Bald", "Sarong", "Indigenous"],
  "Ol Glas Shaman": ["Bald", "Sarong", "Indigenous"],
  "Papua Shaman": ["Bald", "Sarong", "Indigenous"],
  "Kebatinan Shaman": ["Bald", "Indigenous"],
  "Kejawen Shaman": ["Bald", "Indigenous"],
  Jester: ["The Ace of Knaves", "Focused", "Air Jesters"],
  Joker: ["Prince of Chaos", "Focused", "Air Jokers"],
  "Space Blue": ["Helmet Blue"],
  "Space Indigo": ["Helmet Indigo"],
};

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  /*
  Helmet: "Space Helmet",
  "gold chain": "GOLDEN NECKLACE",*/
};

const debugLogs = false;

const format = {
  width: 2800,
  height: 2800,
};

const background = {
  generate: false,
  brightness: "80%",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_tybe
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
