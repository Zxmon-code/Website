let defaultSearchEngine = "https://duckduckgo.com/";
// search engines
let githubSearch = "https://github.com/search?q=";
let googleSearch = "https://google.com/search?q=";
let stackoverflowSearch = "https://stackoverflow.com/search?q=";

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // displayInput();
    handleInput(input.value);
    input.value = "";
  } else {
    printText("");
  }
});

function handleInput(command) {
  commandHandler(command);
}

function commandHandler(command) {
  let commandArray = command.split(" ");
  switch (getCommandUsed(command)) {
    case "search":
      console.log("commandHandler working");
      searchCommand(commandArray);
    case "help":
      helpCommand(commandArray);
    default:
      helpCommand(["help"]);
  }
  if (getCommandUsed === "search") {
    console.log("commandHandler working");
    searchCommand(command.split(" "));
  }
}

function getCommandUsed(command) {
  return command.split(" ")[0].toLowerCase();
}

function searchCommand(commandArray) {
  let searchString = "";
  commandArray.forEach((element) => {
    if (element.toLowerCase() === "search") {
    } else {
      searchString += " " + element;
    }
  });
  window.open(defaultSearchEngine + searchString, "_blank").focus();
}

function googleSearchCommand(commandArray) {
  let searchString = "";
  commandArray.forEach((element) => {
    if (element.toLowerCase() === "search") {
    } else {
      searchString += " " + element;
    }
  });
  window.open(googleSearch + searchString, "_blank").focus();
}

function helpCommand(commandArray) {
  if (commandArray.length === 1) {
    printText(
      "Available Commands:<br> - search [prompt]<br> - google [prompt]<br> - github [prompt]"
    );
  } else {
  }
}

function printText(text) {
  output.innerHTML = text;
}
function displayInput() {
  output.innerHTML = input.value;
}
