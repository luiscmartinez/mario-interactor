/* colorful letters */

//https://stackoverflow.com/questions/16073093/innerhtml-adds-text-but-not-html-tags

document.querySelectorAll(".coloredFont").forEach((textID) => {
  console.log(textID);
  var text = textID.innerHTML;
  var toChange = text.split("");
  var newText = "";
  var aClassName = [
    "blue",
    "yellow",
    "red",
    "green",
    "yellow",
    "red",
    "green",
    "yellow",
    "blue",
    "green",
  ];
  var colorNumber = 0;

  for (var i = 0, ii = toChange.length; i < ii; i++) {
    if (colorNumber == aClassName.length) {
      colorNumber = 0;
    }
    newText += `<span class="${aClassName[colorNumber]}">${toChange[i]}<\/span>`;
    colorNumber++;
  }
  textID.innerHTML = newText;
});
