// read from the Optimizely object and return an array of objects matching the audiences for which the particular visitor qualified (in a defined campaign)
var audiences = optimizely.get('state').getCampaignStates()[campaign.id].audiences;

// loop through the returned audiences and assign a custom attribute for every audeince a visitor qualified for. audience ID is used as the custom attribute API name in order to easily link the two
for (i = 0; i < audiences.length; i++) { 
  var attr_name = audiences[i].id;
  var attributes = {};
  attributes[attr_name] = "true";
  
  window["optimizely"].push({
  	"type": "user",
  	"attributes": attributes
  });
  
  // (optional) log the audience name used for for every custom attribute that was created
  console.log("Assigning a Custom Attribute for audience: %c" + audiences[i].name , "color: #008394; font-weight: bold;");
}