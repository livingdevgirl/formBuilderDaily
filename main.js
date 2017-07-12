// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
//   // Select the first element from the array
//
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();
//

// -------- Your Code Goes Below this Line --------
// function findPlaceHolder{
//   for (let i=0; i<formData.length; i++)
//   formData.type = input.type
// }
// console.log(first.type)



for (let i = 0; i < formData.length; i++) {
  console.log("hello");
  let formFields = document.getElementsByClassName('fields');
  let textInput = document.createElement('input');
  let selectInput = document.createElement('select');
  let textArea = document.createElement('textArea');
  let inputType = formData[i]['type'];
  let inputID = formData[i]['id'];
  let inputPlaceholder = (formData[i]["label"]);

  if (formData[i]['type'] === 'select') {
    fields.appendChild(selectInput);
    selectInput.setAttribute("id", inputID);
    let optionsList = formData[i].options;
    for(let i=0; i<optionsList.length; i++){
      let newOption = document.createElement("option");
      selectInput.appendChild(newOption);
      newOption.setAttribute("value",optionsList[i]['value']);
      newOption.text = optionsList[i]['label'];
    }

  } else if (formData[i]['type'] === 'textarea') {
      fields.appendChild(textArea)
      textArea.setAttribute("type", inputType);
      textArea.setAttribute("id", inputID);
      textArea.setAttribute("placeholder", inputPlaceholder)
    console.log("is this happening")
  } else {

    fields.appendChild(textInput);
    textInput.setAttribute("type", inputType);
    textInput.setAttribute("id", inputID);
    textInput.setAttribute("placeholder", inputPlaceholder)
  }
};
