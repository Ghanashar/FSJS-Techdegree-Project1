/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*Created the array of quote objects and name it `quotes`.*/
var quotes = [
  {//quote 1
	  id:1,
    quote : "No guts, no story.",
    source : "Chris Brady ",
    citation : "Short quotes",
    year : 1968,
    tags : ["inspirational", "nature", "life"]
  },
  {//quote 2
    id:2,
    quote : "My life is my message.",
    source : "Mahatma Gandhi",
	  citation:"",
    year : 1818,
    tags : ["inspirational", "fighter","independence"]
  },
  {//quote 3
	  id:3,
    quote : "Screw it, let’s do it.",
    source : "Richard Branson",
    citation : "Songs for the Open Road",
	  year:"",
    tags : ["inspirational", "life", "wise"]
  },
  {//quote 4
	  id:4,
    quote : "Boldness be my friend. ",
    source : "William Shakespeare",
    citation : "The Bell Jar",
    year : 1963,
    tags : ["fiction", "outside", "inspirational"]
  },
  {//quote 5
	  id:5,
    quote : "Keep going. Be all in.",
    source : "Bryan Hutchinson",
    citation : "Kafka on the Shore",
    year : 2002,
    tags : ["beautiful", "thoughful", "life"]
  },
  {//quote 6
	  id:6,
    quote : "My life is my argument.",
    source : "Rainer Maria Rilke",
    citation : "Rilke's Book of Hours",
    year : 1905,
    tags : ["thoughful", "life", "inspirational"]
  },
  {//quote 7
	  id:7,
    quote : "Heaven is under our feet as well as over our heads.",
    source : "Henery David Thoreau",
    citation : "Walden",
    year : 1854,
    tags : ["wise", "nature", "thoughful"]
  },
  {//quote 8
	  id:8,
    quote : "Impossible is for the unwilling.",
    source : "Lewis Carroll",
    citation : "Alice's Adventures in Wonderland & Through the Looking Glass",
    year : 1865,
    tags : []
  }
];

var found;
var prevQuoteId;
var quoteobject;
/*Created the `getRandomQuote` function */
function getRandomQuote()
{
	found=0;
	//get a random no.
 let ranNum = Math.floor(Math.random() * quotes.length);


 while(found==0)
 {
	 //If prevQuoteId is not equal to randomly selected quote id
 if(quotes[ranNum].id!=prevQuoteId)
 {
	 //Assign to prevQuoteId the randomly selected quote id
	 prevQuoteId=quotes[ranNum].id;
	 found=1; //set found to true
   return quotes[ranNum];
 
 }
 //if the prevQuoteId is equal to random quote id
  if(quotes[ranNum].id==prevQuoteId) 
  {
    /*generate a random no. again  & repeat the loop until
     prevQuoteId is not equal to randomly selected quote id*/
	  ranNum = Math.floor(Math.random() *8); 
  }
 
 }
 
 }
 /*Created the `printQuote` function*/
function printQuote()
{
  /*Called the `getRandomQuote` function
   and assign it to a variable.*/
  quoteobject= getRandomQuote();
  let s=" ";
  s+=`<p class="quote"> ${quoteobject.quote} </p>
     <p class="source"> ${quoteobject.source}`;

     /*If citation is not specified*/
  if(quoteobject.citation.length==0)
  {
    s+="";
  }
  else /*Execute if citation is specified*/
  {
     s+=` <span class="citation"> ${quoteobject.citation} </span>`;
  }

  /*If year is not specified*/
  if(quoteobject.year.length==0)
  {
    s+="";
  }
  else /*Execute if year is specified*/
  {
    s+=` <span class="year">${quoteobject.year}</span>`;
  }

  /*If tags is not specified*/
  if(quoteobject.tags.length==0)
  {
    s+="";
  }
  else /*Execute if tags is specified*/
  {
    s+= `<span class ="tags">${quoteobject.tags}<span></p>`
  }
  /*Generate random colors*/
  var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
  var  blue = Math.floor(Math.random() * 256 );

  /*Execute the block if color is not white*/

  if(red!=255 && green!=255 && blue != 255 )
  {
	var colour= "rgb(" + red + ',' + green + ','+ blue + ")";
  document.querySelector('body').style.backgroundColor =  "rgb(" + red + ',' + green + ','+ blue + ")" ;
  document.getElementById("quote-box").innerHTML = s;
  }
 
}
/*Change quote in every 20 seconds*/
var intervalID = window.setInterval(printQuote, 20000);
/* call printQuote on click event*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


