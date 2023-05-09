//Solution for 6 kyu Wikidata Json Scraper 
//Link to Kata: https://www.codewars.com/kata/643869cb0e7a563b722d50ad/javascript

const axios = require('axios') 
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate'  }

const wikidataScraper = async (url) => {
  
  const id = await getEntryName(url)

  
  const response = await axios.get(url, headers) 
  const labels = response.data.entities[id].labels
  const descriptions = response.data.entities[id].descriptions
  
 
   return {
    id: id,
    label: 'en' in labels ? labels.en.value : "No Label",
    description: 'en' in descriptions ? descriptions.en.value : "No Description"
  }
  

}




const getEntryName = async (url) =>  {
  let entryName = []
  for (let i = url.length -1; i > 0; i--) {
      if (url[i] === '/') break
      else entryName.unshift(url[i])
  }
  
 return entryName.join('').split('.')[0]
  
}