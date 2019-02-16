const Twit = require('twit')

const config = require('./config');
const T = new Twit(config)

letsTweetIt()
setInterval(letsTweetIt, 1000 * 20)

function letsTweetIt() {
    const randomNumber = Math.floor(Math.random() * Tweet.length);

    const emoji = [
        `🙁`,
        `🏃‍♀️`,
        `🌧`,
        `🌃`,
        ``,
        `💔`,
        `...`,
        `😔`,
        `😭`,
        `🙇‍♀️`
    ]
    const randomEmoji = emoji[randomNumber];
    const Tweet = [`ay, q lo siento`,
        `soy un bot pero te pido disculpas sinceras${randomEmoji}`,
        `perdón${randomEmoji}`,
        `lo siento${randomEmoji}`,
        `perdón coño${randomEmoji}`,
        `¿me perdonas?${randomEmoji}`,
        `i'm sorry${randomEmoji}`,
        `i'm sad, perdón${randomEmoji}`,
        `jo, perdón${randomEmoji}`,
        `i'm so so so ☹️ sorry${randomEmoji}`,
        `perdóname por fi${randomEmoji}`,
        `lo siento, es mi culpa${randomEmoji}`,
        `perdón, por mi culpa,${randomEmoji} por mi culpa, por mi gran culpa me mato`,
    ]


    T.post('statuses/update', { status: Tweet[randomNumber] }, tweeted);

    function tweeted(err, data, response) {
        err
            ? console.log('Something went wrong!', err)
            : console.log('It worked!');
    }
}
