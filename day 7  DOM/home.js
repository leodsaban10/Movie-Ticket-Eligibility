// get reference to the body element using the id of container
const body = document.getElementById('container');

// create a header element
const header = document.createElement('header');
header.className = 'bg-blue-500 text-white p-4 flex items-center justify-between';

header.innerHTML = `
  <div class="flex items-center space-x-4">
    <span class="font-bold text-2xl">amazon</span>
  </div>
  <div class="flex items-center space-x-2 flex-grow justify-center">
    <input type="text" placeholder="Search" class="flex-grow p-2 rounded text-black max-w-xs" />
    <button id="search" class="bg-yellow-500 text-white p-2 rounded">Search</button>
  </div>
  <div class="flex items-center space-x-4">
    <span class="text-sm">Returns & Orders</span>
    <span class="flex items-center">
      Cart<span class="ml-1 bg-yellow-500 text-white rounded-full px-2 py-1 text-xs font-bold">0</span>
    </span>
  </div>
`;

// add click event to search button
const searchButton = header.querySelector('#search');
searchButton.addEventListener('click', () => {
  alert("Button Clicked");
});

// prepend the header element to the body
body.prepend(header);