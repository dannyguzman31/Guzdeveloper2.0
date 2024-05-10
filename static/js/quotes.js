// Array of quotes
var quotes = [
  {
    quote:
      'Logic will get you from A to B. Imagination will take you everywhere.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Shoot for the moon and if you miss you will still be among the stars.',
    author: 'Les Brown',
  },
  // {
  //   quote:
  //     'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
  //   author: 'Albert Schweitzer',
  // },
  // Add more quotes here
];

// Function to generate a random quote
// Function to generate a random quote
function generateQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomNumber];
  document.getElementById('quote').innerText = '"' + quote.quote + '"';
  document.getElementById('author').innerText = quote.author;
}

// Display initial quote
generateQuote();
