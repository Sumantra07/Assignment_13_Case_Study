
/* fetch contents from URL and show it in console 
 Please run json-sever on your console and run db.json to get the URL
*/

var url = 'http://localhost:3000/Cv';
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (tasksJson) {
        Cv(tasksJson);
    })
    .catch(function (err) {
        console.log(err);
    });
// get the result from localhost	
var Cv = function (tasksJson) {
    /* we need to update the values in UI now*/
    // Details related to profile , left hand side of the screen
    // name 
    var name = document.querySelector('#name');
    name.innerHTML = tasksJson[0].profile.name;

    // designation
    var designation = document.querySelector("#designation");
    designation.innerHTML = tasksJson[0].profile.designation;

    // overview
    var overview = document.querySelector("#overview");
    overview.innerHTML = tasksJson[0].profile.overview;

    // personal details
    var personalDetails = document.querySelector("#personalDetails");
    var array_details = tasksJson[0].profile.Personality;
    for (var i in array_details) {
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(array_details[i]);
        listItem.appendChild(listValue);
        personalDetails.appendChild(listItem);
    }

    // contact
    var address = document.querySelector("#address");
    var Email = document.querySelector("#Email");
    var mobile = document.querySelector("#mobile");
    address.innerHTML = tasksJson[0].profile.address;
    Email.innerHTML = tasksJson[0].profile.Email;
    mobile.innerHTML = tasksJson[0].profile.Mobile;
    // Details related to profile , left hand side of the html
    
    // Basic Information
    var BasicInformation = document.querySelector("#information");
    BasicInformation.innerHTML = tasksJson[1].information.BasicInformation;

    // Education
    var education = document.querySelector("#education");
    education.innerHTML = tasksJson[1].information.Education;

    // Work Experience
    var experience = document.querySelector("#companyDetails");
    var workEx_array = tasksJson[1].information.Experience;
    // Loop through and get all data related a particular experience
    for (var i in workEx_array) {
        var paraName = document.createElement("p");
        var CompanyNametext = document.createTextNode(workEx_array[i].organization);
        paraName.appendChild(CompanyNametext);
        experience.appendChild(paraName);

        var paraDuration = document.createElement("p");
        var Companydurationtext = document.createTextNode(workEx_array[i].duration);
        paraDuration.appendChild(Companydurationtext);
        experience.appendChild(paraDuration);

        var paraRole = document.createElement("p");
        var Companyroletext = document.createTextNode(workEx_array[i].role);
        paraRole.appendChild(Companyroletext);
        experience.appendChild(paraRole);

        var paraWork = document.createElement("p");
        var Companyworktext = document.createTextNode(workEx_array[i].work);
        paraWork.appendChild(Companyworktext);
        experience.appendChild(paraWork);
    }







}









