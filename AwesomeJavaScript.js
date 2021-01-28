console.log('I have JS');

// always the first things you do in jQuery
$(document).ready(onReady);

function onReady() {
  console.log('jQuery Activated');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');
  console.log('h2', h2);

  $('h2').addClass('froggy');

  const h1Text = $('h1').text();
  console.log('h1Text is ', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);
}
