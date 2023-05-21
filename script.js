

// Create your own resume data in JSON format
var resume = {
  my_Name: "Arjun Singh",
  Email: "get2arjunsingh@gmail.com",
  Date_of_birth: "21.11.1995",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Hindi", "Nepali", "Bhojpuri"],
  Age: 25,
  Marks: { "B.E": "CGPA 7.12", "Higher secondary": "72%", SSLC: "80%" },
  Qualification: "B.E Computer Science",
  Years_of_Experience: "N/A",
  Software_proficiency: [
    "HTML",
    "CSS",
    "javascript",
    "React JS",
    "Node JS",
    "Mongo DB",
    "Bootstrap",
  ],
  Key_strength: ["short leaning curve", "creative", "apdaptive"],
  Personal_hobbies: ["Gaming", "Binge watching","Hiking"],
};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
  my_Name: "Arjun",
  Email: "get2arjunsingh@gmail.com",
  Date_of_birth: "21.11.1997",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil" ,"Nepali", "Bhojpuri"],
  Age: 26,
  Marks: {"B.E": "CGPA 7.12", "Higher secondary": "72%", SSLC: "80%"},
};
const count = Object.keys(json_data);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
  console.log(json_data[keys]);
}

// for Of
for (let i of count) {
  console.log(json_data[i]);
}

// for each
count.forEach(values);
function values(item) {
  console.log(json_data[item]);
}
