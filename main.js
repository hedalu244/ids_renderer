function tokenize(input) {
  return Array.from(input);
}

const size = 100;

function parse(tokens) {
  let head = tokens.shift();
  if(head === undefined) return [];
  let nodes = parse(tokens);

  if (head === "\u2ff0") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let left = next(nodes);
    let right = next(nodes);

    left.style.position = "absolute";
    left.style.transform = "scale(0.5, 1)";
    left.style.top = "0";
    left.style.left = "0";

    right.style.position = "absolute";
    right.style.transform = "scale(0.5, 1)";
    right.style.top = "0";
    right.style.left = (size * 0.5) + "px";

    node.appendChild(left);
    node.appendChild(right);
    return [node, ...nodes];
  }
  else if (head === "\u2ff1") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let above = next(nodes);
    let below = next(nodes);

    above.style.position = "absolute";
    above.style.transform = "scale(1, 0.5)";
    above.style.top = "0";
    above.style.left = "0";

    below.style.position = "absolute";
    below.style.transform = "scale(1, 0.5)";
    below.style.top = (size * 0.5) + "px";
    below.style.left = "0";

    node.appendChild(above);
    node.appendChild(below);
    return [node, ...nodes];
  }
  else if (head === "\u2ff2") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let left = next(nodes);
    let middle = next(nodes);
    let right = next(nodes);

    left.style.position = "absolute";
    left.style.transform = "scale(0.4, 1)";
    left.style.top = "0";
    left.style.left = "0";

    middle.style.position = "absolute";
    middle.style.transform = "scale(0.4, 1)";
    middle.style.top = "0";
    middle.style.left = (size * 0.3) + "px";

    right.style.position = "absolute";
    right.style.transform = "scale(0.4, 1)";
    right.style.top = "0";
    right.style.left = (size * 0.6) + "px";

    node.appendChild(left);
    node.appendChild(middle);
    node.appendChild(right);
    return [node, ...nodes];
  }
  else if (head === "\u2ff3") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let above = next(nodes);
    let middle = next(nodes);
    let below = next(nodes);

    above.style.position = "absolute";
    above.style.transform = "scale(1, 0.4)";
    above.style.top = "0";
    above.style.left = "0";

    middle.style.position = "absolute";
    middle.style.transform = "scale(1, 0.4)";
    middle.style.top = (size * 0.3) + "px";
    middle.style.left = "0";

    below.style.position = "absolute";
    below.style.transform = "scale(1, 0.4)";
    below.style.top = (size * 0.6) + "px";
    below.style.left = "0";

    node.appendChild(above);
    node.appendChild(middle);
    node.appendChild(below);
    return [node, ...nodes];
  }
  else if (head === "\u2ff4") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.6, 0.6)";
    inside.style.top = (size * 0.2) + "px";
    inside.style.left = (size * 0.2) + "px";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ff5") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.6, 0.8)";
    inside.style.top = (size * 0.2) + "px";
    inside.style.left = (size * 0.2) + "px";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ff6") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.6, 0.8)";
    inside.style.top = "0";
    inside.style.left = (size * 0.2) + "px";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ff7") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.6, 0.8)";
    inside.style.top = (size * 0.2) + "px";
    inside.style.left = (size * 0.2) + "px";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ff8") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.8, 0.8)";
    inside.style.top = (size * 0.2) + "px";
    inside.style.left = (size * 0.2) + "px";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ff9") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.8, 0.8)";
    inside.style.top = (size * 0.2) + "px";
    inside.style.left = "0";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ffa") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let outside = next(nodes);
    let inside = next(nodes);

    outside.style.position = "absolute";
    outside.style.transform = "scale(1, 1)";
    outside.style.top = "0";
    outside.style.left = "0";

    inside.style.position = "absolute";
    inside.style.transform = "scale(0.8, 0.8)";
    inside.style.top = "0";
    inside.style.left = (size * 0.2) + "px";

    node.appendChild(outside);
    node.appendChild(inside);
    return [node, ...nodes];
  }
  else if (head === "\u2ffb") {
    let node = document.createElement("div");
    node.classList.add("kanji");
    let under = next(nodes);
    let over = next(nodes);

    under.style.position = "absolute";
    under.style.transform = "scale(1, 1)";
    under.style.top = "0";
    under.style.left = "0";

    over.style.position = "absolute";
    over.style.transform = "scale(1, 1)";
    over.style.top = "0";
    over.style.left = "0";

    node.appendChild(under);
    node.appendChild(over);
    return [node, ...nodes];
  }
  else {
    node = document.createElement("div");
    node.classList.add("kanji");
    node.innerText = head;
    return [node, ...nodes];
  }

  function next(nodes){
    let node = nodes.shift();
    if(node === undefined) {
      node = document.createElement("div");
      node.classList.add("kanji");
      node.classList.add("empty");
      node.innerText = "";
    }
    return node;
  }
}

function $(id) {return document.getElementById(id);}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function update(){
  let input = $("input").value
  $("output").innerHTML = "";
  parse(tokenize(input)).forEach(x=>$("output").appendChild(x));
  window.history.replaceState(null,null,"?s=" + encodeURIComponent(input));
}

window.onload = function() {
  $("input").value = getParam("s");
  update();
  $("input").oninput = update;
}
