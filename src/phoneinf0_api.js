function Run() {
  async function postData(url, data) {
    const response = await fetch(url, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json();
  }
  postData('https://phoneinf0.herokuapp.com/api/',{pn:document.getElementById('id_pn').value})
    .then(data => {
      alert(data);
    });
}
