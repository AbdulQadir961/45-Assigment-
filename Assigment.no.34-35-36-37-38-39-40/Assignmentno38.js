function describe_city(city, country) {
    if (country === void 0) { country = 'unkown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karbala', 'Iran');
describe_city('Paris', 'France');
describe_city('Japan');
