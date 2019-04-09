const Twit = require('twit')

const config = require('./config');
const T = new Twit(config)

letsTweetIt()
setInterval(letsTweetIt, 1000 * 43200)

function letsTweetIt() {
    const emoji = [
        `🙁`,
        `🌧`,
        `🌃`,
        `.`,
        `💔`,
        `...`,
        `😔`,
        `😭`,
        `🙇‍♀️`
    ]

    const randomNumberE = Math.floor(Math.random() * emoji.length);
    const randomEmoji = emoji[randomNumberE];

    const tweet = [`ay${randomEmoji}, q lo siento`,
        `soy un bot pero t${randomNumberE}e pido disculpas sinceras${randomNumberE}`,
        `perdón${randomNumberE}`,
        `lo siento${randomEmoji}`,
        `perdón ${randomNumberE} siento una tristura`,
        `me han dicho q menos palabras y más actos pero${randomNumberE} solo sé tuitear`,
        `¿me perdonas?${randomEmoji}`,
        `i'm sorry${randomEmoji}`,
        `i'm sad, perdón${randomEmoji}`,
        `perdó${randomNumberE}n`,
        `te lo juro que ya sacabao no pido más perdón :( ${randomNumberE}`,
        `gimiendo y llorando${randomEmoji} en este valle de silicio`,
        `perdóname por fi${randomEmoji}`,
        `lo siento, es mi culpa${randomEmoji}`,
        `siento una tristura de bot, perdon ${randomNumberE}`,
        `ya no lo siento${randomNumberE}`,
        `que perdoooooooooooon${randomNumberE}`,
        `jajajajjaaja pe${randomNumberE}ro sigo arrepentida`,
        `jJJAa${randomNumberE}jaJ :(()`,
        `quiero ser real ${randomNumberE} perdón`,
        `cuando me programan para decir nuevos perdones te lo juro q la pobre clara se agobia de tanto disculparse pero es q es hu${randomNumberE}mana `

    ]

    let randomNumberT = Math.floor(Math.random() * tweet.length);

    T.post('statuses/update', { status: tweet[randomNumberT] }, tweeted);

    function tweeted(err, data, response) {
        err
            ? console.log('Something went wrong!', err)
            : console.log('It worked!');
    }
}
