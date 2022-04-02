function Run() {
  let data = {pn:document.getElementById("id_pn").value};
  fetch("https://phoneinf0.herokuapp.com/api/", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data),
  }).then(res => {
    alert(res)
  });
}
