let computerBrand = prompt('Samsung, HP, HyperPC')

if(computerBrand === 'Samsung'){
    console.log('Samsung');
} else if(computerBrand === 'hp'){
    console.log('HP');
} else if(computerBrand === 'HyperPC'){
    console.log('HyperPC');
} else {
    console.log('This item is out of stock');
}

let computerCOREI = prompt('Core i5, Core i6, Core i9')

if(computerCOREI === 'Core i5'){
    console.log('Core i5');
} else if(computerCOREI === 'Core i6'){
    console.log('Core i6');
} else if(computerCOREI === 'Core i9'){
    console.log('Core i9');
} else {
    console.log('This item is out of stock');
}

let computerAccessMemory = prompt('AccessMemory8, AccessMemory12, AccessMemory16 ')

if(computerAccessMemory === 'AccessMemory8'){
    console.log('AccessMemory8');
} else if(computerAccessMemory === 'AccessMemory12'){
    console.log('AccessMemory12');
} else if(computerAccessMemory === 'AccessMemory16'){
    console.log('AccessMemory16');
} else {
    console.log('This item is out of stock');
}

let computerMemory = prompt('Memory500, Memory700, Memory1000')

if(computerMemory === 'Memory500'){
    console.log('Memory500');
} else if(computerMemory === 'Memory700'){
    console.log('Memory700');
} else if(computerMemory === 'Memory1000'){
    console.log('Memory1000');
} else {
    console.log('This item is out of stock');
}

let computerScreen = prompt('FullHD, HD, Medium')

if(computerScreen === 'FullHD'){
    console.log('FullHD');
} else if(computerScreen === 'HD'){
    console.log('HD');
} else if(computerScreen === 'Medium'){
    console.log('Medium');
} else {
    console.log('This item is out of stock');
}

let computerColor = prompt('Black, Red, Yellow')

if(computerColor === 'Black'){
    console.log('Black');
} else if(computerColor === 'Red'){
    console.log('Red');
} else if(computerColor === 'Yellow'){
    console.log('Yellow');
} else {
    console.log('This item is out of stock');
}


let market = {
    Brand: computerBrand,
    COREI: computerCOREI,
    AccessMemory: computerAccessMemory,
    Memory: computerMemory,
    Screen: computerScreen,
    Color: computerColor
}

console.log(market);