function describe_city(city:string , country: string ='unkown'):void {
    console.log(`${city} is in ${country}.`);
    
}
describe_city('Karbala' , 'Iran');
describe_city('Paris' , 'France');
describe_city('Japan')