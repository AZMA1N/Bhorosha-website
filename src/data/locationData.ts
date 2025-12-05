// Realistic agricultural land lease rates in Bangladesh
// Based on average lease rates: ৳8,000-15,000 per bigha/year (1 bigha = 33 decimals)
// Converted to monthly rate per decimal: ৳20-40/decimal/month
// These rates include profit share from crops (typically 10-20% of yield goes to landowner)

// Base rates per decimal per MONTH (by Division)
export const baseRates: Record<string, number> = {
    'Dhaka': 45,      // Higher due to proximity to capital, better infrastructure
    'Chittagong': 40, // Port city region, good logistics
    'Sylhet': 35,     // Tea and rice growing region
    'Rajshahi': 32,   // Major rice and mango belt
    'Khulna': 30,     // Shrimp and agriculture region
    'Barisal': 28,    // Coastal agriculture
    'Rangpur': 25,    // Lower land values, rice focused
    'Mymensingh': 33, // Fertile agricultural zone
};

// Specific rates per District per decimal per MONTH (overrides Division base rate)
export const districtRates: Record<string, number> = {
    // Dhaka Division - Higher rates near urban areas
    'Dhaka': 55, 'Gazipur': 50, 'Narayanganj': 52, 'Tangail': 42,
    'Narsingdi': 45, 'Manikganj': 38, 'Munshiganj': 44, 'Faridpur': 35,

    // Chittagong Division
    'Chittagong': 48, 'Comilla': 42, 'Feni': 38, 'Brahmanbaria': 36,
    'Noakhali': 34, 'Chandpur': 37, 'Cox\'s Bazar': 40,

    // Sylhet Division - Tea and wetland rice
    'Sylhet': 40, 'Moulvibazar': 38, 'Habiganj': 35, 'Sunamganj': 30,

    // Rajshahi Division - Rice and mango belt
    'Rajshahi': 35, 'Bogra': 36, 'Pabna': 32, 'Naogaon': 30,
    'Natore': 31, 'Chapainawabganj': 34,

    // Khulna Division - Shrimp and coastal agriculture
    'Khulna': 33, 'Jessore': 35, 'Satkhira': 32, 'Kushtia': 33, 'Jhenaidah': 30,

    // Barisal Division - Coastal rice and vegetables
    'Barisal': 30, 'Patuakhali': 27, 'Bhola': 25, 'Pirojpur': 26,

    // Rangpur Division - Northern agricultural zone
    'Rangpur': 28, 'Dinajpur': 30, 'Gaibandha': 26, 'Kurigram': 22,

    // Mymensingh Division - Fertile plains
    'Mymensingh': 35, 'Jamalpur': 30, 'Sherpur': 28, 'Netrokona': 27,
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

// Multipliers based on land type (reflects actual yield differences)
// Agricultural: Base rate for standard crops (rice, wheat, vegetables)
// Orchard: Higher returns from fruits (mango, litchi, guava) - 40-60% premium
// Fallow: Lower initial returns but can be developed - 30% less
// Pond: Fish/shrimp farming has good returns - 80% premium in coastal areas
export const typeMultipliers: Record<string, number> = {
    'Agricultural': 1.0,   // Base rice/crop farming
    'Orchard': 1.5,        // Fruit orchards yield 50% more
    'Fallow': 0.7,         // Unused land, needs development
    'Pond': 1.8,           // Fish/shrimp farming - high returns
};
