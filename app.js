// const heading = React.createElement("h1",{id:"heading"},"Hellow world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // render is used to convert the object to tags

// console.log(heading); //returns the object.

// <div id="parent">
//       <div id="child">
//             <h1>Hello World</h1>
//         </div>
//     </div>
// ReactElement is an object and react obj becomes html when it is renders that the browser can understand.

// CREATING NESTED ELEMENTS USING ARRAY
//  <div id="parent">
//      <div id="child">
//          <h1>Hello World</h1>
// <h2>2nd heading</h2>
//      </div>
//  </div>
// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"working")));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

// CREATING NESTED WITH SIBLINGS USING ARRAY
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "working")
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h1", {}, "working")
//   ),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(parent);
// console.log(parent);

//CREATING NESTED CHILDS USING ARRAY
/* <div id="parent">
  <div id="child1">
    <h1>Hello World-1</h1>
    <h2>2nd heading</h2>
  </div>
  <div id="child2">
    <h1>Hello World-2</h1>
    <h2>2nd heading</h2>
  </div>
</div> */

const parent= React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World-1"),
    React.createElement("h2", {}, "2nd Heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World-2"),
    React.createElement("h2", {}, "2nd Heading"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);


