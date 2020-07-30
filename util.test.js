const { generateText, checkAndGenerate } = require('./util')

test('output',()=>{
    expect(generateText('Adi', 22)).toBe('Adi (22 years old)')
})

test('output', () => {
    expect(checkAndGenerate('Adi', 22)).toBe('Adi (22 years old)')
})