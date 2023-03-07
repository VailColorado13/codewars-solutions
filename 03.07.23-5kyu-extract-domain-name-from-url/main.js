//Solution for 5kyu Extract the domain name from a URL
//Link to kata: https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    url = url.replace("www.", "");
    url = url.replace("http://", "");
    url = url.replace("https://", "");
    return url.split(".")[0];
  }