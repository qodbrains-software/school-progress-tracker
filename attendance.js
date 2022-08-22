// ==================================================================================================================
//                                                   Mock data
// ==================================================================================================================

const students = [
  {
    student_name: "Christopher Jimenez",
    attendance: [],
    age: 16,
    gender: "Male",
    term: 1,
    subjects: [
      {
        english: [
          {
            task: "reading",
            marks: 10,
            comment: "",
          },
          {
            task: "speech",
            marks: 15,
            comment: "",
          },
          {
            task: "test",
            marks: 25,
            comment: "",
          },
          {
            task: "exam",
            marks: 50,
            comment: "",
          },
        ],
        maths: [
          {
            task: "project",
            marks: 25,
            comment: "",
          },
          {
            task: "test",
            marks: 25,
            comment: "",
          },
          {
            task: "exam",
            marks: 50,
            comment: "",
          },
        ],
      },
    ],
  },
  {
    student_name: "Dannielle Wright",
    attendance: [],
    age: 18,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Danielius Ahmad",
    attendance: [],
    age: 17,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Verity Hammond",
    attendance: [],
    age: 16,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Talia Arroyo",
    attendance: [],
    age: 16,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Katya Randall",
    attendance: [],
    age: 18,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Lennie Williamson",
    attendance: [],
    age: 17,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Autumn Burrows",
    attendance: [],
    age: 16,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Mcauley Reed",
    attendance: [],
    age: 20,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Ralph Lozano",
    attendance: [],
    age: 19,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Arfa Buxton",
    attendance: [],
    age: 16,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Rafael Prosser",
    attendance: [],
    age: 16,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Lena Lacey",
    attendance: [],
    age: 18,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Haydn Huffman",
    attendance: [],
    age: 19,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Lulu Maddox",
    attendance: [],
    age: 20,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Zacharias Dickens",
    attendance: [],
    age: 19,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Kiri Fletcher",
    attendance: [],
    age: 16,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Asma Castillo",
    attendance: [],
    age: 19,
    gender: "Female",
    term: 1,
  },
  {
    student_name: "Reegan Nash",
    attendance: [],
    age: 17,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Dianne Knox",
    attendance: [],
    age: 18,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Avani Knott",
    attendance: [],
    age: 16,
    gender: "Male",
    term: 1,
  },
  {
    student_name: "Maheen Bravo",
    attendance: [],
    age: 18,
    gender: "Male",
    term: 1,
  },
];

// import { studentList } from "./mockData";

// ==================================================================================================================
//                                                     Date logic
// ==================================================================================================================
const date = document.querySelector(".date");

const newDate = () => {
  let today = new Date();
  dd = today.getDay() + 21;
  mm = today.getMonth() + 1;
  yyyy = today.getFullYear();

  return dd + "-" + "0" + mm + "-" + yyyy;
};

date.textContent = newDate();

// ================================================================================================================
//                                         studentList dashboard logic
// ================================================================================================================
// const tr = document.querySelector(".child");
// const td = document.querySelector(".td-name");
// const checkInput = document.querySelector(".checkInput");
// const studPro = document.querySelector(".studPro");
const table = document.querySelector("#main-table");
const searchTable = document.querySelector(".search-table");
const input1 = document.querySelector(".input");
const searchButton = document.querySelector(".searchButton");

let isSearch = false;

const renderList = (list) => {
  if(isSearch) {
    // table.style.display = "none";

    // searchTable.style.display = "flex";
  }
  list.forEach((items) => {
    const tr = document.createElement("tr");
    tr.className = "child";
    table.appendChild(tr);

    const td = document.createElement("td");
    td.className = "td-name";
    td.textContent = items.student_name;
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.className = "text-center";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "checkInput";
    td2.appendChild(input);
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.className = "text-center studPro";
    const button = document.createElement("button");
    button.className = "btn1 cursor1";
    button.textContent = "Student Profile";
    td3.appendChild(button);
    tr.appendChild(td3);
  });
};

renderList(students);

// ===============================================================================================================
//                                                   Search logic
// ===============================================================================================================

searchButton.addEventListener("click", () => {
  table.childNodes.forEach((item, index, array) => {
    table.removeChild(item);
  })
  isSearch = true;
  filteredList = students.filter((element, index, array) => {
    return element.student_name === input1.value;
  });
  console.log(filteredList)
  renderList(filteredList);
});

// ===============================================================================================================
//
// ===============================================================================================================
// const tr = document.querySelector(".tr");
// console.log(tr.children[1].children[0].checked = true);
