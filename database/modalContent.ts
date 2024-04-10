import { PathNamesType } from './routes';

type ModalContentType = {
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
};
