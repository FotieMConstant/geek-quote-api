"use strict";

// The array of quotes
const quotes = 
[ 
  {
    quote:"There is no place like 127.0.0.1",
    author: "Unknown Author",
  },
  {
    quote:"Girls are like Internet Domain names; the ones I like are already taken.",
    author: "Unknown Author",
  },
  {
    quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Unknown Author",
  },
  {
    quote:"If at first you don’t succeed, call it version 1.0",
    author: "Unknown Author",
  },  
  {
    quote: "I’m not anti-social; I’m just not user friendly.",
    author: "Unknown Author",
  },  
  {
    quote: "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.",
    author: "Unknown Author",
  },   
  {
    quote:  "A computer lets you make more mistakes faster than any invention in human history – with the possible exceptions of handguns and tequila.",
    author: "Unknown Author",
  },  
  {
    quote: "Alert! User Error. Please replace user and press any key to continue.",
    author: "Unknown Author",
  },  
  {
    quote: "I spent a minute looking at my own code by accident. I was thinking “What the hell is this guy doing?”",
    author: "Unknown Author",
  },  
  {
    quote: "A Life? Cool! Where can I download one of those?",
    author: "Unknown Author",
  },  
  {
    quote: "Logic is the beginning of wisdom, not the end.",
    author: "Unknown Author",
  },  
  {
    quote: "Enter any 11-digit prime number to continue.",
    author: "Unknown Author",
  },  
  {
    quote: "Passwords are like underwear. You shouldn’t leave them out where people can see them. You should change them regularly. And you shouldn’t loan them out to strangers.",
    author: "Unknown Author",
  },  
  {
    quote: "Concept: On the keyboard of life, always keep one finger on the escape button.",
    author: "Unknown Author",
  },  
  {
    quote: "My Software never has bugs. It just develops random features.",
    author: "Unknown Author",
  },  
  {
    quote:"I would love to change the world, but they won’t give me the source code.",
    author: "Unknown Author",
  },
  {
    quote: "Never argue with the data.",
    author: "Unknown Author",
  },  
  {
    quote: "Who needs friends? My PC is user friendly",
    author: "Unknown Author",
  },  
  {
    quote: "Better to be a geek than an idiot.",
    author: "Unknown Author",
  },  
  {
    quote: "Software is like sex: Its better when its free.",
    author: "Unknown Author",
  },  
  {
    quote: "Microsoft: You’ve got questions. We’ve got dancing paperclips.",
    author: "Unknown Author",
  },  
  {
    quote: "Try not. Do, or do not. There is no try.",
    author: "Unknown Author",
  },  
  {
    quote:  "JUST SHUT UP AND REBOOT!!",
    author: "Unknown Author",
  },  
  {
    quote: "Failure is not an option — it comes bundled with Windows.",
    author: "Unknown Author",
  },  
  {
    quote: "In a world without fences and walls, who needs Gates and Windows?",
    author: "Dino Esposito",
  },  
  {
    quote: "In my experience there is no such thing as luck.",
    author: "Obi Wan Kenobi",
  },   
     
  {
    quote: "How you look at it is pretty much how you'll see it",
    author: "Rasheed Ogunlaru",
  }, 
  {
    quote: "That's the thing about people who think they hate computers. What they really hate is lousy programmers",
    author: "Larry Niven",
  },  
  {
    quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    author: "Muhammad Waseem",
  },  
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },  
  {
    quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck",
  },  
  {
    quote: "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  }, 
  {
    quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  }, 
    {
    quote: "Walking on water and developing software from a specification are easy if both are frozen",
    author: "Edward V. Berard",
  }, 
    {
    quote: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  }, 
    {
    quote: "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  }, 
    {
    quote: "Perl – The only language that looks the same before and after RSA encryption.",
    author: "Keith Bostic",
  }, 
    {
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
  }, 
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
  }, 
  {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie",
  }, 
  {
    quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
    author: "Joyce Wheeler",
  }, 
  {
    quote: "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    author: "Andrew Hunt",
  }, 
  {
    quote: "Testing leads to failure, and failure leads to understanding.",
    author: "Burt Rutan",
  }, 
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  }, 
  {
    quote: "Don't write better error messages, write code that doesn't need them.",
    author: "Jason C. McDonald",
  }, 
  {
    quote: "The most damaging phrase in the language is.. it's always been done this way",
    author: "Grace Hopper",
  }, 
  {
    quote: "Every SQL statement that Chuck Norris codes has an implicit 'COMMIT' in its end.",
    author: "Unknown Author",
  },
  {
    quote: "Chuck Norris can delete the Recycling Bin.",
    author: "Unknown Author",
  },
  {
    quote: "Two CSS properties walk into a bar. A barstool in a completely different bar falls over.",
    author: "Unknown Author",
  },
  {
    quote: "If you get tired, be like an AJAX request and REST.",
    author: "Unknown Author",
  },
  {
    quote: "💕 I'm the CSS to your HTML.",
    author: "Unknown Author",
  },
  {
    quote: "If a groundhog inspects their Web Component, do they see their Shadow DOM?",
    author: "Unknown Author",
  },
  {
    quote: "A Pen is worth a thousand docs.",
    author: "Unknown Author",
  },
  {
    quote: "Keep the <main> thing the <main> thing.",
    author: "Unknown Author",
  },
  {
    quote: "What did the colon say to the semicolon? Stop winking at me.",
    author: "Unknown Author",
  },
  {
    quote: "Learning 3D transforms in CSS requires a little perspective",
    author: "Unknown Author",
  },
  {
    quote: "If you want to flex your skills and go off the grid, try coding a layout with float",
    author: "Unknown Author",
  }, 
  // {
  //   quote: "",
  //   author: "",
  // },
];



// function to get random quote
function getRandomQuotes(){
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}
function genNumberOfQuotes(genNumber){
  // Array to store the randomly generated quotes
  let quotesNumberGen = [];
  // Loop to get all the number of quotes specified by user in his request
  for(let i=0; i < genNumber; i++) {
    quotesNumberGen.push(getRandomQuotes());
  }
  return quotesNumberGen;
}

// importing path
const path = require('path')

// Importing express
const express = require('express');
const app = express();

// enabling CORS to accept from all origins
app.all("*", (req, res, next) => {
  console.log(`${new Date()} - request for ${req.path}`);
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// the various endpoints
// get all quotes
app.get("/", (req, res) => {
  res.send("geek-quote-api.");
});

// get all quotes
app.get("/v1/quotes", (req, res) => {
  res.send(quotes);
});

// get one random quote each time they hit the endpoint
app.get("/v1/quote", (req, res) => {
  res.send(getRandomQuotes());
});

// get a certain number of quotes each time they hit the endpoint
app.get("/v1/quote/:count", (req, res) => {
  console.log("User requested for "+req.params.count+" number of quote(s)");
  let quotes = genNumberOfQuotes(req.params.count)
  res.send(quotes);
});

// added a 404 page
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

// setting the port of the process or a default port 
app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port: 3000');
});