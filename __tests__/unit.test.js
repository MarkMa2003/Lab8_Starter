// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('correct phone number',()=>{
    expect(functions.isPhoneNumber('133-223-4334')).toBe(true);
})
test('correct phone number',()=>{
    expect(functions.isPhoneNumber('124-333-3333')).toBe(true);
})
test('incorrect phone number',()=>{
    expect(functions.isPhoneNumber('133-223-433')).toBe(false);
})
test('incorrect phone number',()=>{
    expect(functions.isPhoneNumber('1243333')).toBe(false);
})

test('correct email',()=>{
    expect(functions.isEmail('hello@hello.com')).toBe(true);
})
test('correct email',()=>{
    expect(functions.isEmail('hello@gmail.com')).toBe(true);
})
test('incorrect email',()=>{
    expect(functions.isEmail('hello.com')).toBe(false);
})
test('incorrect email',()=>{
    expect(functions.isEmail('ffffcom')).toBe(false);
})

test('valid strong password',()=>{
    expect(functions.isStrongPassword('hello123')).toBe(true);
})
test('valid strong password',()=>{
    expect(functions.isStrongPassword('qwertasd')).toBe(true);
})
test('invalid strong password',()=>{
    expect(functions.isStrongPassword('123')).toBe(false);
})
test('valid strong password',()=>{
    expect(functions.isStrongPassword('0')).toBe(false);
})

test('correct date',()=>{
    expect(functions.isDate('22/22/2222')).toBe(true);
})
test('correct date',()=>{
    expect(functions.isDate('11/11/1111')).toBe(true);
})
test('incorrect date',()=>{
    expect(functions.isDate('123')).toBe(false);
})
test('incorrect date',()=>{
    expect(functions.isDate('2021')).toBe(false);
})

test('correct color',()=>{
    expect(functions.isHexColor('#123456')).toBe(true);
})
test('correct color',()=>{
    expect(functions.isHexColor('#123')).toBe(true);
})
test('incorrect color',()=>{
    expect(functions.isHexColor('3456')).toBe(false);
})
test('incorrect color',()=>{
    expect(functions.isHexColor('#1223')).toBe(false);
})