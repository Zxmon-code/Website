// search engines
let startpageSearch = "https://www.startpage.com/sp/search?q=";
let duckduckgoSearch = "https://duckduckgo.com/";
let githubSearch = "https://github.com/search?q=";
let googleSearch = "https://google.com/search?q=";
let stackoverflowSearch = "https://stackoverflow.com/search?q=";
let nixosPackageSearch = "https://search.nixos.org/packages?query=";
let youtubeSearch = "https://www.youtube.com/results?search_query=";

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
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
      searchCommand(commandArray, startpageSearch);
      break;
    case "google":
      searchCommand(commandArray, googleSearch);
      break;
    case "gh":
    case "github":
      switch (commandArray[1]) {
        case "user":
          commandArray.push("&type=users");
          commandArray.splice(1, 1);
          console.log(commandArray)
          break;
        case "repos":
        case "repositories":
          commandArray.push("&type=repositories");
          commandArray.splice(1, 1);
          break;
        case "code":
          commandArray.push("&type=code");
          commandArray.splice(1, 1);
          break;
        default:
          break;
      }
      searchCommand(commandArray, githubSearch);
      break;
    case "nixos":
      searchCommand(commandArray, nixosPackageSearch);
      break;
    case "yt":
    case "youtube":
      searchCommand(commandArray, youtubeSearch);
      break;
    case "ddg":
    case "duckduckgo":
      searchCommand(commandArray, duckduckgoSearch);
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
  for (let i = 0; i < commandArray.length; i++) {
    if (i === 0) {
    } else {
    const element = commandArray[i];
    searchString += " " + element;
    }
  } 
  window.open(searchEngine + searchString, "_blank").focus();
  printText("searching...");
}

function helpCommand(commandArray) {
  if (commandArray.length === 1) {
    printText(
      `Available Commands:<br>
      - search [prompt]<br>
      - google [prompt]<br>
      - github [prompt]<br>
      - youtube [prompt]<br>`
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
