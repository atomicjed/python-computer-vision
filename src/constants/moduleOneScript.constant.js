import {helloWorldConsole, mainPy, newTerminal, openFolder} from "../assets/index.js";

export const module1NavItems = [
  {
    id: "0",
    title: "Intro",
    url: "#introduction",
  },
  {
    id: "1",
    title: "Data Types",
    url: "#data-types",
  },
  {
    id: "2",
    title: "Conditionals",
    url: "#conditionals",
  },
  {
    id: "3",
    title: "Loops",
    url: "#loops",
  },
  {
    id: "4",
    title: "Functions",
    url: "#functions"
  }
];

export const whatIsPythonContent = [
  {
    title: "What is Python?"
  },
  {
    text: "Python is a popular and versatile programming language used in fields like data analysis, backend web development, artificial intelligence, machine learning, scientific computing, and automation."
  },
  {
    text: "Python's syntax is designed to be clean and easy to read, making it beginner-friendly while being powerful for advanced tasks. It also has extensive library support, which allows developers to efficiently handle common tasks (you’ll learn more about these in later modules)."
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/xkZMUX_oQX4?si=1D5pXiIdT7Ik1vBk"
  },
  {
    text: "Lets get a simple Python program running on your machine."
  },
  {
    list: [
      {bulletPoint: "Download and install python from:"},
      {link: "https://www.python.org/downloads/"},
      {bulletPoint: "Download and install Visual Studio Code (VS Code) from:"},
      {link: "https://code.visualstudio.com/download"},
      {bulletPoint: "Open up your IDEA and go into an empty folder. Inside this folder, create a file named main.py (the .py extension indicates a python file). In this file, type:"},
      {bulletPoint: "print(\"Some text here\")"},
      {
        images: [
          {image: openFolder, alt: ""},
          {image: mainPy, alt: ""},
        ]
      },
      {bulletPoint: "I promise that's the last Forest reference! Save your file by pressing Cmd + S (Mac) or Ctrl + S (Windows). Now open up a terminal inside your IDE by going to Terminal => New Terminal. Run the programing by typing the following command and pressing enter:"},
      {bulletPoint: "python3 main.py"},
      {images: [{image: newTerminal, alt: ""}, {image: helloWorldConsole, alt: ""}]},
      {bulletPoint: "If your terminal displays the text you entered, you’ve successfully installed Python and executed your first program, well done!"}
    ]
  }
];

export const dataTypesContent = [
  {
    title: "Data Types and Variables"
  },
  {
    text: "A variable is a named reference to a value stored in memory. It allows you to store, retrieve and manipulate data throughout your program. There are a few naming rules you should be aware of:"
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/Hsbo6V2BJ3U?si=pGL1wsF7gLrndv9j"
  },
  {
    text: "Learn more about variables here:"
  },
  {
    link: "https://www.w3schools.com/python/python_variables.asp"
  },
  {
    text: "In programming, data types are a very important concept because they determine how variables can be used and manipulated. Variables can store data of various types. The most common are:"
  },
  {
    list: [
      {bulletPoint: "Text (string) data is defined using either single or double quotes. The type is str (short for string). Example: \"Hello\" or 'World'."},
      {bulletPoint: "Numeric data has a few types like int (integer) or float (floating-point like 3.14)"},
      {bulletPoint: "A boolean (bool) data type represents values that is either True or False."}
    ]
  },
  {
    text: "Understanding these data types is important because they determine how variables can be used and manipulated in your program. Misunderstanding these data types will lead to errors and unexpected behaviour."
  },
  {
    text: "I strongly recommend going through the resources of each of these data types and concepts until you’re happy with them:"
  },
  {
    list: [
      {link: "https://www.w3schools.com/python/python_datatypes.asp"},
      {link: "https://www.w3schools.com/python/python_numbers.asp"},
      {link: "https://www.w3schools.com/python/python_casting.asp"},
      {link: "https://www.w3schools.com/python/python_strings.asp"},
      {link: "https://www.w3schools.com/python/python_booleans.asp"}
    ]
  },
  {
    text: "Operators allow you to manipulate data, make comparisons, and perform mathematical calculations. There are various types of operators:"
  },
  {
    list: [
      {bulletPoint: "Arithmetic operators for basic maths operations like a + b."},
      {bulletPoint: "Assignment operators to assign values to variables like x = 5."},
      {bulletPoint: "Comparison operators to compare two values and return a boolean result (True or False) like x == y."},
      {bulletPoint: "Logical operators to combine conditional statements like x < 5 and x< 10."},
      {bulletPoint: "Identity operators check if two variables refer to the same object in memory, not the values. Don’t worry about this right now we’re gonna come back to this at the end of the module."},
    ]
  },
  {
    text: "Use this resource to familiarise yourself:"
  },
  {
    link: "https://www.w3schools.com/python/python_operators.asp"
  }
];

export const conditionalStatementsContent = [
  {
    title: "Conditionals"
  },
];

export const loopsContent = [
  {
    title: "Loops"
  },
];

export const functionsContent = [
  {
    title: "Functions"
  },
];

export const dataStructuresContent = [
  {
    title: "Data Structures"
  },
];