customerSelect.onshow=function(){
  let query = "SELECT DISTINCT state FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
    if (req1.status = 200) {
      results = JSON.parse(req1.responseText)
  
    if (results == 0) {
    } else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++) {
      message = message + results[i][0] + "\n"
    }
    txtStateOptions.value = message
  }
  } else {
        }
}

btnSubmit.onclick=function(){
  let selection = inptStates.value
  let query = "SELECT name FROM customer WHERE state = " + '"' + selection + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
    if (req1.status = 200) {
        results = JSON.parse(req1.responseText)
          if (results == 0) {
        } else {
          lblCompany.value = results + "\n"
            }
  } else {
    }
}
