const quotes = [
  "Believe in yourself",
  "Dream big, achieve big",
  "Success begins with a single step",
  "You are capable of amazing things",
  "Embrace the journey, not just the destination"
];
const authors = [
    "- Unknown",
    "- Confucius",
    "- Nelson Mandela",
    "- Eleanor Roosevelt",
    "- Ralph Waldo Emerson"
  ];
  const themes = [
    "perseverance",
    "self-improvement",
    "positive thinking",
    "ambition",
    "courage"
  ];
  function generateMessage() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomAuthorIndex = Math.floor(Math.random() * authors.length);
    const randomThemeIndex = Math.floor(Math.random() * themes.length);
  
    const randomQuote = quotes[randomQuoteIndex];
    const randomAuthor = authors[randomAuthorIndex];
    const randomTheme = themes[randomThemeIndex];
  
    return `${randomQuote} ${randomAuthor}\nTheme: ${randomTheme}`;
  }