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

let first = formData[0];
let second = formData[1];
let third = formData[2];
let fourth = formData[3];
let fifth = formData[4];
let sixth = formData[5];
let seventh = formData[6];
let eighth = formData[7];

// let objectSelect = [first, second, third, fourth, fifth, sixth, seventh, eighth]

// -------- Your Code Goes Below this Line --------
// function findPlaceHolder{
//   for (let i=0; i<formData.length; i++)
//   formData.type = input.type
// }
// console.log(first.type)



for (let i = 0; i < 8; i++) {
  let formFields = document.getElementsByClassName('fields');
  let textInput = document.createElement('input');
  let selectType = document.createElement('select');
  let textInputValue = document.getElementsByTagName('input');
  let inputType = textInputValue.type = formData[i]['type'];
  let inputID = textInputValue.id = formData[i]['id']
  let inputPlaceholder = textInputValue.placeholder = (formData[i]["label"])


    if (formData[i] === 4){
      fields.appendChild(selectType);
      selectType.setAttribute("type", inputType);
      selectType.setAttribute("id", inputID);
      selectType.setAttribute("placeholder", inputPlaceholder)
    } else {

    fields.appendChild(textInput);
    textInput.setAttribute("type", inputType);
    textInput.setAttribute("id", inputID);
    textInput.setAttribute("placeholder", inputPlaceholder)
}
};

document.getElementsByTagName("button")
// if
// for (let i=0; i<8; i++){
//
//   let textInputValue = document.getElementsByTagName('input')
//   textInputValue.setAttribute("select", optionsSelectors)
// }





// formFields.appendChild(textInput);
// let textInputValue = (input type=first.type id=first.id placeholder=first.label)
