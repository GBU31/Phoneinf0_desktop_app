function Run() {
  console.log($('#id_pn').val())
  $.post("https://phoneinf0.herokuapp.com/api/", {
      'pn':$('#id_pn').val(),
  },
  function(data,status){
    alert(JSON.stringify(data))
})
}