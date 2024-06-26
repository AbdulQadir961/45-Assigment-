function city_country(city:string, country : string):string {
    return`${city} , ${country}`;
}
let city1:string = city_country('Tokyo' , 'Japan');
let city2: string = city_country('Gaza' , 'Palestine');
let city3: string =city_country('Makkah' , 'Saudi Arabia');

console.log(city1);
console.log(city2);
console.log(city3);