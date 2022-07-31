
function order() {
    const food = prompt('Que voulez vous ?')
const quantity = prompt('Combien en voulez vous ?')
takeOrder(food, quantity)
}

function takeOrder (food, quantity) {
  let articles = ''
  switch (food) {
    case 'pain':
      articles = makeBread(quantity)
      break
    case 'croissant':
      articles = makeCroissant(quantity)
      break
    case 'cake':
      articles = makeCake(quantity)
      break
    default:
      console.log(food + " n'est pas un article que nous vendons, désolé");
      break;
  }
  displayArticles(articles);
}

function makeBread (quantity) {
  const bread = '🍞'.repeat(quantity)
  return bread
}

function makeCroissant (quantity) {
  const croissant = '🥐'.repeat(quantity)
  return croissant
}

function makeCake (quantity) {
  const cake = '🍰'.repeat(quantity)
  return cake
}

function displayArticles (articles) {
    console.log(articles)
    var output = document.getElementById('article');
    console.log(output)
    output.innerHTML = articles
}

