function Run() {
  console.log(document.getElementById("id_pn").value)
  $.post("https://phoneinf0.herokuapp.com/api/", {
      'pn':document.getElementById("id_pn").value,
  },
  function(data,status){
    alert(JSON.stringify(data))
})
}
