const addSemesterButton = document.getElementById('addSemester');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const semesterContainer = document.querySelector('.semester-container');

let semesters = [];

let semCount = 0;

function addSemester() {
  const semester = document.createElement('div');
  semCount++;
  semester.classList.add('semester');
  semester.innerHTML = `
    <p>Semester ${semCount}</p>
    <input class= "form-control m-2" type="number" placeholder="SGPA">
    <input class= "form-control m-2" type="number" placeholder="Credits">
  `;
  semesterContainer.appendChild(semester);
}

// ... rest of the code

function calculateCGPA() {
  semesters = Array.from(document.querySelectorAll('.semester'));
  let totalCredits = 0;
  let totalCreditPoints = 0;
  let cgpaValues = [];

  semesters.forEach((semester, index) => {
    const sgpa = parseFloat(semester.querySelector('input:first-of-type').value);
    const credits = parseFloat(semester.querySelector('input:last-of-type').value);
    totalCredits += credits;
    totalCreditPoints += sgpa * credits;

    const semesterCGPA = totalCreditPoints / totalCredits;
    cgpaValues.push(semesterCGPA.toString().slice(0,4));
  });

  const resultTable = document.createElement('table');
  resultTable.style.fontFamily = "oswald"
  resultTable.style.fontSize = "larger"
  resultTable.classList = "table table-striped"
  resultTable.innerHTML = `
    <thead>
      <tr>
        <th>Semester</th>
        <th>CGPA</th>
      </tr>
    </thead>
    <tbody>
      ${cgpaValues.map((cgpa, index) => `<tr><td>${index + 1}</td><td>${cgpa}</td></tr>`).join('')}
    </tbody>
  `;
  resultElement.innerHTML = ''; // Clear previous results
  resultElement.appendChild(resultTable);

  const final = document.createElement('h3');
  final.innerHTML = `Current CGPA after ${semCount} semesters is ${cgpaValues.at(cgpaValues.length-1)}`
  final.classList = "text-center"

  document.getElementById("final").appendChild(final)
}

addSemesterButton.addEventListener('click', addSemester);
calculateButton.addEventListener('click', calculateCGPA);

document.getElementById('reset').addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.reload();
})

