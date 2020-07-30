const { generateText } = require('./util')

test('output',()=>{
    expect(generateText('Adi', 22)).toBe('Adi (22 years old)')
})