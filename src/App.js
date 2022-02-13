import TwitterLogo from './twitter.svg';
import './App.css';
import React from 'react';


const quoteArr = [
  "Bunkrów nie ma, ale też jest za*ebiście...",
  "Wpuścić chamstwo na salony...",
  "Parówkowym skrytożercom mówimy stanowcze: NIE!",
  "Żyrafy wchodzą do szafy. - A pawiany wchodzą na ściany.",
  "Ja to, proszę pana, mam bardzo dobre połączenie. Wstaję rano za piętnaście trzecia. Latem to już widno..."

];

const authorArr = [
  "Chłopaki nie płaczą",
  "Kariera Nikosia Dyzmy",
  "Miś",
  "Rozmowy kontrolowane",
  "Co mi zrobisz jak mnie złapiesz?"
]

var randomNum = 0;

//komponent funkcyjny bezstanowy  cytat i autor (child)
function Quote(props) {
  return (
    <div>
      <h2 id='text' className='text-3xl'>{props.quote}</h2>
      <p id='author' className='italic'>- {props.author}</p>
    </div>
  );
}

//komponent klasowy ze stanami (child)
class Quotebox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cytat: quoteArr[0],
      autor: authorArr[0],
      indexNum: randomNum
    }

    //metoda
    this.newQuote = this.newQuote.bind(this);
  }

  //funkcja robiąca update stanu, podpięta pod button
  newQuote() {
    randomNum = Math.floor(Math.random() * 5);

    this.setState({
      cytat: quoteArr[randomNum],
      autor: authorArr[randomNum]
    });
  }

  render() {

    var quo = encodeURI(this.state.cytat);
    var author = encodeURI(this.state.autor);
    var link = "https://twitter.com/intent/tweet/?text=" + quo + "%0A-" + author;

    return (
      <div id="quote-box">

        <Quote quote={this.state.cytat} author={this.state.autor}/>

        <button 
          id="new-quote" 
          type='button' 
          className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 my-8 '
          onClick={this.newQuote}
        >
          New Quote
        </button>

        <a 
          href={link} 
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
        >
          <img src={TwitterLogo} alt={TwitterLogo} />
        
        </a>
        
      </div>
    )
  }
}

//komponent funkcyjny (parent)
function App() {
  return (
    <div className="App">
      <header className="App-header text-center text-5xl font-bold tracking-wide uppercase p-9">
        <h1 className="text-stone-100	">Quote Machine</h1>
      </header>

      <Quotebox/>

    </div>
  );
}

export default App;
