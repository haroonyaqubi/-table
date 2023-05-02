// import styled from "styled-components";
// import React, { useState } from "react";

// function Search() {
//   const [searchValue, setSearchValue] = useState("");
//   const [data, setData] = useState([]);

//   return (
//     <formStyle>
//       <input
//         className="input"
//         type="text"
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />
//       <div className="template_container">
//         {data
//           .filter((recipe) => {
//             if (searchValue === "") {
//               return recipe;
//             } else if (
//               recipe.target.toLowerCase().includes(searchValue.toLocaleLowerCase())
//             ) {
//               return recipe;
//             }
//           })

//           //This is calling the .map() method on the filtered data and returning a new array of JSX elements.it allows the program to iterate over the data array and return a new array of elements based on the filtering condition.
//           .map((recipe, key) => {
//             return (
//               <div className="template" key={key}>
//                 <img src={recipe.image} alt="" />
//                 <h3>{recipe.title}</h3>
//               </div>
              
//             );
//           })}
//       </div>
//     </formStyle>
//   );
// }

// export default Search;
