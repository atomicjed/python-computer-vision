import {
  combineStatementsWithAnd,
  combineStatementsWithOr,
  computerMemoryVideo, elifElse,
  helloWorldConsole,
  identityOperator, indentation,
  mainPy, memoryThumb,
  newTerminal, oneLiner,
  openFolder,
  stackNHeap
} from "../assets/index.js";

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
  },
  {
    id: "5",
    title: "Data Structures",
    url: "#data-structures"
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
  {
    text: "Conditionals allow you to make decisions in your code, letting you execute certain actions only when specific conditions are true."
  },
  {
    text: "An if statement contains a block of code which it executes if a certain logical condition is true."
  },
  {
    text: "Python relies on indentation (spaces/tabs at the beginning of the line) to define which code belongs to this if statement. For example: "
  },
  {
    images: [
      {image: indentation, alt: ""}
    ]
  },
  {
    text: "The elif keyword (short for else if) says: “If the previous conditions were not true, then try this condition”. Whereas, the else keyword runs a block of code if none of the previous if or elif conditions are true. For example: "
  },
  {
    images: [
      {image: elifElse, alt: ""}
    ]
  },
  {
    text: "You can write short if statements on a single line for simplicity, like this:"
  },
  {
    images: [
      {image: oneLiner, alt: ""}
    ]
  },
  {
    text: "You can combine conditional statements using the and keyword or the or keyword. For example:"
  },
  {
    images: [
      {image: combineStatementsWithAnd, alt: ""},
      {image: combineStatementsWithOr, alt: ""}
    ]
  },
  {
    text: "You can read more about conditionals here:"
  },
  {
    link: "https://www.w3schools.com/python/python_conditions.asp"
  }
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

export const memoryContent = [
  {
    title: "Computer Memory"
  },
  {
    video: {source: computerMemoryVideo, thumbnail: memoryThumb}
  },
  {
    text: "Well done, if you’ve got this far through, you already know a lot of the basics, but it’s also useful to understand what a computer does while it’s running a program."
  },
  {
    text: "When a program runs, your machine uses two key areas of memory: the stack and the heap."
  },
  {
    text: "The stack stores small, temporary data when it’s needed. It’s organised in a stack—new data is added to the top, and it’s removed as soon as it’s no longer needed. Simple data types like numbers and characters, known as value types, are stored here. The stack is fast and efficient to retrieve data, but the stack has limited size. "
  },
  {
    text: "The heap, on the other hand, is larger and more flexible. It’s used for storing complex data like objects and arrays. However, it’s slower than the stack. To manage this, a reference to the data is stored on the stack, pointing to its actual location in the heap. This keeps the stack small and organised while allowing the program to indirectly access larger, more complex data. For this reason, complex data like objects and arrays are called reference types, as opposed to simple value types, which are stored directly on the stack."
  },
  {
    images: [{image: stackNHeap, alt: ""}]
  },
  {
    text: "Therefore, as we mentioned earlier, identity operators are used to compare objects—not by checking if they have the same value, but whether they are actually the same object with the same reference in memory."
  },
  {
    images: [{image: identityOperator, alt: ""}]
  },
  {
    text: "I know this is a lot to get your head around, but understanding this concept is useful because it’s commonly referenced when optimising programs, and similar principles are used when designing database structures. Also, if you encounter a StackOverflow error, it typically means your program has exceeded the stack’s memory limit, which often happens due to infinite recursion, which is just where a function endlessly calls itself, creating a loop that overflows the stack’s memory limit and causes your program to crash."
  },
  {
    text: "Well done, if that made any sense to you, don’t worry too much if it doesn’t. If you’ve got a good understanding of the concepts we’ve covered in this module, we are ready to move on to the next one, where we’re gonna build our first motion detection algorithm. At the bottom of this page, drop me a message saying you’re ready to go and I will make the next module available for you. That being said you can always come back to this module if you need to revisit anything you need to."
  },
]