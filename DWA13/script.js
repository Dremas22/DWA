const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//---FOR EACH---//
names.forEach((name) => {
    console.log(name);
});

names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
});

//---String to uppercase

const bigProvinces = provinces.map((province) => {
    return province.toUpperCase();
});
console.log(bigProvinces);

//--Sorting provinces

const sortProvinces = () => {
    provinces.sort();
}
sortProvinces();
console.log(provinces);

//----filtering provinces

const filterProvinces = () => {
    const filteredProvinces = provinces.filter((province) => !province.includes('Cape'));
    return filteredProvinces.length;
};
console.log(filterProvinces());

//---Boolean characters

const hasSCharacter = names.map((name) => {
    return name.split('').some((char) => char.toUpperCase() === 'S');
});
console.log(hasSCharacter);

//---Using reduce method

const nameProvinceObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
}, {});
console.log(nameProvinceObject);

//-----EXCERCISE 2----//

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

products.forEach((product) => {
    console.log(product.product);
});

const filteredProducts = products.filter((product) => {
    return product.product.length > 5;
});
console.log(filteredProducts);

const convertProducts = products
    .filter((product) => product.price !== '' && !isNaN(Number(product.price)))
    .map((product) => ({ ...product, price: Number(product.price) }));

const combinedPrice = convertProducts.reduce((total, product) => total + product.price, 0);
console.log(combinedPrice)

const concatenatedString = products.reduce((acc, curr) => {
    if (acc === '') {
        return curr.product;
    } else {
        return `${acc}, ${curr.product}`;
    }
}, '');
console.log(concatenatedString);

//---REDUCE METHOD---//

const { highest, lowest } = products.reduce(
    (acc, curr) => {
        const price = parseFloat(curr.price);

        if (!isNaN(price)) {
            if (price > acc.highestPrice) {
                acc.highestPrice = price;
                acc.highest = curr.product;
            }

            if (price < acc.lowestPrice) {
                acc.lowestPrice = price;
                acc.lowest = curr.product;
            }
        }

        return acc;
    },
    { highestPrice: Number.NEGATIVE_INFINITY, lowestPrice: Number.POSITIVE_INFINITY }
);
const resultString = `Highest: ${highest}. Lowest: ${lowest}.`;
console.log(resultString);

const modifiedObject = Object.entries(products).reduce((acc, [key, value]) => {
    let newKey = key;
    if (key === 'product') {
        newKey = 'name';
    } else if (key === 'price') {
        newKey = 'cost';
    }

    acc[newKey] = value;
    return acc;
}, {});
console.log(modifiedObject);
