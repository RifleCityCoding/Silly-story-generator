const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/* Here we are creating the variables */

const storyText = 'It was :insertTemp: fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']
const insertTemp = tempItem

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    /* Here we are attaching our variables to the random value Array */

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const tempItem = Math.floor(Math.random() * 100);


    /* This replaces our placeholders in newStory */

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    newStory = newStory.replaceAll(':insertTemp:', tempItem);

    /* Here we are making a variable that replaces John Doe (The default name) with name of users choice*/

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('John Doe', name)
  }
  /*Converting our US measurements to UK when the UK button is checked*/

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((insertTemp-32) * 5 / 9)} centigrade`;
    newStory= newStory.replaceAll(':insertTemp:', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
