function Run() {
  console.log(document.getElementById("id_pn").value)
  $.post("https://phoneinf0.herokuapp.com/api/", {
      'pn':$('#id_pn').val(),
  },
  function(data,status){
    alert(JSON.stringify(data))
})
}
