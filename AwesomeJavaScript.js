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
  // when this button is clicked, delete function runs
  //$('#submitButton').on('click', deleteMe);
  // more correct term for the code above but more specific and fail proof
  $(document).on('click', '.deleteButton', deleteMe);
  // something to happen when someone clicks a button
  // called event handlers or click events
  $('#submitButton').on('click', whenIaddAharmonica);
}
function deleteMe() {
  // this method
  // using this method is how you delete just this item being created
  // this is item is referred to the list item created inside of the ul element class
  let thisThing = $(this);
  console.log('this is the delete', thisThing);

  $(this).parent().remove();
  //console.log('delete me');
  //$('.harmonica-item').remove();
}
function whenIaddAharmonica(event) {
  // event for preventing the form from reloading the page
  event.preventDefault();

  //stuff to do when call function
  console.log('clicked the button');

  // grab the data
  let brand = $('#brand').val();
  console.log('brand is ', brand);

  $('#harmonica').append(`
  <li class="harmonica-item">
  Brand is: ${brand}
  <button class="deleteButton">Delete Me</button>
  </li>
  `);
}
