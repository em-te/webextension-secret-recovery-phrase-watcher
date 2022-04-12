for(let n of document.querySelectorAll("*[i18n]")) {
  let s = chrome.i18n.getMessage(n.getAttribute("i18n"));
  if (!s.includes("~")) {
    n.textContent = s;
  } else {
    n.textContent = "";
    s = s.split("~");
    n.appendChild(document.createTextNode(s[0]));
    n.appendChild(document.createElement("u")).appendChild(
      document.createTextNode(s[1])
    );
    if (s[2]) n.appendChild(document.createTextNode(s[2]));
  }
}