// Comprehensive Indian Cities Database with coordinates and demographics
export interface City {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  population: number;
  tier: 1 | 2 | 3 | 4;
}

export const indianCities: City[] = [
  // Tier 1 Cities (Major Metros)
  { id: "mumbai", name: "Mumbai", state: "Maharashtra", lat: 19.0760, lng: 72.8777, population: 20411000, tier: 1 },
  { id: "delhi", name: "Delhi", state: "Delhi", lat: 28.7041, lng: 77.1025, population: 18980000, tier: 1 },
  { id: "bangalore", name: "Bangalore", state: "Karnataka", lat: 12.9716, lng: 77.5946, population: 12765000, tier: 1 },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", lat: 17.3850, lng: 78.4867, population: 10494000, tier: 1 },
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat", lat: 23.0225, lng: 72.5714, population: 8450000, tier: 1 },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", lat: 13.0827, lng: 80.2707, population: 11235000, tier: 1 },
  { id: "kolkata", name: "Kolkata", state: "West Bengal", lat: 22.5726, lng: 88.3639, population: 15134000, tier: 1 },
  { id: "pune", name: "Pune", state: "Maharashtra", lat: 18.5204, lng: 73.8567, population: 7764000, tier: 1 },
  
  // Tier 2 Cities (Major Urban Centers)
  { id: "surat", name: "Surat", state: "Gujarat", lat: 21.1702, lng: 72.8311, population: 6081000, tier: 2 },
  { id: "jaipur", name: "Jaipur", state: "Rajasthan", lat: 26.9124, lng: 75.7873, population: 3971000, tier: 2 },
  { id: "lucknow", name: "Lucknow", state: "Uttar Pradesh", lat: 26.8467, lng: 80.9462, population: 3382000, tier: 2 },
  { id: "kanpur", name: "Kanpur", state: "Uttar Pradesh", lat: 26.4499, lng: 80.3319, population: 3200000, tier: 2 },
  { id: "nagpur", name: "Nagpur", state: "Maharashtra", lat: 21.1458, lng: 79.0882, population: 2696000, tier: 2 },
  { id: "indore", name: "Indore", state: "Madhya Pradesh", lat: 22.7196, lng: 75.8577, population: 2677000, tier: 2 },
  { id: "thane", name: "Thane", state: "Maharashtra", lat: 19.2183, lng: 72.9781, population: 2171000, tier: 2 },
  { id: "bhopal", name: "Bhopal", state: "Madhya Pradesh", lat: 23.2599, lng: 77.4126, population: 2063000, tier: 2 },
  { id: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", lat: 17.6868, lng: 83.2185, population: 2035000, tier: 2 },
  { id: "pimpri-chinchwad", name: "Pimpri-Chinchwad", state: "Maharashtra", lat: 18.6298, lng: 73.7997, population: 1729000, tier: 2 },
  { id: "patna", name: "Patna", state: "Bihar", lat: 25.5941, lng: 85.1376, population: 2049000, tier: 2 },
  { id: "vadodara", name: "Vadodara", state: "Gujarat", lat: 22.3072, lng: 73.1812, population: 1817000, tier: 2 },
  { id: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", lat: 28.6692, lng: 77.4538, population: 1729000, tier: 2 },
  { id: "ludhiana", name: "Ludhiana", state: "Punjab", lat: 30.9010, lng: 75.8573, population: 1618000, tier: 2 },
  { id: "agra", name: "Agra", state: "Uttar Pradesh", lat: 27.1767, lng: 78.0081, population: 1585000, tier: 2 },
  { id: "nashik", name: "Nashik", state: "Maharashtra", lat: 19.9975, lng: 73.7898, population: 1562000, tier: 2 },
  { id: "faridabad", name: "Faridabad", state: "Haryana", lat: 28.4089, lng: 77.3178, population: 1394000, tier: 2 },
  { id: "meerut", name: "Meerut", state: "Uttar Pradesh", lat: 28.9845, lng: 77.7064, population: 1424000, tier: 2 },
  { id: "rajkot", name: "Rajkot", state: "Gujarat", lat: 22.3039, lng: 70.8022, population: 1390000, tier: 2 },
  { id: "varanasi", name: "Varanasi", state: "Uttar Pradesh", lat: 25.3176, lng: 82.9739, population: 1435000, tier: 2 },
  { id: "srinagar", name: "Srinagar", state: "Jammu and Kashmir", lat: 34.0837, lng: 74.7973, population: 1236000, tier: 2 },
  { id: "aurangabad", name: "Aurangabad", state: "Maharashtra", lat: 19.8762, lng: 75.3433, population: 1175000, tier: 2 },
  { id: "dhanbad", name: "Dhanbad", state: "Jharkhand", lat: 23.7957, lng: 86.4304, population: 1162000, tier: 2 },
  { id: "amritsar", name: "Amritsar", state: "Punjab", lat: 31.6340, lng: 74.8723, population: 1132000, tier: 2 },
  { id: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", lat: 19.0330, lng: 73.0297, population: 1120000, tier: 2 },
  { id: "allahabad", name: "Allahabad", state: "Uttar Pradesh", lat: 25.4358, lng: 81.8463, population: 1117000, tier: 2 },
  { id: "ranchi", name: "Ranchi", state: "Jharkhand", lat: 23.3441, lng: 85.3096, population: 1073000, tier: 2 },
  { id: "howrah", name: "Howrah", state: "West Bengal", lat: 22.5958, lng: 88.2636, population: 1077000, tier: 2 },
  { id: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", lat: 11.0168, lng: 76.9558, population: 1050000, tier: 2 },
  { id: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh", lat: 23.1815, lng: 79.9864, population: 1055000, tier: 2 },
  { id: "gwalior", name: "Gwalior", state: "Madhya Pradesh", lat: 26.2183, lng: 78.1828, population: 1054000, tier: 2 },
  { id: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", lat: 16.5062, lng: 80.6480, population: 1048000, tier: 2 },
  { id: "jodhpur", name: "Jodhpur", state: "Rajasthan", lat: 26.2389, lng: 73.0243, population: 1033000, tier: 2 },
  { id: "madurai", name: "Madurai", state: "Tamil Nadu", lat: 9.9252, lng: 78.1198, population: 1017000, tier: 2 },
  { id: "raipur", name: "Raipur", state: "Chhattisgarh", lat: 21.2514, lng: 81.6296, population: 1010000, tier: 2 },
  { id: "kota", name: "Kota", state: "Rajasthan", lat: 25.2138, lng: 75.8648, population: 1001000, tier: 2 },
  
  // Tier 3 Cities (Emerging Urban Areas)
  { id: "chandigarh", name: "Chandigarh", state: "Chandigarh", lat: 30.7333, lng: 76.7794, population: 960000, tier: 3 },
  { id: "guwahati", name: "Guwahati", state: "Assam", lat: 26.1445, lng: 91.7362, population: 963000, tier: 3 },
  { id: "solapur", name: "Solapur", state: "Maharashtra", lat: 17.6599, lng: 75.9064, population: 951000, tier: 3 },
  { id: "hubli-dharwad", name: "Hubli-Dharwad", state: "Karnataka", lat: 15.3647, lng: 75.1240, population: 943000, tier: 3 },
  { id: "bareilly", name: "Bareilly", state: "Uttar Pradesh", lat: 28.3670, lng: 79.4304, population: 903000, tier: 3 },
  { id: "moradabad", name: "Moradabad", state: "Uttar Pradesh", lat: 28.8389, lng: 78.7378, population: 889000, tier: 3 },
  { id: "mysore", name: "Mysore", state: "Karnataka", lat: 12.2958, lng: 76.6394, population: 887000, tier: 3 },
  { id: "gurgaon", name: "Gurgaon", state: "Haryana", lat: 28.4595, lng: 77.0266, population: 876000, tier: 3 },
  { id: "aligarh", name: "Aligarh", state: "Uttar Pradesh", lat: 27.8974, lng: 78.0880, population: 872000, tier: 3 },
  { id: "jalandhar", name: "Jalandhar", state: "Punjab", lat: 31.3260, lng: 75.5762, population: 862000, tier: 3 },
  { id: "tiruchirappalli", name: "Tiruchirappalli", state: "Tamil Nadu", lat: 10.7905, lng: 78.7047, population: 847000, tier: 3 },
  { id: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", lat: 20.2961, lng: 85.8245, population: 837000, tier: 3 },
  { id: "salem", name: "Salem", state: "Tamil Nadu", lat: 11.6643, lng: 78.1460, population: 826000, tier: 3 },
  { id: "warangal", name: "Warangal", state: "Telangana", lat: 17.9689, lng: 79.5941, population: 811000, tier: 3 },
  { id: "mira-bhayandar", name: "Mira-Bhayandar", state: "Maharashtra", lat: 19.2952, lng: 72.8544, population: 809000, tier: 3 },
  { id: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", lat: 8.5241, lng: 76.9366, population: 957000, tier: 3 },
  { id: "guntur", name: "Guntur", state: "Andhra Pradesh", lat: 16.3067, lng: 80.4365, population: 743000, tier: 3 },
  { id: "bhiwandi", name: "Bhiwandi", state: "Maharashtra", lat: 19.2961, lng: 73.0635, population: 709000, tier: 3 },
  { id: "saharanpur", name: "Saharanpur", state: "Uttar Pradesh", lat: 29.9680, lng: 77.5460, population: 705000, tier: 3 },
  { id: "gorakhpur", name: "Gorakhpur", state: "Uttar Pradesh", lat: 26.7606, lng: 83.3732, population: 674000, tier: 3 },
  { id: "bikaner", name: "Bikaner", state: "Rajasthan", lat: 28.0229, lng: 73.3119, population: 644000, tier: 3 },
  { id: "amravati", name: "Amravati", state: "Maharashtra", lat: 20.9374, lng: 77.7796, population: 647000, tier: 3 },
  { id: "noida", name: "Noida", state: "Uttar Pradesh", lat: 28.5355, lng: 77.3910, population: 642000, tier: 3 },
  { id: "jamshedpur", name: "Jamshedpur", state: "Jharkhand", lat: 22.8046, lng: 86.2029, population: 629000, tier: 3 },
  { id: "bhilai", name: "Bhilai", state: "Chhattisgarh", lat: 21.2090, lng: 81.3790, population: 625000, tier: 3 },
  { id: "cuttack", name: "Cuttack", state: "Odisha", lat: 20.4625, lng: 85.8830, population: 606000, tier: 3 },
  { id: "firozabad", name: "Firozabad", state: "Uttar Pradesh", lat: 27.1484, lng: 78.3948, population: 604000, tier: 3 },
  { id: "kochi", name: "Kochi", state: "Kerala", lat: 9.9312, lng: 76.2673, population: 677000, tier: 3 },
  { id: "bhavnagar", name: "Bhavnagar", state: "Gujarat", lat: 21.7645, lng: 72.1519, population: 593000, tier: 3 },
  { id: "dehradun", name: "Dehradun", state: "Uttarakhand", lat: 30.3165, lng: 78.0322, population: 578000, tier: 3 },
  { id: "durgapur", name: "Durgapur", state: "West Bengal", lat: 23.5204, lng: 87.3119, population: 566000, tier: 3 },
  { id: "asansol", name: "Asansol", state: "West Bengal", lat: 23.6739, lng: 86.9524, population: 564000, tier: 3 },
  { id: "nanded", name: "Nanded", state: "Maharashtra", lat: 19.1383, lng: 77.3210, population: 550000, tier: 3 },
  { id: "kolhapur", name: "Kolhapur", state: "Maharashtra", lat: 16.7050, lng: 74.2433, population: 549000, tier: 3 },
  { id: "ajmer", name: "Ajmer", state: "Rajasthan", lat: 26.4499, lng: 74.6399, population: 542000, tier: 3 },
  { id: "akola", name: "Akola", state: "Maharashtra", lat: 20.7002, lng: 77.0082, population: 537000, tier: 3 },
  { id: "gulbarga", name: "Gulbarga", state: "Karnataka", lat: 17.3297, lng: 76.8343, population: 532000, tier: 3 },
  { id: "jamnagar", name: "Jamnagar", state: "Gujarat", lat: 22.4707, lng: 70.0577, population: 529000, tier: 3 },
  { id: "ujjain", name: "Ujjain", state: "Madhya Pradesh", lat: 23.1765, lng: 75.7885, population: 515000, tier: 3 },
  { id: "loni", name: "Loni", state: "Uttar Pradesh", lat: 28.7496, lng: 77.2868, population: 516000, tier: 3 },
  { id: "siliguri", name: "Siliguri", state: "West Bengal", lat: 26.7271, lng: 88.3953, population: 513000, tier: 3 },
  { id: "jhansi", name: "Jhansi", state: "Uttar Pradesh", lat: 25.4484, lng: 78.5685, population: 507000, tier: 3 },
  { id: "ulhasnagar", name: "Ulhasnagar", state: "Maharashtra", lat: 19.2183, lng: 73.1582, population: 506000, tier: 3 },
  { id: "jammu", name: "Jammu", state: "Jammu and Kashmir", lat: 32.7266, lng: 74.8570, population: 503000, tier: 3 },
  { id: "sangli-miraj-kupwad", name: "Sangli-Miraj-Kupwad", state: "Maharashtra", lat: 16.8524, lng: 74.5815, population: 502000, tier: 3 },
  { id: "mangalore", name: "Mangalore", state: "Karnataka", lat: 12.9141, lng: 74.8560, population: 488000, tier: 3 },
  { id: "erode", name: "Erode", state: "Tamil Nadu", lat: 11.3410, lng: 77.7172, population: 498000, tier: 3 },
  { id: "belgaum", name: "Belgaum", state: "Karnataka", lat: 15.8497, lng: 74.4977, population: 488000, tier: 3 },
  { id: "ambattur", name: "Ambattur", state: "Tamil Nadu", lat: 13.1143, lng: 80.1548, population: 466000, tier: 3 },
  { id: "tirunelveli", name: "Tirunelveli", state: "Tamil Nadu", lat: 8.7139, lng: 77.7567, population: 474000, tier: 3 },
  { id: "malegaon", name: "Malegaon", state: "Maharashtra", lat: 20.5579, lng: 74.5287, population: 471000, tier: 3 },
  { id: "gaya", name: "Gaya", state: "Bihar", lat: 24.7955, lng: 85.0002, population: 470000, tier: 3 },
  
  // Additional Tier 3 & 4 cities continuing the comprehensive list...
  { id: "tiruppur", name: "Tiruppur", state: "Tamil Nadu", lat: 11.1075, lng: 77.3398, population: 444000, tier: 3 },
  { id: "udaipur", name: "Udaipur", state: "Rajasthan", lat: 24.5854, lng: 73.7125, population: 451000, tier: 3 },
  { id: "kakinada", name: "Kakinada", state: "Andhra Pradesh", lat: 16.9891, lng: 82.2475, population: 443000, tier: 3 },
  { id: "davanagere", name: "Davanagere", state: "Karnataka", lat: 14.4644, lng: 75.9218, population: 435000, tier: 3 },
  { id: "kozhikode", name: "Kozhikode", state: "Kerala", lat: 11.2588, lng: 75.7804, population: 432000, tier: 3 },
  { id: "maheshtala", name: "Maheshtala", state: "West Bengal", lat: 22.5092, lng: 88.2475, population: 449000, tier: 3 },
  { id: "rajpur-sonarpur", name: "Rajpur Sonarpur", state: "West Bengal", lat: 22.4491, lng: 88.3883, population: 448000, tier: 3 },
  { id: "rajahmundry", name: "Rajahmundry", state: "Andhra Pradesh", lat: 17.0005, lng: 81.8040, population: 341000, tier: 3 },
  { id: "bokaro", name: "Bokaro", state: "Jharkhand", lat: 23.6693, lng: 86.1511, population: 391000, tier: 3 },
  { id: "south-dumdum", name: "South Dumdum", state: "West Bengal", lat: 22.6089, lng: 88.4092, population: 403000, tier: 3 },
  { id: "bellary", name: "Bellary", state: "Karnataka", lat: 15.1394, lng: 76.9214, population: 410000, tier: 3 },
  { id: "patiala", name: "Patiala", state: "Punjab", lat: 30.3398, lng: 76.3869, population: 406000, tier: 3 },
  { id: "gopalpur", name: "Gopalpur", state: "West Bengal", lat: 22.6176, lng: 88.3832, population: 395000, tier: 3 },
  { id: "agartala", name: "Agartala", state: "Tripura", lat: 23.8315, lng: 91.2868, population: 400000, tier: 3 },
  { id: "bhagalpur", name: "Bhagalpur", state: "Bihar", lat: 25.2425, lng: 86.9842, population: 398000, tier: 3 },
  { id: "muzaffarnagar", name: "Muzaffarnagar", state: "Uttar Pradesh", lat: 29.4727, lng: 77.7085, population: 392000, tier: 3 },
  { id: "bhatpara", name: "Bhatpara", state: "West Bengal", lat: 22.8697, lng: 88.4019, population: 386000, tier: 3 },
  { id: "panihati", name: "Panihati", state: "West Bengal", lat: 22.6938, lng: 88.3738, population: 377000, tier: 3 },
  { id: "latur", name: "Latur", state: "Maharashtra", lat: 18.3983, lng: 76.5604, population: 383000, tier: 3 },
  { id: "dhule", name: "Dhule", state: "Maharashtra", lat: 20.9042, lng: 74.7749, population: 376000, tier: 3 },
  { id: "rohtak", name: "Rohtak", state: "Haryana", lat: 28.8955, lng: 76.6066, population: 374000, tier: 3 },
  { id: "korba", name: "Korba", state: "Chhattisgarh", lat: 22.3595, lng: 82.7501, population: 364000, tier: 3 },
  { id: "bhilwara", name: "Bhilwara", state: "Rajasthan", lat: 25.3467, lng: 74.6405, population: 360000, tier: 3 },
  { id: "brahmapur", name: "Brahmapur", state: "Odisha", lat: 19.3150, lng: 84.7941, population: 355000, tier: 3 },
  { id: "muzaffarpur", name: "Muzaffarpur", state: "Bihar", lat: 26.1225, lng: 85.3906, population: 354000, tier: 3 },
  { id: "ahmednagar", name: "Ahmednagar", state: "Maharashtra", lat: 19.0948, lng: 74.7480, population: 350000, tier: 3 },
  { id: "mathura", name: "Mathura", state: "Uttar Pradesh", lat: 27.4924, lng: 77.6737, population: 441000, tier: 3 },
  { id: "kollam", name: "Kollam", state: "Kerala", lat: 8.8932, lng: 76.6141, population: 349000, tier: 3 },
  { id: "avadi", name: "Avadi", state: "Tamil Nadu", lat: 13.1067, lng: 80.0990, population: 345000, tier: 3 },
  { id: "raichur", name: "Raichur", state: "Karnataka", lat: 16.2120, lng: 77.3439, population: 234000, tier: 4 },
  { id: "bhuj", name: "Bhuj", state: "Gujarat", lat: 23.2420, lng: 69.6669, population: 150000, tier: 4 },
  { id: "shimla", name: "Shimla", state: "Himachal Pradesh", lat: 31.1048, lng: 77.1734, population: 170000, tier: 4 },
  { id: "pondicherry", name: "Pondicherry", state: "Puducherry", lat: 11.9416, lng: 79.8083, population: 244000, tier: 3 },
  { id: "shillong", name: "Shillong", state: "Meghalaya", lat: 25.5788, lng: 91.8933, population: 143000, tier: 4 },
  { id: "imphal", name: "Imphal", state: "Manipur", lat: 24.8170, lng: 93.9368, population: 268000, tier: 3 },
  { id: "aizawl", name: "Aizawl", state: "Mizoram", lat: 23.7271, lng: 92.7176, population: 293000, tier: 3 },
  { id: "gangtok", name: "Gangtok", state: "Sikkim", lat: 27.3389, lng: 88.6065, population: 100000, tier: 4 },
  { id: "port-blair", name: "Port Blair", state: "Andaman and Nicobar Islands", lat: 11.6234, lng: 92.7265, population: 100000, tier: 4 },
  { id: "silvassa", name: "Silvassa", state: "Dadra and Nagar Haveli", lat: 20.2737, lng: 73.0135, population: 98000, tier: 4 },
  { id: "kavaratti", name: "Kavaratti", state: "Lakshadweep", lat: 10.5669, lng: 72.6369, population: 11000, tier: 4 },
  
  // More Tier 4 cities from various states
  { id: "haridwar", name: "Haridwar", state: "Uttarakhand", lat: 29.9457, lng: 78.1642, population: 228000, tier: 4 },
  { id: "rishikesh", name: "Rishikesh", state: "Uttarakhand", lat: 30.0869, lng: 78.2676, population: 102000, tier: 4 },
  { id: "alwar", name: "Alwar", state: "Rajasthan", lat: 27.5530, lng: 76.6346, population: 315000, tier: 3 },
  { id: "bharatpur", name: "Bharatpur", state: "Rajasthan", lat: 27.2152, lng: 77.4895, population: 252000, tier: 4 },
  { id: "pali", name: "Pali", state: "Rajasthan", lat: 25.7711, lng: 73.3234, population: 210000, tier: 4 },
  { id: "sikar", name: "Sikar", state: "Rajasthan", lat: 27.6119, lng: 75.1399, population: 237000, tier: 4 },
  { id: "tonk", name: "Tonk", state: "Rajasthan", lat: 26.1542, lng: 75.7849, population: 151000, tier: 4 },
  { id: "beawar", name: "Beawar", state: "Rajasthan", lat: 26.1011, lng: 74.3199, population: 342000, tier: 3 },
  { id: "haldwani", name: "Haldwani", state: "Uttarakhand", lat: 29.2183, lng: 79.5130, population: 156000, tier: 4 },
  { id: "rudrapur", name: "Rudrapur", state: "Uttarakhand", lat: 28.9845, lng: 79.4072, population: 154000, tier: 4 },
  { id: "roorkee", name: "Roorkee", state: "Uttarakhand", lat: 29.8543, lng: 77.8880, population: 118000, tier: 4 },
  { id: "kashipur", name: "Kashipur", state: "Uttarakhand", lat: 29.2153, lng: 78.9570, population: 121000, tier: 4 },
  { id: "ratlam", name: "Ratlam", state: "Madhya Pradesh", lat: 23.3296, lng: 75.0367, population: 264000, tier: 4 },
  { id: "satna", name: "Satna", state: "Madhya Pradesh", lat: 24.6005, lng: 80.8322, population: 283000, tier: 4 },
  { id: "dewas", name: "Dewas", state: "Madhya Pradesh", lat: 22.9676, lng: 76.0534, population: 289000, tier: 4 },
  { id: "murwara", name: "Murwara", state: "Madhya Pradesh", lat: 23.8388, lng: 80.3936, population: 193000, tier: 4 },
  { id: "chhindwara", name: "Chhindwara", state: "Madhya Pradesh", lat: 22.0573, lng: 78.9385, population: 136000, tier: 4 },
  { id: "guna", name: "Guna", state: "Madhya Pradesh", lat: 24.6474, lng: 77.3105, population: 180000, tier: 4 },
  { id: "shivpuri", name: "Shivpuri", state: "Madhya Pradesh", lat: 25.4231, lng: 77.6613, population: 179000, tier: 4 },
  { id: "vidisha", name: "Vidisha", state: "Madhya Pradesh", lat: 23.5251, lng: 77.8081, population: 155000, tier: 4 },
  { id: "chittorgarh", name: "Chittorgarh", state: "Rajasthan", lat: 24.8887, lng: 74.6269, population: 117000, tier: 4 },
  { id: "kishangarh", name: "Kishangarh", state: "Rajasthan", lat: 26.5834, lng: 74.8729, population: 131000, tier: 4 },
  { id: "surendranagar", name: "Surendranagar", state: "Gujarat", lat: 22.7033, lng: 71.6369, population: 179000, tier: 4 },
  { id: "junagadh", name: "Junagadh", state: "Gujarat", lat: 21.5222, lng: 70.4579, population: 320000, tier: 3 },
  { id: "gandhidham", name: "Gandhidham", state: "Gujarat", lat: 23.0752, lng: 70.1329, population: 166000, tier: 4 },
  { id: "veraval", name: "Veraval", state: "Gujarat", lat: 20.9077, lng: 70.3679, population: 163000, tier: 4 },
  { id: "morvi", name: "Morvi", state: "Gujarat", lat: 22.8173, lng: 70.8372, population: 145000, tier: 4 },
  { id: "nadiad", name: "Nadiad", state: "Gujarat", lat: 22.6939, lng: 72.8614, population: 218000, tier: 4 },
  { id: "anand", name: "Anand", state: "Gujarat", lat: 22.5645, lng: 72.9289, population: 225000, tier: 4 },
  { id: "porbandar", name: "Porbandar", state: "Gujarat", lat: 21.6417, lng: 69.6293, population: 217000, tier: 4 },
  { id: "godhra", name: "Godhra", state: "Gujarat", lat: 22.7756, lng: 73.6135, population: 131000, tier: 4 },
  { id: "valsad", name: "Valsad", state: "Gujarat", lat: 20.6337, lng: 72.9342, population: 145000, tier: 4 },
  { id: "navsari", name: "Navsari", state: "Gujarat", lat: 20.9509, lng: 72.9224, population: 163000, tier: 4 },
  { id: "ankleshwar", name: "Ankleshwar", state: "Gujarat", lat: 21.6287, lng: 72.9869, population: 154000, tier: 4 },
  { id: "palanpur", name: "Palanpur", state: "Gujarat", lat: 24.1712, lng: 72.4281, population: 124000, tier: 4 },
  { id: "mehsana", name: "Mehsana", state: "Gujarat", lat: 23.5880, lng: 72.3693, population: 184000, tier: 4 },
  { id: "bhuj-city", name: "Bhuj", state: "Gujarat", lat: 23.2420, lng: 69.6669, population: 150000, tier: 4 },
  { id: "patan", name: "Patan", state: "Gujarat", lat: 23.8502, lng: 72.1213, population: 125000, tier: 4 },
  { id: "gandhingar", name: "Gandhinagar", state: "Gujarat", lat: 23.2156, lng: 72.6369, population: 208000, tier: 4 },
  { id: "botad", name: "Botad", state: "Gujarat", lat: 22.1692, lng: 71.6667, population: 122000, tier: 4 },
  { id: "amreli", name: "Amreli", state: "Gujarat", lat: 21.5991, lng: 71.2165, population: 107000, tier: 4 },
  
  // Maharashtra smaller cities
  { id: "ahmednagar-city", name: "Ahmednagar", state: "Maharashtra", lat: 19.0948, lng: 74.7480, population: 350000, tier: 3 },
  { id: "chandrapur", name: "Chandrapur", state: "Maharashtra", lat: 19.9615, lng: 79.2961, population: 321000, tier: 3 },
  { id: "parbhani", name: "Parbhani", state: "Maharashtra", lat: 19.2608, lng: 76.7739, population: 307000, tier: 4 },
  { id: "ichalkaranji", name: "Ichalkaranji", state: "Maharashtra", lat: 16.6989, lng: 74.4642, population: 287000, tier: 4 },
  { id: "jalgaon", name: "Jalgaon", state: "Maharashtra", lat: 21.0077, lng: 75.5626, population: 460000, tier: 3 },
  { id: "jalna", name: "Jalna", state: "Maharashtra", lat: 19.8347, lng: 75.8800, population: 285000, tier: 4 },
  { id: "latur-city", name: "Latur", state: "Maharashtra", lat: 18.3983, lng: 76.5604, population: 383000, tier: 3 },
  { id: "osmanabad", name: "Osmanabad", state: "Maharashtra", lat: 18.1774, lng: 76.0395, population: 112000, tier: 4 },
  { id: "beed", name: "Beed", state: "Maharashtra", lat: 18.9894, lng: 75.7585, population: 139000, tier: 4 },
  { id: "yavatmal", name: "Yavatmal", state: "Maharashtra", lat: 20.3897, lng: 78.1307, population: 128000, tier: 4 },
  { id: "achalpur", name: "Achalpur", state: "Maharashtra", lat: 21.2579, lng: 77.5091, population: 109000, tier: 4 },
  { id: "gondia", name: "Gondia", state: "Maharashtra", lat: 21.4566, lng: 80.1943, population: 132000, tier: 4 },
  { id: "satara", name: "Satara", state: "Maharashtra", lat: 17.6805, lng: 73.9870, population: 120000, tier: 4 },
  { id: "wardha", name: "Wardha", state: "Maharashtra", lat: 20.7453, lng: 78.5978, population: 129000, tier: 4 },
  { id: "hinganghat", name: "Hinganghat", state: "Maharashtra", lat: 20.5488, lng: 78.8343, population: 116000, tier: 4 },
  
  // Karnataka cities
  { id: "tumkur", name: "Tumkur", state: "Karnataka", lat: 13.3392, lng: 77.1012, population: 305000, tier: 3 },
  { id: "karwar", name: "Karwar", state: "Karnataka", lat: 14.8137, lng: 74.1290, population: 154000, tier: 4 },
  { id: "shimoga", name: "Shimoga", state: "Karnataka", lat: 13.9299, lng: 75.5681, population: 322000, tier: 3 },
  { id: "hospet", name: "Hospet", state: "Karnataka", lat: 15.2694, lng: 76.3869, population: 206000, tier: 4 },
  { id: "bidar", name: "Bidar", state: "Karnataka", lat: 17.9104, lng: 77.5199, population: 217000, tier: 4 },
  { id: "gadag-betageri", name: "Gadag-Betageri", state: "Karnataka", lat: 15.4167, lng: 75.6167, population: 154000, tier: 4 },
  { id: "robertsonpet", name: "Robertsonpet", state: "Karnataka", lat: 12.9569, lng: 78.2750, population: 131000, tier: 4 },
  { id: "hassan", name: "Hassan", state: "Karnataka", lat: 13.0054, lng: 76.0995, population: 133000, tier: 4 },
  { id: "bhadravati", name: "Bhadravati", state: "Karnataka", lat: 13.8485, lng: 75.7076, population: 142000, tier: 4 },
  { id: "chitradurga", name: "Chitradurga", state: "Karnataka", lat: 14.2226, lng: 76.3980, population: 122000, tier: 4 },
  { id: "udupi", name: "Udupi", state: "Karnataka", lat: 13.3409, lng: 74.7421, population: 165000, tier: 4 },
  { id: "kolar", name: "Kolar", state: "Karnataka", lat: 13.1359, lng: 78.1294, population: 138000, tier: 4 },
  { id: "mandya", name: "Mandya", state: "Karnataka", lat: 12.5244, lng: 76.8951, population: 137000, tier: 4 },
  { id: "chikmagalur", name: "Chikmagalur", state: "Karnataka", lat: 13.3161, lng: 75.7720, population: 121000, tier: 4 },
  { id: "bagalkot", name: "Bagalkot", state: "Karnataka", lat: 16.1875, lng: 75.6964, population: 113000, tier: 4 },
  
  // Tamil Nadu cities
  { id: "vellore", name: "Vellore", state: "Tamil Nadu", lat: 12.9165, lng: 79.1325, population: 423000, tier: 3 },
  { id: "thanjavur", name: "Thanjavur", state: "Tamil Nadu", lat: 10.7870, lng: 79.1378, population: 290000, tier: 4 },
  { id: "dindigul", name: "Dindigul", state: "Tamil Nadu", lat: 10.3624, lng: 77.9694, population: 207000, tier: 4 },
  { id: "kanchipuram", name: "Kanchipuram", state: "Tamil Nadu", lat: 12.8342, lng: 79.7036, population: 164000, tier: 4 },
  { id: "karur", name: "Karur", state: "Tamil Nadu", lat: 10.9601, lng: 78.0766, population: 106000, tier: 4 },
  { id: "rajapalayam", name: "Rajapalayam", state: "Tamil Nadu", lat: 9.4519, lng: 77.5534, population: 131000, tier: 4 },
  { id: "pudukkottai", name: "Pudukkottai", state: "Tamil Nadu", lat: 10.3833, lng: 78.8000, population: 117000, tier: 4 },
  { id: "kumbakonam", name: "Kumbakonam", state: "Tamil Nadu", lat: 10.9617, lng: 79.3881, population: 140000, tier: 4 },
  { id: "tambaram", name: "Tambaram", state: "Tamil Nadu", lat: 12.9249, lng: 80.1000, population: 173000, tier: 4 },
  { id: "avadi-city", name: "Avadi", state: "Tamil Nadu", lat: 13.1067, lng: 80.0990, population: 345000, tier: 3 },
  { id: "pallavaram", name: "Pallavaram", state: "Tamil Nadu", lat: 12.9675, lng: 80.1491, population: 145000, tier: 4 },
  { id: "nagercoil", name: "Nagercoil", state: "Tamil Nadu", lat: 8.1790, lng: 77.4337, population: 224000, tier: 4 },
  { id: "hosur", name: "Hosur", state: "Tamil Nadu", lat: 12.7409, lng: 77.8253, population: 116000, tier: 4 },
  
  // Kerala cities
  { id: "thrissur", name: "Thrissur", state: "Kerala", lat: 10.5276, lng: 76.2144, population: 315000, tier: 3 },
  { id: "kannur", name: "Kannur", state: "Kerala", lat: 11.8745, lng: 75.3704, population: 232000, tier: 4 },
  { id: "palakkad", name: "Palakkad", state: "Kerala", lat: 10.7867, lng: 76.6548, population: 131000, tier: 4 },
  { id: "alappuzha", name: "Alappuzha", state: "Kerala", lat: 9.4981, lng: 76.3388, population: 174000, tier: 4 },
  { id: "malappuram", name: "Malappuram", state: "Kerala", lat: 11.0650, lng: 76.0742, population: 1699000, tier: 3 },
  { id: "kottayam", name: "Kottayam", state: "Kerala", lat: 9.5916, lng: 76.5222, population: 136000, tier: 4 },
  { id: "kasaragod", name: "Kasaragod", state: "Kerala", lat: 12.4996, lng: 74.9869, population: 65000, tier: 4 },
  { id: "thalassery", name: "Thalassery", state: "Kerala", lat: 11.7480, lng: 75.4898, population: 92000, tier: 4 },
];

// Helper functions
export const getCityByName = (cityName: string): City | undefined => {
  return indianCities.find(
    city => city.name.toLowerCase() === cityName.toLowerCase()
  );
};

export const getCitiesByState = (state: string): City[] => {
  return indianCities.filter(
    city => city.state.toLowerCase() === state.toLowerCase()
  );
};

export const getCitiesByTier = (tier: 1 | 2 | 3 | 4): City[] => {
  return indianCities.filter(city => city.tier === tier);
};

export const searchCities = (query: string): City[] => {
  const lowerQuery = query.toLowerCase();
  return indianCities.filter(
    city =>
      city.name.toLowerCase().includes(lowerQuery) ||
      city.state.toLowerCase().includes(lowerQuery)
  );
};

export const getNearestCities = (lat: number, lng: number, limit: number = 10): City[] => {
  const citiesWithDistance = indianCities.map(city => ({
    ...city,
    distance: calculateDistance(lat, lng, city.lat, city.lng)
  }));
  
  return citiesWithDistance
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
};

// Haversine formula for distance calculation
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const toRad = (value: number): number => {
  return (value * Math.PI) / 180;
};
