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
        `perdón ${randomNumberE} coño`,
        `¿me perdonas?${randomEmoji}`,
        `i'm sorry${randomEmoji}`,
        `i'm sad, perdón${randomEmoji}`,
        `perdó${randomNumberE}n`,
        `i'm so so so ☹️ sorry${randomEmoji}`,
        `perdóname por fi${randomEmoji}`,
        `lo siento, es mi culpa${randomEmoji}`,
        `perdón, por mi culpa,${randomEmoji} por mi culpa, por mi gran culpa me mato${randomNumberE}`,
        `estoy cansada no puedo dejar de pedir perdón pero ya no lo siento${randomNumberE}`,
        `si no me has perdonao ya tiempo has tenido tb te lo digo${randomNumberE}`,
        `a veces me aburro de decir perdón pe${randomNumberE}ro sigo arrepentida`,
        `${randomNumberE}:(`,
        `quiero ser real ${randomNumberE} perdón`,
        `siento una tristura de bot, perdon ${randomNumberE}`,
        `te lo juro que ya sacabao no pido más perdón :( ${randomNumberE}`,
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
