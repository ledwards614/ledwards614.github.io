//use to group similar test together
describe('math operations', function() {

    //the actual test
    test('the product of 2 and 3 should be 6', function() {
    expect(2*3).toEqual(6)
    })

    //another test
    test('the sum of 2 and 3 should be 5', function() {
        expect(2+3).toEqual(5)
        })
})


describe('String operations', function() {

    //the actual test
    test('String should equal hello world', function() {
        var myString = 'hello world';
    expect(myString).toBe('hello world')
    })

    
    
})

