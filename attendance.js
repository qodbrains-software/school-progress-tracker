let date = document.querySelector(".date");

const newDate = () => {
  let today = new Date();
  dd = today.getDay();
  mm = today.getMonth() + 1;
  yyyy = today.getFullYear();

  return "0" + dd + "-" + "0" + mm + "-" + yyyy;
};

date.textContent = newDate();

// ================================================================================================================
//                                                   Attendance logic
// ================================================================================================================


