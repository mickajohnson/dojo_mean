var fs = require('fs');

function get_extension(url){
  var re = /(?:\.([^.]+))?$/;
  return re.exec(url)[1];
}

function failure(response){
  response.writeHead(404);
  response.end('File not found, fool')
}

function extension_mapper(extension, url){
  let context = {}
  if (extension === "css"){
    context['utf8'] = true;
    context['content-type'] = "text/css";
    context["path"] = "." + url;
    return context;
  }
  else if (extension === "js"){
    context['utf8'] = true;
    context['content-type'] = "text/javascript";
    context["path"] = "." + url;
    return context;
  }
  else if (extension === "jpg" || extension === "jpeg" || extension === "png" || extension === "gif"){
      context['utf8'] = false;
      context['content-type'] = "image/" + extension;
      context["path"] = "." + url;
      return context;
  }
  else{
    context['utf8'] = true;
    context['content-type'] = "text/html";
    context["path"] = "./views" + url;
    return context;
  }
}

module.exports = function(request, response){
  console.log('client request URL: ', request.url);
  if (request.url === '/'){
    request.url = "/index.html"
    console.log(request.url);
  }
  var extension = get_extension(request.url)
  console.log(extension);
  if (!extension){
    failure(response);
    return;
  }
  var context = extension_mapper(extension, request.url)
  if (!context){
    failure(response);
    return;
  }
  if (context['utf8'] === true) {
    console.log(context["content-type"]);
    fs.readFile(context['path'], "utf8", function(errors, contents){
      if (errors){
        failure(response);
        return;
      }
      response.writeHead(200, {'Content-type': context["content-type"]});
      console.log("not image", context["content-type"]);
      response.write(contents);
      response.end();
    })
  }
  else{
    fs.readFile(context['path'], function(errors, contents){
      if (errors){
        failure(response);
        return;
      }
      response.writeHead(200, {'Content-type': context["content-type"]});
      console.log("image", context["content-type"]);
      response.write(contents);
      response.end();
    })
  }
}
