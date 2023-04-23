// {
//     list: [
//       { 
//         name: 'Ivan Ivanov', 
//         age: 35, 
//         prof: 'teacher', 
//         lang: 'en' 
//       },
//       { 
//         name: 'Петр Петров', 
//         age: 58, 
//         prof: 'driver', 
//         lang: 'ru' 
//       }
//     ]
//   }
const xml = `<list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xml, 'text/xml');

const students = [];

xmlDOM.querySelectorAll('student').forEach((student) => {
  const name = student.querySelector('name');
  const lang = name.getAttribute('lang');
  const firstName = name.querySelector('first').textContent;
  const lastName = name.querySelector('second').textContent;
  const age = student.querySelector('age').textContent;
  const prof = student.querySelector('prof').textContent;

  students.push({
    name: `${firstName} ${lastName}`,
    age: Number(age),
    prof: prof,
    lang: lang
  });
});

const result = { list: students };

console.log(result);