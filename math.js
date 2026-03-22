function evaluate(expression) {
  const $ = (select) => document.querySelector(select)
  resultlabel = $("results")

  resultlabel.textContent = "Result: " + eval(expression)
}
