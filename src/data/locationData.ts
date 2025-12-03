// Base rates per decimal (by Division)
export const baseRates: Record<string, number> = {
    'Dhaka': 5000,
    'Chittagong': 4500,
    'Sylhet': 4000,
    'Rajshahi': 3500,
    'Khulna': 3500,
    'Barisal': 3000,
    'Rangpur': 3000,
    'Mymensingh': 3500,
};

// Specific rates per District (overrides Division base rate)
export const districtRates: Record<string, number> = {
    // Dhaka Division
    'Dhaka': 6000, 'Gazipur': 5500, 'Narayanganj': 5800, 'Tangail': 4800,
    'Narsingdi': 5200, 'Manikganj': 4500, 'Munshiganj': 5000, 'Faridpur': 4200,

    // Chittagong Division
    'Chittagong': 5500, 'Comilla': 5000, 'Feni': 4800, 'Brahmanbaria': 4500,
    'Noakhali': 4200, 'Chandpur': 4600, 'Cox\'s Bazar': 5200,

    // Sylhet Division
    'Sylhet': 4800, 'Moulvibazar': 4500, 'Habiganj': 4200, 'Sunamganj': 3800,

    // Rajshahi Division
    'Rajshahi': 4000, 'Bogra': 4200, 'Pabna': 3800, 'Naogaon': 3600,
    'Natore': 3800, 'Chapainawabganj': 3900,

    // Khulna Division
    'Khulna': 4000, 'Jessore': 4200, 'Satkhira': 3800, 'Kushtia': 3900, 'Jhenaidah': 3700,

    // Barisal Division
    'Barisal': 3500, 'Patuakhali': 3200, 'Bhola': 3000, 'Pirojpur': 3100,

    // Rangpur Division
    'Rangpur': 3500, 'Dinajpur': 3600, 'Gaibandha': 3200, 'Kurigram': 2800,

    // Mymensingh Division
    'Mymensingh': 4000, 'Jamalpur': 3600, 'Sherpur': 3500, 'Netrokona': 3400,
};

// Districts by Division
export const districtsByDivision: Record<string, string[]> = {
    'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Narsingdi', 'Manikganj', 'Munshiganj', 'Faridpur'],
    'Chittagong': ['Chittagong', 'Comilla', 'Feni', 'Brahmanbaria', 'Noakhali', 'Chandpur', 'Cox\'s Bazar'],
    'Sylhet': ['Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj'],
    'Rajshahi': ['Rajshahi', 'Bogra', 'Pabna', 'Naogaon', 'Natore', 'Chapainawabganj'],
    'Khulna': ['Khulna', 'Jessore', 'Satkhira', 'Kushtia', 'Jhenaidah'],
    'Barisal': ['Barisal', 'Patuakhali', 'Bhola', 'Pirojpur'],
    'Rangpur': ['Rangpur', 'Dinajpur', 'Gaibandha', 'Kurigram'],
    'Mymensingh': ['Mymensingh', 'Jamalpur', 'Sherpur', 'Netrokona'],
};

// Multipliers based on land type
export const typeMultipliers: Record<string, number> = {
    'Agricultural': 1.0,
    'Orchard': 1.5,
    'Fallow': 0.8,
    'Pond': 1.2,
};
