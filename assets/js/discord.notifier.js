function readTextFile(file)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}

setInterval(function() {
  let today = new Date().toISOString().slice(0, 10)

  console.log(today)
  // readTextFile()
  const query2 = new URLSearchParams(window.location.search);
  const webhookURL = query2.get('discord')

  const request = new XMLHttpRequest();
  request.open("POST", webhookURL);

  request.setRequestHeader('Content-type', 'application/json');
  const params = { content: "HI" }

  request.send(JSON.stringify(params));
}, 1000);