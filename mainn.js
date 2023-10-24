function page(){
  addTable()
}

function RegisterDetails(){
  window.location.href = "stable.html";
}

let EditId;
let localst = [];

function submit() {
  let object = {};
  object.StudentName = document.getElementById("StudentName").value;
  object.FatherName = document.getElementById("FatherName").value;
  object.Age = document.getElementById("Age").value;
  object.DateofBirth = document.getElementById("DateofBirth").value;
  object.Gender = document.getElementById("Gender").value;
  object.City = document.getElementById("City").value;
  object.Pincode = document.getElementById("Pincode").value;
  object.Address = document.getElementById("Address").value;

  if (object.StudentName == "") {
      document.getElementById("demo").innerHTML = "Name Required";
      document.getElementById("StudentName").style.border="2px solid red";
  } else {
      document.getElementById("demo").innerHTML = "";
      document.getElementById("StudentName").style.border="2px solid green";
  }

  // (Repeat the above pattern for other fields)

  if (!object.StudentName || !object.FatherName || !object.Age || !object.DateofBirth || 
      !object.Gender || !object.City || !object.Pincode || !object.Address) {
      return false;
  }

  if (EditId != undefined) {
      localst[EditId] = object; // Use assignment instead of multiple lines
  } else {
      localst.push(object);
  }
  
  localStorage.setItem("array", JSON.stringify(localst));
  addTable();

  // Reset input fields
  let inputFields = ["StudentName", "FatherName", "Age", "DateofBirth", "Gender", "City", "Pincode", "Address"];
  inputFields.forEach(field => {
      document.getElementById(field).value = "";
      document.getElementById(field).style.border = "2px solid green"; // Reset border
  });
}

function addTable() {
  // Initialize localst from localStorage
  localst = JSON.parse(localStorage.getItem("array")) || [];

  var table = "";

  for (var i = 0; i < localst.length; i++) {
      table += "<tr>";
      table += "<td>" + localst[i].StudentName + "</td>";
      table += "<td>" + localst[i].FatherName + "</td>";
      table += "<td>" + localst[i].Age + "</td>";
      table += "<td>" + localst[i].DateofBirth + "</td>";
      table += "<td>" + localst[i].Gender + "</td>";
      table += "<td>" + localst[i].City + "</td>";
      table += "<td>" + localst[i].Pincode + "</td>";
      table += "<td>" + localst[i].Address + "</td>";
      table +=
          '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +
          i +
          ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +
          i +
          ')">Delete</button></td>';
      table += "</tr>";
  }
  document.getElementById("second").innerHTML = table;
}

function Edit(id) {
  EditId = id;
  var fields = ["StudentName", "FatherName", "Age", "DateofBirth", "Gender", "City", "Pincode", "Address"];
  fields.forEach(field => {
      document.getElementById(field).value = localst[id][field];
  });
}

function Delete(id) {
  localst.splice(id, 1);
  localStorage.setItem("array", JSON.stringify(localst));
  addTable();
}

