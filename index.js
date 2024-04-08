export var linkList = [
  {
    id: 1,
    title: 'shell',
    link: '/shell/index.html',
  },
  {
    id: 2,
    title: 'block breaker',
    link: '/blocks/index.html',
  },
  {
    id: 3,
    title: 'bad fortune teller',
    link: '/fortune/index.html',
  },
  {
    id: 4,
    title: 'rivals',
    link: '/rivals/index.html',
  },
  {
    id: 5,
    title: 'tic tac toe',
    link: 'https://tiktaktoeinreact.netlify.app',
  },
];

export function displayList(newList) {
  var header = document.querySelector('.header');
  var ul = document.createElement('ul');
  ul.classList.add('navlist');

  for (let link of newList) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = link.link;
    a.textContent = link.title;
    li.append(a);
    ul.append(li);
  }

  header.append(ul);
  return ul;
}

displayList(linkList);
