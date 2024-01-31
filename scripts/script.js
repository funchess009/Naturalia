// Load articles from localStorage if available
var articles = JSON.parse(localStorage.getItem("articles")) || [];

// Function to add a new article
function addArticle(title, content) {
  var newArticle = { title: title, content: content };
  articles.push(newArticle);

  // Save the updated array to localStorage
  localStorage.setItem("articles", JSON.stringify(articles));
}
