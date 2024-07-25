function confirmSubmit() {
    
    var confirmed = confirm("Weet u zeker dat dit uw juiste Email is?");

    
    if (confirmed) {
      
      console.log("");
    } else {
      
      console.log("Formulier verzending geannuleerd.");
    }
  }