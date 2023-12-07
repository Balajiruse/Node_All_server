document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let MobileNo = document.getElementById("mobileno").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    
    
    var newRow = document.createElement("tr");
    
    
    newRow.innerHTML = `<td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${MobileNo}</td>
                        <td>${email}</td>
                        <td>${address}</td>`;
    
   
    document.getElementById("dataTable").getElementsByTagName('tbody')[0].appendChild(newRow);
  });
  
  
  
  
  