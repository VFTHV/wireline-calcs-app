import { PathNamesType } from './routes';

export type ModalContentType = {
  [key in keyof Partial<PathNamesType>]: {
    title: string;
    content: string[];
  };
};

export const modalContent: ModalContentType = {
  units: {
    title: 'Measurement Units Help',
    content: [
      'Here you can change measurement units that you will be using for your calculations',
      'Output units will also be in the units of your preference',
      'This preference will be saved if used on the same device and browser',
    ],
  },
  weakpoint: {
    title: 'Weak Point Help',
    content: [
      'Step 1. Choose your cable type. If MANUAL cable selection is chosen, input OUTER BREAKING STRENGTH, WEIGHT IN AIR, MAX.RECOMMENDED TENSION manually',
      'Step 2. Choose Environment: FLUID or GAS. Cable weight is lighter in fluid than in gas',
      'Step 3. Input the Toolstring Weight to be used and planned maximum run in hole Depth',
      'Step 4. Calculator returns the following',
      'TOTAL CABLE WEIGHT at maximum Depth',
      'MAX WEAKPOINT STRENGTH: maximum calculated tension to be applied at cablehead based on cable MAX. RECOMMENDED TENSION and maximum Depth',
      'NUMBER OF OUTER WIRES: amount of outer armors to be used for rehead at weakpoint',
      'TOOL WEIGHT % OF WEAKPOINT: how much toolstring weighs in relation to weakpoint strength indicated as percentage. Iftoolstring weighs more than 50% of weakpoint strength, it is a risk',
    ],
  },
  weightbar: {
    title: 'Weight Bar Help',
    content: [
      'Step 1. Input cable diameter to be used in "Cable Diameter" input box',
      'Step 2. Input the wellhead pressure into the "Well Pressure" input box',
      'Step 3. Input the toolstring weight to be used into the "Tool Weight" input box',
      'Step 4. Input cable diameter to be used into the "Percent over Balance" input box',
      'Step 5. Calculator returns the following',
      "BALANCE WEIGHT of the toolstring: it will neither be pushed out of the hole by pressure nor will be able to run in hole under it's weight",
      'FINAL WEIGHT: recommended total toolstring weight with added Percent over Balance weight',
      'SINKER BAR WEIGHT: additional weight required for the TOOL WEIGHT input box to reach the FINAL WEIGHT',
      'Step 6. Additionally, weight bar database is available at the bottom of the page for your information',
    ],
  },
  stretch: {
    title: 'Cable Stretch Help',
    content: [
      'Step 1. Choose your cable type. If MANUAL cable selection is chosen, input CABLE STRETCH / (1Kft * 1Klbs) manually',
      'Step 2. Input the tension into the CURRENT TENSION input box',
      'Step 3. Input current depth into the DEPTH input box',
      'Step 4. Calculator returns the TOTAL CABLE STRETCH amount based on inputs above',
    ],
  },
  keyseat: {
    title: 'Cable Stuck Depth (Keyseat) Help',
    content: [
      'Purpose. If you are unsure whther your cable`(not logging tools)`} got stuck then this calculator to determine cable stuck depth',
      'Step 1. Choose Cable type or enter manually the Cable Stretch Coefficient',
      'Step 2. Set your winch tension to approximate cable + toolstring weight in the well fluid. Note your current depth and tension',
      'Step 3. Pull your winch safely and note your tension difference and depth change that you observed',
      'Step 4. Enter tension difference and depth change values the into corresponding boxes on the page',
      'Disclaimer. Please note that calculated values are linear calculations. The real cable stuck depth may differ from calculation. This difference may be caused by many factors, such as well curvature, temperature, wireline cable age, tension meter inaccuracy etc.',
    ],
  },
  tensionAtDepth: {
    title: 'Max. Tension at Depth Help',
    content: [
      'Step 1. Choose your cable type. If MANUAL cable selection is chosen, input OUTER ARMOR BREAKING STRENGTH, INNER ARMOR BREAKING STRENGTH, CABLE WEIGHT IN AIR manually',
      'Step 2. Choose Environment: FLUID or GAS. Cable weight is lighter in fluid than in gas',
      'Step 3. Enter the Depth, Number of Outer Armors Used, Nuber of Inner Armors Used, Percent of Weak Point Breaking Strength into the appropriate input boxes',
      'Step 4. Calculator returns the following:',
      'CONSERVATIVE PULL: tension at surface required to pull indicated percentage of weak point. Safety factor of 0.8 is applied to this tension',
      'MAX PULL: tension at surface required to pull indicated percentage of weak point. No safety factor applied at this calculation',
    ],
  },
  csgSpecs: {
    title: 'Casing Specs Help',
    content: [
      'API Casing Specs The API (American Petroleum Institute) casing sizes are standard measurements used in the oil and gas industry to specify the diameter and wall thickness of casings. These sizes are essential for ensuring compatibility and proper functioning of wellbore equipment',
    ],
  },
};
