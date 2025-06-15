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
  "https://provost.ncsu.edu/ofe/wp-content/uploads/sites/2/2023/02/OFE_DoodlEdPoster_2023-1536x864.jpg",
  //6
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_pink.png?raw=true",
  //7
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_blue.png?raw=true",
  //8
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_green.png?raw=true",
  //9
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_orange.png?raw=true",
  //10
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_yellow.png?raw=true",
  //11
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_purple.png?raw=true",
  //12
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_pink.png?raw=true",
  //13
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_blue.png?raw=true",
  //14
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_green.png?raw=true",
  //15
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/PosterTestIS_magenta.png?raw=true",
  //16
  "https://github.com/technobotanist/InnovationStudioEmbeds/blob/main/Virtual%20Plant%20Anatomy%20Dissections%20Facilitate%20Remote%20and%20Asynchronous%20Experiential%20Learning_19201080.png?raw=true",
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
