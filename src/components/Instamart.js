// import { useState } from "react";

// const Section = ({ title, description, isVisible, setIsVisible }) => {
//   return (
//     <>
//       <div className="border-0">
//         <h3>{title}</h3>
//         {isVisible ? (
//           <button
//             onClick={() => {
//               setIsVisible(false);
//             }}
//           >
//             Hide
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               setIsVisible(true);
//             }}
//           >
//             Show
//           </button>
//         )}

//         {isVisible && <p>{description}</p>}
//       </div>
//     </>
//   );
// };

// const Instamart = () => {
//   const [sectionConfig, setSectionConfig] = useState({
//     showAbout: true,
//     showTeam: false,
//     showCareer: false,
//   });
//   return (
//     <>
//       {/* This component is just crated to check the functionlity for the Dynamic Import or chunking or etc */}
//       <h3>Instamart</h3>
//       <h3>Having 100's of Component</h3>
//       <br></br>
//       <br></br>
//       <div>
//         {/* //Here all the section have different states and different props for all the component */}
//         {/* it is like different version of sections at each and every time */}
//         <Section
//           title={"About InstaMart"}
//           description={
//             "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
//           }
//           isVisible={sectionConfig.showAbout}
//           setIsVisible={() =>
//             setSectionConfig({
//               showAbout: true,
//               showTeam: false,
//               showCareer: false,
//             })
//           }
//         />

//         <Section
//           title={"Team InstaMart"}
//           description={
//             "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
//           }
//           isVisible={sectionConfig.showTeam}
//           setIsVisible={() =>
//             setSectionConfig({
//               showAbout: false,
//               showTeam: true,
//               showCareer: false,
//             })
//           }
//         />

//         <Section
//           title={"Careers InstaMart"}
//           description={
//             "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
//           }
//           isVisible={sectionConfig.showCareer}
//           setIsVisible={() =>
//             setSectionConfig({
//               showAbout: false,
//               showTeam: false,
//               showCareer: true,
//             })
//           }
//         />
//       </div>
//     </>
//   );
// };
// export default Instamart;

// THE WHOLE CODE IS THE VERY BAD WAY TO DO LIFTING UP THE STATE
