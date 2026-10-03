function rangeCheckerusingif(num:number):string
{
    let category:string;
    if(num<0)
        category= 'Category A';
    else if(num >=0 && num <=50)
        category = 'Category B';
    else
        category = 'Category C';
    return category;
}
console.log('Result using if loop: ',rangeCheckerusingif(-1)); //A
console.log('Result using if loop: ',rangeCheckerusingif(0)); //B
console.log('Result using if loop: ',rangeCheckerusingif(49)); //B
console.log('Result using if loop: ',rangeCheckerusingif(50)); //B
console.log('Result using if loop: ',rangeCheckerusingif(51)); //C
console.log('Result using if loop: ',rangeCheckerusingif(1000)); //C

function rangeCheckerusingswitch(num:number):string
{
    let category:string;
    switch(true)
    {   
        case num<0: 
        category = 'Category A';
        break;
        case num >=0 && num <=50: 
        category = 'Category B';
        break;
        case num >50: 
        category = 'Category C';
        break;
        default:
        category = 'Invalid';
        break;
    }
    return category;
}

console.log('Result using switch case: ',rangeCheckerusingswitch(-1)); //A
console.log('Result using switch case: ',rangeCheckerusingswitch(0)); //B
console.log('Result using switch case: ',rangeCheckerusingswitch(49)); //B
console.log('Result using switch case: ',rangeCheckerusingswitch(50)); //B
console.log('Result using switch case: ',rangeCheckerusingswitch(51)); //C
console.log('Result using switch case: ',rangeCheckerusingswitch(1000)); //C