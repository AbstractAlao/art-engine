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
  "A Collection of 10,000 algorithmically generated nfts that express the underlying aspcted of the metaverse";
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
    growEditionSizeTo: 1000,
    namePrefix: "Cryptonaut", // Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "Background" },
      { name: "Base Character" },
      {
        name: "Expression",
        options: {
          bypassDNA: false,
        },
      },
      { name: "Clothes" },
      { name: "Necklace" },
      { name: "Eyes" },
      { name: "Earings" },
      { name: "Hair" },
      // { name: "Beard" },
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
  "Brown Beard": [
    "Beaded",
    "BTC Pendant",
    "ETH Pendant",
    "Jade Pendant",
    "Spiked",
  ],
  "Copper Beard": [
    "Beaded",
    "BTC Pendant",
    "ETH Pendant",
    "Jade Pendant",
    "Spiked",
  ],
  "Magenta Beard": [
    "Beaded",
    "BTC Pendant",
    "ETH Pendant",
    "Jade Pendant",
    "Spiked",
  ],
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
  Aqua: ["Blangkon", "Indigenous"],
  Beige: ["Blangkon", "Indigenous"],
  Brown: ["Blangkon", "Indigenous"],
  Charcoal: ["Blangkon", "Indigenous"],
  Diamond: ["Blangkon", "Indigenous"],
  Ebony: ["Blangkon", "Indigenous"],
  Glitch: ["Blangkon", "Indigenous"],
  Gold: ["Blangkon", "Indigenous"],
  Graphite: ["Blangkon", "Indigenous"],
  Gray: ["Blangkon", "Indigenous"],
  Ivory: ["Blangkon", "Indigenous"],
  Onyx: ["Blangkon", "Indigenous"],
  Sapphire: ["Blangkon", "Indigenous"],
  Spectrum: ["Blangkon", "Indigenous"],
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
  "West Papua Shaman": ["Bald", "Blangkon", "Indigenous"],
  "Kebatinan Shaman": ["Bald", "Blangkon", "Indigenous"],
  "Kejawen Shaman": ["Bald", "Blangkon", "Indigenous"],
  "Ol Glas Shaman": ["Bald", "Blangkon", "Indigenous"],
  "Papua Shaman": ["Bald", "Blangkon", "Indigenous"],
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
