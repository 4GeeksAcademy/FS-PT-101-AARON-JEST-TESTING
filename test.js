const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);


    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){
    const {fromEuroToDollar} = require('./app.js');
    const dollars=fromEuroToDollar(3.5);
    
    const expected=3.5*1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 156.5 Yenes", function(){
    const {fromDollarToYen}=require('./app.js');
    const yenes=fromDollarToYen(3.745);
    const expected=3.745*156.5;
    expect(fromDollarToYen(3.745)).toBe(586.0925);
})

test("One Yen should be 0.87 Pounds", function(){
    const {fromYenToPound}=require('./app.js');
    const pounds = fromYenToPound(586.0925);
    const expected=586.0925*0.87;
    expect(fromYenToPound(586.0925)).toBe(509.900475);
})