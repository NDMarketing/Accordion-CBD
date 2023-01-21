const accordionItem = document.getElementsByClassName("accordionItem");
const accordionItemHeading = document.getElementsByClassName("accordionItemHeading");

for (i = 0; i < accordionItemHeading.length; i++) {
  accordionItemHeading[i].addEventListener("click", toggleItem, false);
}
function toggleItem () {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accordionItem.length; i++) {
    accordionItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}
