const createEmotion = require('create-emotion')
const createEmotionServer = require('create-emotion-server')

const context = {}

// instances should work together just fine because they share context
const emotion1 = createEmotion(context)
const emotion2 = createEmotion(context)

// emotionServer can be bootstrapped from either instance.
const { renderStylesToString } = createEmotionServer(emotion1)

// rendering works fine when styles were created from first emotion instance
const className1 = emotion1.css`color: magenta;`
console.log('Result from first instance:')
console.log(renderStylesToString(`<h1 className="${className1}"></h1>`))

// rendering doens't work when styles were created from second instance
const className2 = emotion2.css`color: rebeccapurple;`
console.log('Result from second instance:')
console.log(renderStylesToString(`<h1 className="${className2}"></h1>`))
