const baseUrl = 'https://pokeapi.co/api/v2/';
// const Url = 'https://pokeapi.co/api/v2/';

// const appNode = document.querySelector('#app')
//     appNode.addEventListener ('click', (event) => {
//         if(event.target.nodeName === 'H2') {
//             window.alert('Lo estamos logrando');
//         }
//     });

// window
//     .fetch(`${baseUrl}pokemon/25`) 
//     //Procesar la respuesta y convertirla en JSON
//     .then(response => response.json())
//     //JSON => Data => Renderizar info en el browser.
//     .then(responseJson => {
//         // debugger;
//         console.log(responseJson)})

function App() {
    
    window
    .fetch(`${baseUrl}pokemon/25`) 

    return (
        <>
            <h1>Memory Game</h1>
        </>
    );
}

export default App;