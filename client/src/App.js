import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import FindUserForReset from './components/Auth/FindUserForReset';
import ValidateUserByOtp from './components/Auth/ValidateUserByOtp';
import Home from './components/Home/home';
import Profile from './components/Home/profile';
import NewPost from './components/Home/newpost';
import Search from './components/Home/search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<Login />} />
          <Route path = '/signup' element = {<Signup />} />
          <Route path = '/finduserforreset' element = {<FindUserForReset />} />
          <Route path = '/validateuserbyotp' element = {<ValidateUserByOtp />} />
          <Route path = '/home' element = {<Home />} />
          <Route path = '/profile/:username' element = {<Profile />} />
          <Route path = '/createnewpost' element = { <NewPost /> } />
          <Route path = '/search' element = { <Search /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


//   const [addValue, setAddValue] = useState("");
//   const [addNumberValue, setAddNumberValue] = useState("");
//   const [myArr, setMyArr] = useState([]);
//   const [myNumberArr, setMyNumberArr] = useState([]);
//   const [newArrWithoutDuplicates, setNewArrWithoutDuplicates] = useState([]);
//   const [newNumberArrWithoutDuplicates, setNewNumberArrWithoutDuplicates] = useState([]);
//   const [arrSort, setArrSort] = useState([]);
//   const [arrNumberSort, setArrNumberSort] = useState([]);
//   const [finalAns, setFinalAns] = useState([]);
//   const [finalNumberAns, setFinalNumberAns] = useState([]);


//   const handleNumberChange = (e) => {
//     setAddNumberValue(parseInt(e.target.value));
//   };

//   const handleChange = (e) => {
//     setAddValue(e.target.value);
//   };

//   const saveNumberData = (e) => {
//     e.preventDefault();

//     setMyNumberArr([...myNumberArr, addNumberValue]);
//   };

//   const saveData = (e) => {
//     e.preventDefault();

//     setMyArr([...myArr, addValue]);
//   };

//   function remove(myArr) {
//     var arrObj = {};

//     for (var i = 0; i < myArr.length; i++) {
//       arrObj[myArr[i]] = i;
//     }

//     return arrObj;
//   }

//   const removeDuplicate = (e) => {
//     e.preventDefault();

//     const arrObj = remove(myArr);

//     setNewArrWithoutDuplicates(Object.keys(arrObj));
//   };

//   const removeNumberDuplicate = (e) => {
//     e.preventDefault();

//     const arrNumberObj = remove(myNumberArr);

//     setNewNumberArrWithoutDuplicates((Object.keys(arrNumberObj)));
//   };
//   // console.log(newNumberArrWithoutDuplicates);

//   function sortAnyArr(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }

//     return array;
//   }

//   const sortNumberArr = (e) => {
//     e.preventDefault();
//     setArrNumberSort(sortAnyArr(myNumberArr));
//   };
  
//   const sortArr = (e) => {
//     e.preventDefault();
//     setArrSort(sortAnyArr(myArr));
//   };

//   const removeNumberDuplicateAndSort = (e) => {
//     e.preventDefault();

//     const arrObj = remove(myNumberArr);
//     console.log("arrObj", Object.keys(arrObj));
//     const data = Object.keys(arrObj);

//     const numberData =  [];

//     for(var i = 0; i < data.length; i++){
//       numberData.push(parseInt(data[i]));
//     }

//     // setNewArr([...data]);
//     // console.log("newArr", newArr);

//     const finalNumberData = sortAnyArr(numberData);

//     setFinalNumberAns([...finalNumberData]);
//     console.log(finalNumberAns);
//   };

//   const removeDuplicateAndSort = (e) => {
//     e.preventDefault();

//     const arrObj = remove(myArr);
//     console.log("arrObj", Object.keys(arrObj));
//     const data = Object.keys(arrObj);

//     // setNewArr([...data]);
//     // console.log("newArr", newArr);

//     const finalData = sortAnyArr(data);

//     setFinalAns([...finalData]);
//     console.log(finalAns);
//   };

//   // console.log(arrSort);

//   const original = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyItem: 'center',
//     alignItems: 'center',
//     backgroundColor: "blue"
//   };

//   const duplicate = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyItem: 'center',
//     alignItems: 'center',
//     backgroundColor: "red"
//   };

//   const sort = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyItem: 'center',
//     alignItems: 'center',
//     backgroundColor: "green"
//   };

//   const finalans = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyItem: 'center',
//     alignItems: 'center',
//     backgroundColor: "orange"
//   };

//   const seperateBox ={
//     display: 'flex',
//     flexDirection: 'column',
//     justifyItem: 'center',
//     alignItems: 'center',
//     margin: '20px'
//   }

//   return (
//     <>

//       <div style = {seperateBox}>
//         <h1>Add numbers here</h1>
//         <form>
//           <input
//             type="text"
//             onChange={(e) => handleNumberChange(e)}
//             placeholder="enter one number at time"
//           />
//           <button type="submit" onClick={(e) => saveNumberData(e)}>
//             Add Data
//           </button>
//           <button onClick={(e) => removeNumberDuplicate(e)}> Remove Duplicate </button>
//           <button onClick={(e) => sortNumberArr(e)}> Sort </button>
//           <button onClick={(e) => removeNumberDuplicateAndSort(e)}>
//             {" "}
//             Remove Duplicate & Sort{" "}
//           </button>
//         </form>
//         <div style={original}>
//           <h1> originalArray </h1>
//           {myNumberArr.map((item, ind) => (
//             <p key={ind}> {item} </p>
//           ))}
//         </div>
//         <div style={duplicate}>
//           <h1> duplicateRemoved </h1>
//           {newNumberArrWithoutDuplicates.map((item, ind) => (
//             <p key={ind}>{item}</p>
//           ))}
//         </div>
//         <div style={sort}>
//           <h1> sortedOriginalArray </h1>
//           {arrNumberSort.map((item, ind) => (
//             <p key={ind}>{item}</p>
//           ))}
//         </div>
//         <div style={finalans}>
//           <h1> removedDuplicateSortedArray </h1>
//           {finalNumberAns.map((item, ind) => (
//             <p key={ind}>{item}</p>
//           ))}
//         </div>
//       </div>


      
//       {/* For Strings */}
      
//       <div style = {seperateBox}>
//         <h1>Add Strings here</h1>
//         <form>
//           <input
//             type="text"
//             onChange={(e) => handleChange(e)}
//             placeholder="enter one value at time"
//           />
//           <button type="submit" onClick={(e) => saveData(e)}>
//             Add Data
//           </button>
//           <button onClick={(e) => removeDuplicate(e)}> Remove Duplicate </button>
//           <button onClick={(e) => sortArr(e)}> Sort </button>
//           <button onClick={(e) => removeDuplicateAndSort(e)}>
//             {" "}
//             Remove Duplicate & Sort{" "}
//           </button>
//         </form>
//         <div style={original}>
//           <h1> originalArray </h1>
//           {myArr.map((item, ind) => (
//             <p key={ind}> {item} </p>
//           ))}
//         </div>
//         <div style={duplicate}>
//           <h1> duplicateRemoved </h1>
//           {newArrWithoutDuplicates.map((item, ind) => (
//             <p key={ind}>{item}</p>
//           ))}
//         </div>
//         <div style={sort}>
//           <h1> sortedOriginalArray </h1>
//           {arrSort.map((item, ind) => (
//             <p key={ind}>{item}</p>
//           ))}
//         </div>
//         <div style={finalans}>
//           <h1> removedDuplicateSortedArray </h1>
//           {finalAns.map((item, ind) => (
//             <p key={ind}>{item}</p>
//           ))}
//         </div>
//       </div>



//     </>
//   );
// }

// export default App;


// //Write a function to remove duplicate values from array & sort them in accending order without using default methods
// //const depArray = [99,101,80,99,100,80, 70, 80, 90,100, 71,80,101];







// //Write a function to remove duplicate values from array & sort them A-Z order without using default methods
// //const depArray = ["Rahukl","Ram","Ajay","John","Zenab","Ajay", "Shyam", "Abc", "Xyz","abc", "ram"];