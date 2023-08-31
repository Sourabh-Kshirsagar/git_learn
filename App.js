import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { arguments } from "commander";
import { roundFloat32 } from "msgpackr";

/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "This is heading one"
// );

// const heading1 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "This is heading Two"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: "div",
//   },
//   [heading, heading1]
// );

//functional components

// multiple ways to write functional components

// const HeadingReact2 = () => (
//   <div>
//     <HeadingReact />
//     {heading}
//     <HeadingReact1 />
//     <h1>This is second way to write functional component ...</h1>
//     <h1>This is second way to write functional component ...</h1>
//     <h1>This is second way to write functional component ... </h1>
//   </div>
// );

const title = React.createElement("h1", {}, "This is our title");

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img
            className="logo-width"
            src="https://intelliatechcom33628.zapwp.com/q:u/r:0/wp:1/w:1/u:https://intelliatech.com/wp-content/uploads/2023/07/logo-scaled.jpg"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse right-side-nav" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//inline styling in react
// const styleObj = {
//   color: "red",
// };

// const styling = {
//   color: "orange",
// };

// const Head = () => {
//   return (
//     <div>
//       <h1 style={styleObj}>One Line with style</h1>
//       <h1
//         style={{
//           color: "orange",
//         }}
//       >
//         Other without style
//       </h1>
//     </div>
//   );
// };

const restro = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1693170509455-f28aefcd1005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Card One Serene Lake",
    description: "Card One A peaceful lake surrounded by lush greenery.",
    rating: 4.7,
    id: "1",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Card Two Urban Sunset",
    description: "Card Two The sun setting behind a city skyline.",
    rating: 4.5,
    id: "2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1692545934134-e2ad96814bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Card Three Majestic Mountains",
    description: "Card Three Tall mountains with snow-capped peaks.",
    rating: 4.9,
    id: "3",
  },
];

// const RestourantCards = (props) => {
// console.log(props);
const RestourantCards = ({ imageUrl, title, description, rating }) => {
  // const { imageUrl, title, description, rating } = RestourantCards;
  return (
    //React Fragmane <>  use for to use more than one parent  </>
    <>
      <div className="container mt-5">
        {/* get the data directly from the API with object. method */}
        {/* <div className="card">
          <img
            src={restro[0].imageUrl}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{restro[0].title}</h5>
            <p className="card-text">{restro[0].description}</p>
            <p className="card-text">{restro[0].rating} Stars</p>
          </div>
        </div> */}

        {/* With the help of props or by pass the props keyword form the component call */}
        {/* <div className="card">
          <img
            src={props.RestourantCards.imageUrl}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.RestourantCards.title}</h5>
            <p className="card-text">{props.RestourantCards.description}</p>
            <p className="card-text">{props.RestourantCards.rating} Stars</p>
          </div>
        </div> */}

        {/* again we destructure the data or the variable to the value names */}
        {/* <div className="card">
          <img
            src={RestourantCards.imageUrl}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">{RestourantCards.title}</h5>
            <p className="card-text">{RestourantCards.description}</p>
            <p className="card-text">{RestourantCards.rating} Stars</p>
          </div>
        </div> */}

        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{rating} Stars</p>
          </div>
        </div>
      </div>
    </>
  );
};

// What are param and arguments
// Ex:

// function fn (param1, param2){
//   logical code with received param
// }

// fn ("xyz", "abc");
// function call with passing some argument which help the function code to roundFloat32
// This is param and argu

const BodyComponent = () => {
  return (
    <>
      <div className="display-setting container">
        {/* <RestourantCards /> */}
        {/* {RestourantCards(restro[2])}  we can pass the props like this also because at the end its a normal fun */}
        {/* <RestourantCards
          imageUrl={restro[0].imageUrl}
          title={restro[0].title}
          description={restro[0].description}
          rating={restro[0].rating}
        />
        <RestourantCards
          imageUrl={restro[1].imageUrl}
          title={restro[1].title}
          description={restro[1].description}
          rating={restro[1].rating}
        />
        <RestourantCards
          imageUrl={restro[2].imageUrl}
          title={restro[2].title}
          description={restro[2].description}
          rating={restro[2].rating}
        /> */}

        {/* instead of doing above code we can wrote like this also in this way we got all the data from the data object */}

        {/* <RestourantCards {...restro[0]} />
        <RestourantCards {...restro[1]} />
        <RestourantCards {...restro[2]} /> */}

        {/* now here we have to use map function to get all the data at a time  */}

        {restro.map((restData) => {
          // No key <<  Index key << unique key
          // No key is not acceptable, use index key when you did'nt have any unique key
          return <RestourantCards {...restData} key={restData.id} />;
        })}
      </div>
    </>
  );
};

const FooterComponent = () => {
  return <div className="container-fluid">Footer</div>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
