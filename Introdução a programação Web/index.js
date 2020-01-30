const classA = [{
    name: "Jorge",
    grade: 5.2
  },
  {
    name: "Laryssa",
    grade: 10
  },
  {
    name: "Luana",
    grade: 8.7
  }
];

const classB = [{
    name: "Priscila",
    grade: 8.9
  },
  {
    name: "Rebeka",
    grade: 10
  },
  {
    name: "Varoa",
    grade: 6
  },
  {
    name: "Mulher guerreira",
    grade: 5
  }
];

function calculateAvarage(students) {
  let sum = 0

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const avarage = sum / students.length

  return avarage
}

const avarage1 = calculateAvarage(classA)
const avarage2 = calculateAvarage(classB)

function sendMessage(avarage, turma) {
  if (avarage > 5) {
    console.log(`${turma} avarage: ${avarage}. Congratulations`)
  } else {
    console.log(`${turma} avarage: ${avarage}. Is not good.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false;

  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is flunked!`)
  }
}

function studentsReprovados(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendFlunkedMessage(student)
  }
}


sendMessage(avarage1, 'turmaA')
sendMessage(avarage2, 'turmaB')


studentsReprovados(classA)
studentsReprovados(classB)