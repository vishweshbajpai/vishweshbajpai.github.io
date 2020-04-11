var coursesTitle = [
  {
    name: "Web Development",
    value: "web",
  },
  {
    name: "Coding Languages",
    value: "codinglang",
  },
  {
    name: "Design",
    value: "design",
  },
  {
    name: "Web Application",
    value: "application",
  },
  {
    name: "Graphics",
    value: "graphics",
  },
];
var courses = [
  {
    name: "HTML",
    type: "web",
    description:
      "HTML stands for Hypertext Markup Language. It allows the user to create and structure sections, paragraphs, headings, links, and blockquotes for web pages and applications.",
    image: "./images/courses/banner1.png",
  },
  {
    name: "CSS",
    type: "web",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.",
    image: "./images/courses/banner2.png",
  },
  {
    name: "JavaScript",
    type: "web",
    description:
      "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
    image: "./images/courses/banner3.png",
  },
  {
    name: "Bootstrap",
    type: "web",
    description:
      "Bootstrap is a sleek, intuitive, and powerful, mobile first front-end framework for faster and easier web development. It uses HTML, CSS and Javascript.",
    image: "./images/courses/banner4.png",
  },
  {
    name: "jQuery",
    type: "web",
    description:
      'jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.',
    image: "./images/courses/banner5.png",
  },
  {
    name: "SQL",
    type: "web",
    description:
      "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    image: "./images/courses/banner10.png",
  },
  {
    name: "Java",
    type: "codinglang",
    description:
      "Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. ",
    image: "./images/courses/banner6.png",
  },
  {
    name: "C++",
    type: "codinglang",
    description:
      "C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language",
    image: "./images/courses/banner7.png",
  },
  {
    name: "Python",
    type: "codinglang",
    description:
      "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991",
    image: "./images/courses/banner8.png",
  },
  {
    name: "Blender",
    type: "design",
    description:
      "Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, and computer games.",
    image: "./images/courses/banner9.png",
  },
  {
    name: "SolidWorks",
    type: "design",
    description:
      "SolidWorks is a solid modeling computer-aided design and computer-aided engineering computer program that runs primarily on Microsoft Windows",
    image: "./images/courses/banner10.png",
  },
  {
    name: "SQL",
    type: "application",
    description:
      "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    image: "./images/courses/banner10.png",
  },
  {
    name: "jQuery",
    type: "application",
    description:
      'jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.',
    image: "./images/courses/banner5.png",
  },

  {
    name: "Bootstrap",
    type: "application",
    description:
      "Bootstrap is a sleek, intuitive, and powerful, mobile first front-end framework for faster and easier web development. It uses HTML, CSS and Javascript.",
    image: "./images/courses/banner4.png",
  },

  {
    name: "HTML",
    type: "application",
    description:
      "HTML stands for Hypertext Markup Language. It allows the user to create and structure sections, paragraphs, headings, links, and blockquotes for web pages and applications.",
    image: "./images/courses/banner1.png",
  },
  {
    name: "CSS",
    type: "application",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.",
    image: "./images/courses/banner2.png",
  },
  {
    name: "JavaScript",
    type: "application",
    description:
      "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
    image: "./images/courses/banner3.png",
  },

  {
    name: "Python",
    type: "graphics",
    description:
      "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991",
    image: "./images/courses/banner8.png",
  },
  {
    name: "C++",
    type: "graphics",
    description:
      "C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language",
    image: "./images/courses/banner7.png",
  },
  {
    name: "Java",
    type: "graphics",
    description:
      "Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, big data processing, embedded systems, and so on. ",
    image: "./images/courses/banner6.png",
  },
];

var selectedTitle = "web";

jQuery(document).ready(function ($) {
  showCoursesTitle();
  selectCourse(selectedTitle);
});

function showCoursesTitle() {
  var list = document.createElement("ul");
  coursesTitle.forEach((title, i) => {
    var li = document.createElement("li");
    li.innerHTML = `<a onClick="selectCourse('${title.value}')"><div class="item"  id="${title.value}">
    ${title.name} 
    </div>
    </a>
    `;
    list.appendChild(li);
  });
  document.getElementById("categories").appendChild(list);
}

function selectCourse(type) {
  selectedTitle = type;
  var filteredCourses = courses.filter((c) => c.type === type);
  var list = document.createElement("ul");
  var colors = [
    "rgba(195, 239, 195, 0.42)",
    "rgba(169, 169, 249, 0.4)",
    "rgba(228, 155, 155, 0.54)",
    "rgba(193, 193, 110, 0.45)",
  ];
  var borderColors = ["#87d68761", "#c7befd", "#da9e9deb", "#cdcec6"];
  filteredCourses.forEach((course, i) => {
    var li = document.createElement("li");
    li.innerHTML = `<div class="item">
        <img src="${course.image}" width="300" height="300" />
        <h2>${course.name}</h2>
        <p>${course.description}</p>      
    `;
    li.style.backgroundColor = colors[i % 4];
    li.style.border = `1px solid ${borderColors[i % 4]}`;
    list.appendChild(li);
  });
  document.getElementById("courses").innerHTML = "";
  document.getElementById("courses").appendChild(list);
  highlightSelected();
}

function highlightSelected() {
  coursesTitle.forEach((title, i) => {
    if (selectedTitle !== title.value) {
      document.getElementById(`${title.value}`).classList.remove("active");
    } else document.getElementById(`${title.value}`).classList.add("active");
  });
}
