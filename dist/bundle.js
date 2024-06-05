/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function validateLink() {\r\n  const input = document.getElementById(\"link-input\");\r\n  if (input.value) {\r\n    if (isUrlValid(input.value)) {\r\n      handleMessage(\"process\");\r\n    } else {\r\n      handleMessage();\r\n      return;\r\n    }\r\n    const apiUrl = `http://localhost:5000/generate_pdf?url=${input.value}`;\r\n    fetch(apiUrl)\r\n      .then(async (res) => {\r\n        const data = await res.json();\r\n        if (res.ok) {\r\n          // console.log(data.message);\r\n          handleMessage(\"success\");\r\n        } else {\r\n          // console.log(data.message);\r\n          handleMessage(\"failed\");\r\n        }\r\n      })\r\n      .catch((error) => {\r\n        handleMessage(\"\", `Error in API calling: ${error}`);\r\n        // console.log(`Error in API calling: ${error}`);\r\n      });\r\n  }\r\n}\r\n\r\nfunction handleMessage(status = \"\", message = \"\") {\r\n  const info = document.getElementById(\"info\");\r\n  const button = document.querySelector(\".btn\");\r\n  const ptag = document.createElement(\"p\");\r\n  ptag.style.fontSize = \"small\";\r\n  info.innerHTML = \"\";\r\n  if (status === \"process\") {\r\n    ptag.innerHTML =\r\n      \"We are processing PDF for you, please wait...<br>Time taken may vary on size on content\";\r\n    ptag.style.color = \"skyblue\";\r\n    button.id = \"disable-btn\";\r\n    button.disabled = true;\r\n  } else if (status === \"success\") {\r\n    ptag.innerHTML =\r\n      \"PDF downloaded successfully, saved in Downloads directory\";\r\n    ptag.style.color = \"#04c704\";\r\n    button.disabled = false;\r\n    button.id = \"\";\r\n  } else if (status === \"failed\") {\r\n    ptag.innerHTML = \"Something went wrong, please try again\";\r\n    ptag.style.color = \"red\";\r\n    button.disabled = false;\r\n    button.id = \"\";\r\n  } else {\r\n    ptag.innerHTML = message || \"Please enter valid Link\";\r\n    ptag.style.color = \"red\";\r\n    button.disabled = false;\r\n    button.id = \"\";\r\n  }\r\n  info.append(ptag);\r\n}\r\n\r\nfunction isUrlValid(url) {\r\n  var res = url.match(\r\n    /(http(s)?:\\/\\/.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g\r\n  );\r\n  if (res == null) return false;\r\n  else return true;\r\n}\r\n\n\n//# sourceURL=webpack://linktopdf/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;