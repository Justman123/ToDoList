const quotes = [
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "Benjamin Franklin"
    },
    {
        quote: "No pain, No gain.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "I was never less alone than when by myself.",
        author: "Edward Giboon"
    },
    {
        quote: "Only I can change my life, no one can do it for me.",
        author: "Carol Burnett"
    },
    {
        quote: "It is not length of life, But depth of life.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Where there is a will there is a way.",
        author: "Angela Merkel"
    },
    {
        quote: "you cannot change what you are, only what you do.",
        author: "Philip Pullman"
    },
    {
        quote: "Lay a firm foundation with the bricks that others throw at you.",
        author: "David Brinkley"
    },
    {
        quote: "Change the way you look at things and the things you look at change.",
        author: "Wayne Dyer"
    },
    {
        quote: "If you run you stand a chance of losing, but if you don't run you've already.",
        author: "Barack Obama"
    },
    {
        quote: "If you have always done it that way, it is probably wrong.",
        author: "Charles Kettering"
    },
    {
        quote: "The greatest mistake you can make in life is to be continuallt fearing you will make one.",
        author: "Elbert Hubbard"
    },
    {
        quote: "To create more positive results in your life, replace 'if only' with 'next time'",
        author: "Georg C. Lichtenberg"

    },
    {
        quote: "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다",
        author: ""
    }

];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
