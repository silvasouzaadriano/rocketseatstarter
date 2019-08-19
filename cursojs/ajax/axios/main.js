axios.get('https://api.github.com/users/silvasouzaadriano')
  .then(function(response) {// Vai ser executado quando o resolve for chamado
    console.log(response.data.avatar_url);
  }) 
  .catch(function(error) { // Vai ser executado quando o reject for chamado
    console.warn(error);
  });