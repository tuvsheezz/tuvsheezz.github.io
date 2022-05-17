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

  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/976119401931735070/4PMnZC7qDqENRWkNGIf6o47sMYjY-FCskkrdIpf7eQ-T71TDB0e_JwRyF_DLGawJZL4H");

  request.setRequestHeader('Content-type', 'application/json');
  const params = { content: "HI" }

  request.send(JSON.stringify(params));
}, 1000);