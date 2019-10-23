function tokenize(input) {
  return Array.from(input);
}

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
    right.style.left = "25px";

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
    below.style.top = "25px";
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
    middle.style.left = "15px";

    right.style.position = "absolute";
    right.style.transform = "scale(0.4, 1)";
    right.style.top = "0";
    right.style.left = "30px";

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
    middle.style.top = "15px";
    middle.style.left = "0";

    below.style.position = "absolute";
    below.style.transform = "scale(1, 0.4)";
    below.style.top = "30px";
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
    inside.style.top = "10px";
    inside.style.left = "10px";

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
    inside.style.top = "10px";
    inside.style.left = "10px";

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
    inside.style.left = "10px";

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
    inside.style.top = "10px";
    inside.style.left = "10px";

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
    inside.style.top = "10px";
    inside.style.left = "10px";

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
    inside.style.top = "10px";
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
    inside.style.left = "10px";

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
      node.innerText = "□";
    }
    return node;
  }
}

function $(id) {return document.getElementById(id);}

window.onload = () => {
  $("input").oninput = () => {
    let input = $("input").value
    $("output").innerHTML = "";
    parse(tokenize(input)).forEach(x=>$("output").appendChild(x));
    window.history.replaceState(null,null,"?s=" + encodeURIComponent(input));
  }
}
