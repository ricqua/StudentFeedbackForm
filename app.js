//Top input boxes
var studentName = document.getElementById("studentInput");
var dateInput = document.getElementById("dateInput");
var timeInput = document.getElementById("timeInput");
var bookInput = document.getElementById("bookInput");
var unitInput = document.getElementById("unitInput");
var pageInput = document.getElementById("pageInput");

//Right input boxes
var goalsInput = document.getElementById("goalsInput");
var vocabInput = document.getElementById("vocabInput");
var pronunciationInput = document.getElementById("pronunciationInput");
var focusInput = document.getElementById("focusInput");
var achievementsInput = document.getElementById("achievementsInput");

//Left input boxes
var lastweekInput = document.getElementById("lastweekInput");
var errorcorrectionInput = document.getElementById("errorcorrectionInput");
var homeworkInput = document.getElementById("homeworkInput");

//Bottom input boxes
var pdfButton = document.getElementById("pdfButton");
var txtButton = document.getElementById("txtButton");
var sendInput = document.getElementById("sendInput");
var sendButton = document.getElementById("sendButton");


var today = new Date();
dateInput.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
timeInput.value = today.getHours() + ':' + ('0' + (today.getMinutes() + 1)).slice(-2);


// pdfButton.onclick = function (){
//     alert("Feedback form saved to .PDF.");
// };

//Save the page to a text file
txtButton.onclick = function saveTextAsFile(){
    var textToSave = "Student name: " + studentName.value + "\n"
                     + "Date: " + dateInput.value + "\n"
                     + "Time: " + timeInput.value + "\n"
                    //  + "Book: " + bookInput.value + "\n"
                     + "Unit: " + unitInput.value + "\n"
                    //  + "Page/s: " + pageInput.value + "\n\n"

                     + "Goals of the lesson: " + "\n" + goalsInput.value + "\n\n"
                     + "New Vocabulary & Expressions: " + "\n" + vocabInput.value + "\n\n"
                     + "Pronunciation: " + "\n" + pronunciationInput.value + "\n\n"
                     + "Focus Ares for Improvement: " + "\n" + focusInput.value + "\n\n"
                     + "Achievements & Improvements: " + "\n" + achievementsInput.value + "\n\n"

                     + "Last week: " + "\n" + lastweekInput.value + "\n\n"
                     + "Error Correction / Feedback: " + "\n" + errorcorrectionInput.value + "\n\n"
                     + "Homework: " + "\n" + homeworkInput.value + "\n\n";
                    
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = studentInput.value + "-" + dateInput.value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event){
    document.body.removeChild(event.target);
}

//Load the page from a text file
// function loadFileAsText()
// {
//     var fileToLoad = document.getElementById("fileToLoad").files[0];

//     var fileReader = new FileReader();
//     fileReader.onload = function(fileLoadedEvent) {
//         var textFromFileLoaded = fileLoadedEvent.target.result;
//         document.getElementById("inputTextToSave").value = textFromFileLoaded;
//     };
//     fileReader.readAsText(fileToLoad, "UTF-8");
// }