let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // displayInput();
    handleInput(input.value)
    input.value = "";
  }
});

function handleInput(command) {
  commandHandler(command);
}

function commandHandler(command) {
  if(command.includes("search")){
    console.log("commandHandler working");
    searchCommand(command.split(" "))
  };
}

function searchCommand(commandArray) {
  let searchString = "";
  commandArray.forEach(element => {
    if (element.toLowerCase() === "search") {
      
    } else {
      searchString += " "+element;
    }
  });
  window.open("https://duckduckgo.com/"+searchString, '_blank').focus();
}

function displayInput() {
  output.innerHTML = input.value;
}
