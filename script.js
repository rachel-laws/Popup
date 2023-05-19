// Get existing elements
const infoButton = document.getElementById('foodItem__button');
const infoPopup = document.getElementById('infoPopup');

// New element
const createNewElement = (elementType, className, textContent) => {
  const newElement = document.createElement(elementType);
  newElement.classList.add(className);
  newElement.textContent = textContent;
  return newElement;
};

// Create elements
infoButton.addEventListener('click', event => {
  // Containers
  const infoContainer = createNewElement('div', 'infoContainer');
  const infoBox = createNewElement('div', 'infoBox');

  // Close button
  const closeButton = createNewElement('button', 'closeButton');
  const closeIcon = createNewElement('i', 'bi');
  closeIcon.classList.add('bi-x-circle');
  closeButton.appendChild(closeIcon);

  closeButton.addEventListener('click', event => {
    deleteContents(infoPopup);
  });

  // Title
  const infoTitle = createNewElement('h2', 'infoTitle', 'Marble Cake');

  // Description
  const infoDesc = createNewElement(
    'p',
    'infoDesc',
    'A delicious slice of gourmet marble cake with white chocolate ganache and fudge fillings, and topped with chocolate frosting.'
  );

  // Ingredients
  const infoIngredients = createNewElement(
    'a',
    'infoIngredients',
    'View Ingredients'
  );
  infoIngredients.href = 'https://fontawesome.com/';
  infoIngredients.title = 'See full ingredients list';

  // Price
  const infoPrice = createNewElement('p', 'infoPrice');
  const infoPriceAmount = createNewElement('span', 'infoPriceAmount', '$8');
  const infoPriceDetails = createNewElement(
    'span',
    'infoPriceDetails',
    'per slice'
  );
  infoPrice.appendChild(infoPriceAmount);
  infoPrice.appendChild(infoPriceDetails);

  // Add children
  infoContainer.style.backgroundColor = 'rgba(0 0 0 / 0.3)';
  infoBox.appendChild(closeButton);
  infoBox.appendChild(infoTitle);
  infoBox.appendChild(infoDesc);
  infoBox.appendChild(infoIngredients);
  infoBox.appendChild(infoPrice);

  showInfoContainer(infoBox, infoContainer);
});

// Show container and contents
const showInfoContainer = (newElement, infoContainer) => {
  infoContainer.appendChild(newElement);
  infoPopup.appendChild(infoContainer);
};

const deleteContents = parentElement => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};
