const js = import("../node_modules/@connorskees/grass/grass.js");

window.compile = (input, output) => {
  if (!input || !output) {
    return;
  }

  let inText = input.getModel().getValue();
  let currentOutText = output.getModel().getValue();

  js.then((js) => {
    let outText;
    try {
      let compiled = js.from_string(inText);
      if (compiled === currentOutText) {
        return;
      }

      outText = compiled;
    } catch (e) {
      if (e === currentOutText) {
        return;
      }

      outText = e;
    }

    output.getModel().setValue(outText);
  });
};
