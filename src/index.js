const js = import("../node_modules/@connorskees/grass/grass.js");

window.doRepl = () => {
  let textIn = document.getElementById("in").value;
  let out = document.getElementById("out");
  js.then((js) => {
    try {
      out.value = js.from_string(textIn);
    } catch (e) {
      out.value = e;
    }
  });
};

setInterval(window.doRepl, 100);
