const Twit = require('twit')

const config = require('./config');
const T = new Twit(config)

letsTweetIt()
setInterval(letsTweetIt, 1000*20 )

function letsTweetIt() {
    const Tweet = ["ay, q lo siento",
        "soy un bot pero te pido disculpas sinceras",
        "perdón",
        "lo siento",
        "perdón coño",
        "¿me perdonas?",
        "i'm sorry",
        "i'm sad, perdón",
        "jo, perdón",
        "i'm so so so ☹️ sorry",
        "perdóname por fi",
        "lo siento, es mi culpa",
        "perdón, por mi culpa, por mi culpa, por mi gran culpa me mato",
        "😭",
        "🙇‍♀️"
    ]

    const randomNumber = Math.floor(Math.random() * Tweet.length);
    T.post('statuses/update', { status: Tweet[randomNumber] }, tweeted);

    function tweeted(err, data, response) {
        err
            ? console.log('Something went wrong!', err)
            : console.log('It worked!');
    }
}
