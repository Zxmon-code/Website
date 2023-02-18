let defaultSearchEngine = "https://duckduckgo.com/";
// search engines
let githubSearch = "https://github.com/search?q=";
let googleSearch = "https://google.com/search?q=";
let stackoverflowSearch = "https://stackoverflow.com/search?q=";
let nixosPackageSearch = "https://search.nixos.org/packages?query="

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
      searchCommand(commandArray, commandArray[0]);
      break;
    case "google":
      searchCommand(commandArray, commandArray[0]);
      break;
    case "github":
      searchCommand(commandArray, commandArray[0]);
      break;
    case "nixos":
      searchCommand(commandArray, commandArray[0]);
      break;
    case "help":
      helpCommand(commandArray);
    default:
      helpCommand(["help"]);
  }
}

function getCommandUsed(command) {
  return command.split(" ")[0].toLowerCase();
}

function searchCommand(commandArray, searchEngine) {
  let searchString = "";
  commandArray.forEach((element) => {
    if (element.toLowerCase() === searchEngine) {
    } else {
      searchString += " " + element;
    }
  });
  switch (searchEngine) {
    case "search":
      console.log("fuck");
      window.open(defaultSearchEngine + searchString, "_blank").focus();
      break;
    case "google":
      console.log("google");
      window.open(googleSearch + searchString, "_blank").focus();
      break;
    case "github":
      window.open(githubSearch + searchString, "_blank").focus();
      break;
    case "nixos":
      window.open(nixosPackageSearch + searchString, "_blank").focus();
      break;
    default:
      break;
  }
  
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
