  const apiUrl= "https://api.geoapify.com/v1/geocode/reverse?lat=52.51894887928074&lon=13.409808180753316&format=json&apiKey=9d98213a521a48f1b4c616f2891b33cf"

  
fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=9d98213a521a48f1b4c616f2891b33cf`)
.then(resp => resp.json())
.then((result) => {
  if (result.length) {
	  console.log(result[0].timezone);
  } else {
    console.log("No location found");
  }
});
