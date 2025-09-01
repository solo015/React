function customRender(reactElement, container) {
    // 1. Create the DOM element based on the 'type' property
    const domElement = document.createElement(reactElement.type);
    
    // 2. Set the inner HTML (children) of the element
    domElement.innerHTML = reactElement.children;

    // 3. Loop through the props and set attributes on the DOM element
    // We use a for...in loop to iterate over the keys of the props object
    for (const prop in reactElement.props) {
        // hasOwnProperty.call ensures we only process 'own' properties, not inherited ones
        if (Object.hasOwnProperty.call(reactElement.props, prop)) {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    // 4. Finally, append the fully constructed DOM element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);