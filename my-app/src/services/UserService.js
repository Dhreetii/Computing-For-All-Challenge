export async function getSearchResults(term, media) {
  try{
      document.getElementById("loading").innerHTML = "Loading..";
      const response = await fetch('https://itunes.apple.com/search?term=' + term + '&media=' + media);
      document.getElementById("loading").innerHTML = "";
      return await response.json();
  }catch(error) {
      return "error: " + error;
  }
}
