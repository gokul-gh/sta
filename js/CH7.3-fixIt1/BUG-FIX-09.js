const currencyCode = "IND";
let currencyName;
switch (currencyCode) {
    case "IND":
        currencyName = "Rupees";
        break;
    case "USD":
        currencyName = "US Dollar";
        break;
    case "EUR":
        currencyName = "Euro";
        break;
    default:
        currencyName = "Unknown Currency";
}

console.log(`Currency code ${currencyCode} represents ${currencyName}.`);
