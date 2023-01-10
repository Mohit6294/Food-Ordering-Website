import React from "react";
import  ReactDOM  from "react-dom/client";
import { Title } from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";






/* creating elements using React.createElement
const heading1 = React.createElement("h1",
{
  "id":"h1",
  "key":"h1"
},
"This is heading1");

const heading2 = React.createElement("h2",
{
  "id":"h2",
  "key":"h2"
},
"This is heading2");

const heading3 = React.createElement("h3",
{
  "id":"h3",
  "key":"h3"
},
"This is heading3");


const div = React.createElement("div",
  {
    className:"title"
  },
  [heading1,heading2,heading3]
  )
*/
/*--using jsx element concept
const Header = (
  <div className="title">
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
  </div>

);
*/
/* creating elements using functional component
const Header  = () =>{
  return (
    <div>
      <h1>This is Heading1</h1>
      <h2>This is Heading2</h2>
      <h3>This is Heading3</h3>
    </div>
  );
}
*/
/* composititon of component
const Footer = () => {
  return (
    <div>
      <h1>This is footer element</h1>
    </div>
  );
}
const Header = () =>{
 return (
  <Footer />
  
 );
   //<Footer />;
}
*/



//config Driven UI

const App = () =>{
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

