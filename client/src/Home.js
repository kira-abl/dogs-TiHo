import * as Survey from "survey-react";
import "survey-react/survey.css";
import './App.css';
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

Survey.StylesManager.applyTheme("modern");



var json = { surveyId: '94fddab0-4a51-4b98-abf6-60ef8b895197', surveyPostId: '155b60f3-7268-4c0e-93dc-338fc33f4387'};



function onValueChanged(options) {
    console.log(options.valuesHash);
}






// function uploadFile(file, signedRequest) {
// let headers = new Headers();
//
// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
// headers.append('Origin','http://localhost:3000');
//
// fetch(signedRequest, {
//     mode: 'cors',
//     credentials: 'include',
//     method: 'POST',
//     headers: headers,
//     body: file
// })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error.message));
// }

// function uploadFile(file, signedRequest, url) {
//                 const xhr = new XMLHttpRequest();
//                 xhr.open('PUT', signedRequest);
//                 console.log('Request', signedRequest);
//                 xhr.onreadystatechange = () => {
//                     if (xhr.readyState === 4) {
//                         if (xhr.status === 200) {
//                             document.getElementById('preview').src = url;
//                             document.getElementById('avatar-url').value = url;
//                         } else {
//                             alert('Could not upload file.');
//                         }
//                     }
//                 };
//                 xhr.send(file);
//             }

function onUploadFiles(survey, options) {
    console.log("Fire!", options.files[0]);

    var formData = new FormData();


    var file = options.files[0];
    formData.append('fileName', file.name);
    formData.append('file', file);
    formData.append('fileType', file.type);
    // formData.append(file.name, file);
    for (var value of formData.values()) {
    console.log(value.name);
}

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "/logmood",
      // `/logmood?file-name=${file.name}&file-type=${file.type}`,
    ); // https://surveyjs.io/api/MySurveys/uploadFiles
    xhr.onload = function() {
        var response = JSON.parse(xhr.responseText);
        console.log("Data received", response);

    };
    xhr.send(formData);
    // setTimeout(() => {
    //     options.callback("success", [
    //         {
    //           file: options.files[0],
    //           content:
    //               "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
    //         }
    //     ]);
    // }, 2000);
}


function Home() {

  function onComplete(result) {

    function myFunction() {
      alert("Data could not be saved. Please refresh the page and try again.");
}

    const toggleCompleted = () => setCompleted("completed");



      console.log("Complete! " + result.data);
      fetch("/logmood", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          result: result.data,
        })
      })
        // .then(response => answer = "Yes")
        // .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
               if(response.status === 200){

                toggleCompleted();

               } else {

                 myFunction();
                 throw new Error(response.status);


       }})
       .catch(err => console.log(err));
}

var model = new Survey.Model(json);
const [completed, setCompleted] = React.useState("");
console.log("Completed:", completed);

if (completed === "completed") {
    return <Redirect to={"/menu"} />
  }


  return (
    <div className="App">
      <Survey.Survey
          model={model}
          onComplete={onComplete}
          onValueChanged={onValueChanged}
          // onUploadFiles={onUploadFiles}


        />
    </div>
  );

}

export default Home;
