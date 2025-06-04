// Define an array of URLs, their relative position in this list matters 
var urls = [
  //1
  "https://provost.ncsu.edu/ofe/wp-content/uploads/sites/2/2023/02/OFE_DoodlEdPoster_2023-1536x864.jpg",
  //2
  "https://provost.ncsu.edu/ofe/wp-content/uploads/sites/2/2023/03/Using-LinkedIn-to-Connect-Course-Concepts-to-Career-Plans-1536x1024.jpg",
  //3
  "https://provost.ncsu.edu/ofe/wp-content/uploads/sites/2/2023/02/A-process-Costing-Simulation-scaled.jpg",
  //4
  "https://provost.ncsu.edu/ofe/wp-content/uploads/sites/2/2023/03/What-Really-Gets-You-INto-Grad-School-1536x1125.jpg",
  //5
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_purple.png?v=1678905572832",
  //6
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTextTestIS_pink.png?v=1678905573077",
  //7
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_blue.png?v=1678905573412",
  //8
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_green.png?v=1678905573663",
  //9
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_orange.png?v=1678905572300",
  //10
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTextTestIS_yellow.png?v=1678905572532",
  //11
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_purple.png?v=1678905572832",
  //12
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTextTestIS_pink.png?v=1678905573077",
  //13
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_blue.png?v=1678905573412",
  //14
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_green.png?v=1678905573663",
  //15
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/PosterTestIS_magenta.png?v=1678905573910",
  //16
  "https://cdn.glitch.global/e015eb63-4c2a-4bed-bfb3-2b3afec0bdbf/Virtual%20Plant%20Anatomy%20Dissections%20Facilitate%20Remote%20and%20Asynchronous%20Experiential%20Learning_19201080.png?v=1678916211161",
  //17
  
  //18
  
  //19
  
  //20
  
  //21
  
  //22
  
  //23
  
  //24
  
];

// Define an object that maps case names to their corresponding slice indexes.
// 
var caseToSlice = {
  "table1": [0, 4],
  "table2": [4, 8],
  "table3": [8, 12],
  "table4": [12, 16]
};

// Get the current case from the URL parameter
var currentCase = window.location.search.split("=")[1];

// Extract the subset of the array based on the current case
var subset = urls.slice(...caseToSlice[currentCase]);

// Get all embed tags on the page
var embeds = document.getElementsByTagName("iframe");

// Assign a random URL from the subset to each embed tag
for (var i = 0; i < embeds.length; i++) {
  var randomIndex = Math.floor(Math.random() * subset.length);
  embeds[i].setAttribute("src", subset[randomIndex]);

  // Remove the URL from the subset to ensure it is used only once
  subset.splice(randomIndex, 1);
}