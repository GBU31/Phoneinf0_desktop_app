function Run() {
  async function postData(url, data = {}) {
    const response = await fetch(url, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: data
      
    });
    return response.json();
  }
  postData('https://phoneinf0.herokuapp.com/api/', 
  "{ 'pn': '+962778910319' }")
    .then(data => {
      alert(data);
    });
}
