const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer.js').then(module => {
        console.log(module);
        module.default(); // Llama a image_viewer.js
    });
};

document.body.appendChild(button);