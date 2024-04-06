type WeightBarType = 'Steel' | 'Lead' | 'Tungsten';
type WeightBarLength = 3 | 5 | 7;

interface WeightBarSpecs {
  od: string;
  type: WeightBarType;
  length: WeightBarLength;
  weight: number;
}

export const weightBarsData: WeightBarSpecs[] = [
  { od: '7/8"', type: 'Steel', length: 3, weight: 5 },
  { od: '7/8"', type: 'Steel', length: 5, weight: 8 },
  { od: '7/8"', type: 'Steel', length: 7, weight: 11 },
  { od: '1"', type: 'Steel', length: 3, weight: 6 },
  { od: '1"', type: 'Steel', length: 5, weight: 11 },
  { od: '1"', type: 'Steel', length: 7, weight: 16 },
  { od: '1"', type: 'Tungsten', length: 3, weight: 12 },
  { od: '1"', type: 'Tungsten', length: 5, weight: 20 },
  { od: '1"', type: 'Tungsten', length: 7, weight: 29 },
  { od: '1 3/8"', type: 'Steel', length: 3, weight: 13 },
  { od: '1 3/8"', type: 'Steel', length: 5, weight: 22 },
  { od: '1 3/8"', type: 'Steel', length: 7, weight: 32 },
  { od: '1 3/8"', type: 'Lead', length: 3, weight: 16 },
  { od: '1 3/8"', type: 'Lead', length: 5, weight: 27 },
  { od: '1 3/8"', type: 'Lead', length: 7, weight: 39 },
  { od: '1 3/8"', type: 'Tungsten', length: 3, weight: 21 },
  { od: '1 3/8"', type: 'Tungsten', length: 5, weight: 37 },
  { od: '1 3/8"', type: 'Tungsten', length: 7, weight: 53 },
  { od: '1 7/16"', type: 'Steel', length: 3, weight: 14 },
  { od: '1 7/16"', type: 'Steel', length: 5, weight: 24 },
  { od: '1 7/16"', type: 'Steel', length: 7, weight: 34 },
  { od: '1 7/16"', type: 'Lead', length: 3, weight: 16 },
  { od: '1 7/16"', type: 'Lead', length: 5, weight: 30 },
  { od: '1 7/16"', type: 'Lead', length: 7, weight: 43 },
  { od: '1 7/16"', type: 'Tungsten', length: 3, weight: 23 },
  { od: '1 7/16"', type: 'Tungsten', length: 5, weight: 40 },
  { od: '1 7/16"', type: 'Tungsten', length: 7, weight: 57 },
  { od: '1 9/16"', type: 'Lead', length: 3, weight: 21 },
  { od: '1 9/16"', type: 'Lead', length: 5, weight: 36 },
  { od: '1 9/16"', type: 'Lead', length: 7, weight: 52 },
  { od: '1 11/16"', type: 'Steel', length: 3, weight: 20 },
  { od: '1 11/16"', type: 'Steel', length: 5, weight: 34 },
  { od: '1 11/16"', type: 'Steel', length: 7, weight: 48 },
  { od: '1 11/16"', type: 'Lead', length: 3, weight: 25 },
  { od: '1 11/16"', type: 'Lead', length: 5, weight: 43 },
  { od: '1 11/16"', type: 'Lead', length: 7, weight: 61 },
  { od: '1 11/16"', type: 'Tungsten', length: 3, weight: 34 },
  { od: '1 11/16"', type: 'Tungsten', length: 5, weight: 59 },
  { od: '1 11/16"', type: 'Tungsten', length: 7, weight: 83 },
  { od: '2"', type: 'Steel', length: 3, weight: 28 },
  { od: '2"', type: 'Steel', length: 5, weight: 49 },
  { od: '2"', type: 'Steel', length: 7, weight: 69 },
  { od: '2"', type: 'Lead', length: 3, weight: 37 },
  { od: '2"', type: 'Lead', length: 5, weight: 63 },
  { od: '2"', type: 'Lead', length: 7, weight: 90 },
  { od: '2"', type: 'Tungsten', length: 3, weight: 53 },
  { od: '2"', type: 'Tungsten', length: 5, weight: 87 },
  { od: '2"', type: 'Tungsten', length: 7, weight: 122 },
];
