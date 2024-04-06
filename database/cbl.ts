export interface FluidSpecs {
  type: string;
  slowness: number;
  density: number;
}

export const fluidsData: FluidSpecs[] = [
  { type: 'Fresh Water', slowness: 204, density: 8.35 },
  { type: 'Water + 10% NaCl', slowness: 193, density: 9.0 },
  { type: 'Water + 25% NaCl', slowness: 174, density: 10 },
  { type: 'Water + KCl', slowness: 189, density: 10 },
  { type: 'Water + 36% CaCl2', slowness: 170, density: 11.3 },
  { type: 'Water + 58% CaBr2', slowness: 179, density: 15.3 },
  { type: 'Sea Water', slowness: 199, density: 8.6 },
  { type: 'Diesel', slowness: 220, density: 7.1 },
  { type: 'Water-based mud 12ppg', slowness: 214, density: 12 },
  { type: 'Water-based mud 15ppg', slowness: 216, density: 15 },
  { type: 'Oil-based mud 7.8ppg', slowness: 230, density: 7.8 },
  { type: 'Oil-based mud 12.6ppg', slowness: 245, density: 12.6 },
  { type: 'Heavy drilling mud', slowness: 201, density: 17 },
];
