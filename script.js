const STORAGE_KEYS = {
  theme: "jsHubTheme",
  completed: "jsHubCompletedLessons",
  quizzes: "jsHubQuizAnswers",
  filter: "jsHubLevelFilter"
};

const lessons = [
  {
    level: "Level 1",
    title: "JavaScript in Action",
    summary: "JavaScript turns static pages into interfaces that can react, calculate, validate, and update without reloading.",
    theory: "A JavaScript program is a set of instructions. In a browser, those instructions can read values, make decisions, change the page, and respond to user actions.",
    code: "const buttonText = 'Start lesson';\nconsole.log(buttonText);",
    exercise: "Create a variable named action and store one thing a web page can do with JavaScript.",
    quiz: ["What is JavaScript commonly used for in the browser?", ["Making pages interactive", "Compiling CSS", "Storing only images"], 0]
  },
  {
    level: "Level 1",
    title: "How Programming Works",
    summary: "Programming is breaking a goal into ordered steps a computer can execute.",
    theory: "Computers follow instructions exactly. Good programs use clear data, clear order, and clear decisions so the result is predictable.",
    code: "const price = 20;\nconst tax = 3;\nconst total = price + tax;\nconsole.log(total);",
    exercise: "Write three ordered steps for calculating the total price of a product.",
    quiz: ["What matters most to a computer program?", ["Precise instructions", "Long variable names only", "Colorful code"], 0]
  },
  {
    level: "Level 1",
    title: "How JavaScript Works",
    summary: "JavaScript code is parsed, executed, and connected to browser APIs when running on a web page.",
    theory: "The JavaScript engine understands your code. The browser provides extra features like the DOM, events, timers, storage, and network requests.",
    code: "console.log('JavaScript engine runs this line');\ndocument.title = 'Learning JavaScript';",
    exercise: "Change the document title with JavaScript and explain which part is JS and which part is browser API.",
    quiz: ["What provides document and window?", ["The browser environment", "The CSS file", "A number variable"], 0]
  },
  {
    level: "Level 1",
    title: "Dynamic vs. Weakly Typed Languages",
    summary: "JavaScript variables can hold different types over time, and JavaScript may coerce values in some operations.",
    theory: "Dynamic typing means a variable's value determines its type at runtime. Weak typing means JavaScript sometimes converts values automatically, such as turning a number into text during string concatenation.",
    code: "let score = 10;\nscore = 'ten';\nconsole.log('Score: ' + score);",
    exercise: "Create one variable that first stores a number and then stores a string.",
    quiz: ["What does dynamic typing mean?", ["Types are tied to runtime values", "Variables never change", "Only strings are allowed"], 0]
  },
  {
    level: "Level 1",
    title: "JavaScript Executes in a Hosted Environment",
    summary: "JavaScript runs inside environments such as browsers, Node.js, embedded apps, and automation tools.",
    theory: "The same core language can run in different hosts. A browser host offers the DOM, while Node.js offers filesystem and server tools.",
    code: "console.log('Core JavaScript');\nsetTimeout(() => console.log('Host timer API'), 500);",
    exercise: "List two features available in browsers that are not part of the core language itself.",
    quiz: ["Which host gives JavaScript access to the DOM?", ["Browser", "JSON", "Array"], 0]
  },
  {
    level: "Level 1",
    title: "Course Outline - What We Will Learn in 19 Weeks",
    summary: "The roadmap moves from syntax to functions, control flow, arrays, objects, DOM work, and events.",
    theory: "A healthy learning path starts with values and variables, then builds toward reusable behavior, collections, page interaction, and practical exercises.",
    code: "const roadmap = ['variables', 'functions', 'arrays', 'DOM'];\nconsole.log(roadmap.length);",
    exercise: "Write your own four-item JavaScript roadmap array.",
    quiz: ["What should beginners learn before DOM events?", ["Core language basics", "Database scaling", "Assembly language"], 0]
  },
  {
    level: "Level 1",
    title: "JavaScript vs. Java",
    summary: "JavaScript and Java have similar names but different histories, ecosystems, and language designs.",
    theory: "JavaScript is the language of the web browser. Java is a separate general-purpose language often used for backend systems, Android, and enterprise software.",
    code: "const language = 'JavaScript';\nconsole.log(language !== 'Java');",
    exercise: "Write two differences between JavaScript and Java.",
    quiz: ["Are JavaScript and Java the same language?", ["No", "Yes", "Only in browsers"], 0]
  },
  {
    level: "Level 1",
    title: "Brief History of JavaScript",
    summary: "JavaScript began as a browser scripting language and became a standard language used across the web and servers.",
    theory: "The language was created quickly for Netscape, standardized as ECMAScript, and expanded through browser growth, Node.js, and modern ES features.",
    code: "const standardName = 'ECMAScript';\nconsole.log(`JavaScript follows ${standardName}`);",
    exercise: "Explain why ECMAScript matters in one sentence.",
    quiz: ["What is ECMAScript?", ["The language standard", "A CSS framework", "A database"], 0]
  },
  {
    level: "Level 1",
    title: "Setting Up the Environment",
    summary: "A browser, editor, and console are enough to start writing and testing JavaScript.",
    theory: "Beginners can write JavaScript in an HTML file, browser DevTools, or a code editor. The console is useful for testing expressions and debugging.",
    code: "console.log('Environment ready');",
    exercise: "Open the browser console and run a console.log message.",
    quiz: ["Which tool helps inspect console messages?", ["Browser DevTools", "A paint app", "The recycle bin"], 0]
  },
  {
    level: "Level 1",
    title: "Introduction to JavaScript",
    summary: "JavaScript is a programming language for values, logic, functions, objects, and interactive pages.",
    theory: "The core building blocks are values, variables, operators, conditions, loops, functions, arrays, and objects. These pieces combine into useful programs.",
    code: "const learner = 'Mariam';\nconsole.log(`Welcome, ${learner}!`);",
    exercise: "Create a welcome message using your name.",
    quiz: ["Which item is a JavaScript building block?", ["Function", "HTML tag color only", "Browser tab title only"], 0]
  },
  {
    level: "Level 1",
    title: "Understanding Variables and Data Types",
    summary: "Variables store values, and values have types such as string, number, boolean, object, undefined, and null.",
    theory: "A variable is a named container for a value. Data types describe what kind of value is stored and what operations make sense for it.",
    code: "const name = 'Alex';\nconst age = 22;\nconst isStudent = true;\nconsole.log(typeof age);",
    exercise: "Create three variables: one string, one number, and one boolean.",
    quiz: ["What does typeof return?", ["A value's type", "A CSS class", "A page reload"], 0]
  },
  {
    level: "Level 1",
    title: "Working with Operators",
    summary: "Operators combine, compare, assign, or transform values.",
    theory: "Arithmetic operators calculate values. Comparison operators produce booleans. Assignment operators store values. Logical operators combine conditions.",
    code: "const subtotal = 40;\nconst discount = 5;\nconsole.log(subtotal - discount > 30);",
    exercise: "Use at least one arithmetic operator and one comparison operator.",
    quiz: ["What does > usually return?", ["A boolean", "A function", "An array"], 0]
  },
  {
    level: "Level 1",
    title: "Exploring and Using Functions",
    summary: "Functions package reusable behavior behind a name.",
    theory: "A function can run the same steps whenever it is called. This helps avoid repeated code and gives meaningful names to behavior.",
    code: "function greet() {\n  console.log('Hello!');\n}\n\ngreet();",
    exercise: "Create a function that prints a short greeting.",
    quiz: ["How do you run a function?", ["Call it with parentheses", "Paint it blue", "Use only CSS"], 0]
  },
  {
    level: "Level 1",
    title: "Declaring and Defining Variables",
    summary: "Use const for values that should not be reassigned and let for values that will change.",
    theory: "Declaration creates the variable name. Definition gives it a value. Modern JavaScript usually prefers const unless reassignment is needed.",
    code: "let count = 0;\ncount = count + 1;\nconst appName = 'Learning Hub';",
    exercise: "Declare one const and one let, then update only the let variable.",
    quiz: ["Which keyword allows reassignment?", ["let", "const", "typeof"], 0]
  },
  {
    level: "Level 1",
    title: "Introducing Variables and Constants",
    summary: "Constants make code safer when a value should stay the same.",
    theory: "A const variable cannot be reassigned. This prevents accidental changes and makes the intention of your code clearer.",
    code: "const maxAttempts = 3;\nlet attempts = 1;\nattempts += 1;",
    exercise: "Use const for a fixed limit and let for a changing counter.",
    quiz: ["Why use const?", ["To prevent reassignment", "To create a loop", "To delete a page"], 0]
  },
  {
    level: "Level 1",
    title: "Working with Variables and Operators",
    summary: "Variables and operators work together to calculate new values.",
    theory: "Programs often store input in variables, use operators to process it, and store the result in another variable.",
    code: "const hours = 5;\nconst rate = 12;\nconst pay = hours * rate;\nconsole.log(pay);",
    exercise: "Calculate a total using two variables and an operator.",
    quiz: ["What does * do with numbers?", ["Multiplication", "Text comparison", "Variable declaration"], 0]
  },
  {
    level: "Level 1",
    title: "Variables and Operators Quiz",
    summary: "Review how variables, constants, arithmetic, and comparisons work together.",
    theory: "A strong foundation means knowing when to store data, when to calculate, and when to compare results.",
    code: "const points = 8;\nconst passed = points >= 6;\nconsole.log(passed);",
    exercise: "Create a passed variable from a score comparison.",
    quiz: ["What is the value of 8 >= 6?", ["true", "false", "undefined"], 0]
  },
  {
    level: "Level 2",
    title: "Adding a Custom Function",
    summary: "Custom functions let you name your own behavior.",
    theory: "A custom function should describe a task clearly. It can read inputs, run statements, and optionally produce an output.",
    code: "function showCourseName() {\n  console.log('JavaScript Basics');\n}\nshowCourseName();",
    exercise: "Create a custom function named showGoal that logs your learning goal.",
    quiz: ["What does a custom function help with?", ["Reusable named behavior", "Only changing fonts", "Deleting variables"], 0]
  },
  {
    level: "Level 2",
    title: "Returning Values",
    summary: "return sends a result back to the place where a function was called.",
    theory: "Logging shows a value, but returning gives the value back so other code can use it. A function stops when it reaches return.",
    code: "function add(a, b) {\n  return a + b;\n}\nconst sum = add(3, 4);",
    exercise: "Write a function that returns the square of a number.",
    quiz: ["What does return do?", ["Gives a value back", "Creates a CSS rule", "Starts a loop automatically"], 0]
  },
  {
    level: "Level 2",
    title: "The Importance of Code Order",
    summary: "JavaScript executes most statements from top to bottom.",
    theory: "Order matters because later lines can depend on earlier values. Some declarations are hoisted, but beginners should still write code in a readable order.",
    code: "const firstName = 'Nino';\nconst message = `Hi ${firstName}`;\nconsole.log(message);",
    exercise: "Create a value first, then use it in a second value.",
    quiz: ["Why does order matter?", ["Later code can depend on earlier code", "Browsers ignore order", "Only CSS has order"], 0]
  },
  {
    level: "Level 2",
    title: "Introduction to Global & Local Scopes",
    summary: "Scope controls where variables can be accessed.",
    theory: "Global variables are available broadly. Local variables declared inside a function or block are only available there, which helps avoid accidental conflicts.",
    code: "const globalName = 'Course';\nfunction show() {\n  const localName = 'Lesson';\n  console.log(globalName, localName);\n}",
    exercise: "Create one global variable and one local variable inside a function.",
    quiz: ["Where is a local function variable available?", ["Inside that function", "In every file forever", "Only in CSS"], 0]
  },
  {
    level: "Level 2",
    title: "Shadowed Variables",
    summary: "A local variable can hide a variable with the same name in an outer scope.",
    theory: "Shadowing happens when an inner scope declares a name that already exists outside. The inner name is used inside that scope.",
    code: "const status = 'global';\nfunction check() {\n  const status = 'local';\n  console.log(status);\n}",
    exercise: "Create a shadowed variable and predict which value logs.",
    quiz: ["Which variable wins inside the inner scope?", ["The inner one", "The outer one always", "Neither"], 0]
  },
  {
    level: "Level 2",
    title: "Executing Functions Indirectly",
    summary: "Functions can be stored, passed around, and executed later.",
    theory: "Because functions are values, one variable can reference a function and another piece of code can call it later.",
    code: "function sayDone() {\n  console.log('Done');\n}\nconst task = sayDone;\ntask();",
    exercise: "Store a function in another variable and call it through that variable.",
    quiz: ["What is stored in task?", ["A function reference", "Only a string", "A CSS selector"], 0]
  },
  {
    level: "Level 2",
    title: "Indirect vs. Direct Execution",
    summary: "Direct execution calls a function by name; indirect execution calls through a reference.",
    theory: "Direct calls are simple. Indirect calls are useful for callbacks, event handlers, timers, and reusable workflows.",
    code: "function run() {\n  console.log('running');\n}\nrun();\nconst indirectRun = run;\nindirectRun();",
    exercise: "Show direct and indirect execution with the same function.",
    quiz: ["Which is an indirect call?", ["savedFunction()", "function savedFunction() {}", "const x = 1"], 0]
  },
  {
    level: "Level 2",
    title: "Arrow Functions and ES6",
    summary: "Arrow functions are a shorter syntax introduced in modern JavaScript.",
    theory: "Arrow functions are often used for callbacks and small functions. They also handle this differently from traditional functions.",
    code: "const double = number => number * 2;\nconsole.log(double(6));",
    exercise: "Write an arrow function that triples a number.",
    quiz: ["Which symbol appears in arrow functions?", ["=>", "::", "##"], 0]
  },
  {
    level: "Level 2",
    title: "Parameters vs. Arguments",
    summary: "Parameters are names in a function definition; arguments are values passed during a call.",
    theory: "Think of parameters as placeholders. Arguments are the real values that fill those placeholders when the function runs.",
    code: "function greet(name) {\n  return `Hello, ${name}`;\n}\ngreet('Ana');",
    exercise: "Write a function with two parameters and call it with two arguments.",
    quiz: ["In greet('Ana'), what is 'Ana'?", ["An argument", "A parameter", "A method"], 0]
  },
  {
    level: "Level 2",
    title: "Function Expressions: Storing Functions in Variables",
    summary: "A function expression creates a function value and stores it in a variable.",
    theory: "Function expressions are useful when you want to pass behavior around or choose behavior dynamically.",
    code: "const subtract = function(a, b) {\n  return a - b;\n};\nconsole.log(subtract(9, 2));",
    exercise: "Store a multiply function in a variable.",
    quiz: ["What is subtract in the example?", ["A variable holding a function", "A number only", "A browser tab"], 0]
  },
  {
    level: "Level 2",
    title: "Function Expressions vs. Function Declarations",
    summary: "Declarations are named statements; expressions are function values assigned or passed around.",
    theory: "Function declarations are hoisted differently from expressions. Expressions fit well with callbacks and conditional behavior.",
    code: "function declared() {\n  return 'declaration';\n}\nconst expressed = function() {\n  return 'expression';\n};",
    exercise: "Write one declaration and one expression that return strings.",
    quiz: ["Which form stores a function in a variable?", ["Function expression", "Function declaration only", "Comparison operator"], 0]
  },
  {
    level: "Level 2",
    title: "Anonymous Functions",
    summary: "Anonymous functions have no name and are commonly used as callbacks.",
    theory: "An anonymous function can be used when the function is short or only needed in one place. It still behaves like any other function value.",
    code: "setTimeout(function() {\n  console.log('Later');\n}, 1000);",
    exercise: "Use an anonymous function as a setTimeout callback.",
    quiz: ["What is an anonymous function?", ["A function without a name", "A number without value", "A hidden HTML tag"], 0]
  },
  {
    level: "Level 2",
    title: "Introducing Arrow Functions",
    summary: "Arrow functions make concise callbacks easier to read.",
    theory: "For one expression, an arrow function can return implicitly. For multiple statements, use braces and an explicit return if needed.",
    code: "const names = ['Ana', 'Nika'];\nconst greetings = names.map(name => `Hi ${name}`);",
    exercise: "Use an arrow function with map to transform an array of numbers.",
    quiz: ["When can return be implicit?", ["Single expression arrow body", "Every function declaration", "Only while loops"], 0]
  },
  {
    level: "Level 2",
    title: "Different Arrow Function Syntaxes",
    summary: "Arrow functions can use one parameter, many parameters, expression bodies, or block bodies.",
    theory: "One parameter can omit parentheses. Multiple parameters need parentheses. A block body needs braces and explicit return when producing a value.",
    code: "const square = x => x * x;\nconst add = (a, b) => a + b;\nconst label = value => {\n  return `Value: ${value}`;\n};",
    exercise: "Write one arrow function with one parameter and one with two parameters.",
    quiz: ["When do arrow parameters need parentheses?", ["With multiple parameters", "Only with strings", "Never"], 0]
  },
  {
    level: "Level 2",
    title: "Default Arguments in Functions",
    summary: "Default parameters provide fallback values when arguments are missing.",
    theory: "Defaults make functions easier to call and help prevent undefined values when a common fallback makes sense.",
    code: "function greet(name = 'friend') {\n  return `Hello, ${name}`;\n}",
    exercise: "Create a function with a default user role.",
    quiz: ["When is a default parameter used?", ["When an argument is missing", "When CSS loads", "When a loop ends"], 0]
  },
  {
    level: "Level 2",
    title: "Creating Functions Inside of Functions",
    summary: "Nested functions can access variables from their outer function.",
    theory: "Inner functions are useful when a helper only belongs to one outer operation. They can use outer variables through closure.",
    code: "function makeMessage(name) {\n  function prefix() {\n    return 'Hello';\n  }\n  return `${prefix()}, ${name}`;\n}",
    exercise: "Create an outer function with a small helper function inside it.",
    quiz: ["What can an inner function access?", ["Outer function variables", "Only CSS classes", "No variables"], 0]
  },
  {
    level: "Level 2",
    title: "Understanding Callback Functions",
    summary: "A callback is a function passed to another function to run later.",
    theory: "Callbacks are central to events, timers, array methods, and asynchronous code. They let one function decide when another function runs.",
    code: "const numbers = [1, 2, 3];\nnumbers.forEach(number => console.log(number));",
    exercise: "Use forEach with a callback to log every item in an array.",
    quiz: ["What is a callback?", ["A function passed to another function", "A type of string", "A browser window"], 0]
  },
  {
    level: "Level 2",
    title: "Using Booleans in Conditions & Text Comparisons",
    summary: "Conditions use booleans to choose which code path runs.",
    theory: "Comparisons like ===, >, and includes() can produce boolean values. Those booleans are used by if statements and other conditional tools.",
    code: "const role = 'admin';\nif (role === 'admin') {\n  console.log('Access granted');\n}",
    exercise: "Compare a user role string and print a different message based on the result.",
    quiz: ["What does role === 'admin' return?", ["A boolean", "An array", "A function"], 0]
  },
  {
    level: "Level 2",
    title: "Working with If, Else, and Else If",
    summary: "Conditional branches let code react to different cases.",
    theory: "Use if for the first condition, else if for additional conditions, and else as the fallback when none match.",
    code: "const score = 72;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 60) {\n  console.log('Pass');\n} else {\n  console.log('Retry');\n}",
    exercise: "Create a grading condition with at least three branches.",
    quiz: ["When does else run?", ["When previous conditions fail", "Before if", "Only for arrays"], 0]
  },
  {
    level: "Level 2",
    title: "Logical AND and OR Operators",
    summary: "&& requires both conditions; || accepts at least one condition.",
    theory: "Logical operators combine boolean expressions so programs can represent richer decisions.",
    code: "const age = 20;\nconst hasTicket = true;\nif (age >= 18 && hasTicket) {\n  console.log('Enter');\n}",
    exercise: "Write one condition with && and one condition with ||.",
    quiz: ["When is A && B true?", ["When both are true", "When one is false", "Always"], 0]
  },
  {
    level: "Level 2",
    title: "Understanding Operator Precedence",
    summary: "Precedence decides which operators are evaluated first.",
    theory: "Parentheses make precedence clear. Without them, JavaScript follows built-in rules that can surprise beginners.",
    code: "const result = 2 + 3 * 4;\nconst clearer = 2 + (3 * 4);",
    exercise: "Rewrite a mixed arithmetic expression using parentheses.",
    quiz: ["What runs first in 2 + 3 * 4?", ["Multiplication", "Addition", "console.log"], 0]
  },
  {
    level: "Level 2",
    title: "Comparing Objects and Arrays for Equality",
    summary: "Objects and arrays are compared by reference, not by matching contents.",
    theory: "Two separate arrays with the same items are not equal with === because they are different objects in memory.",
    code: "const a = [1, 2];\nconst b = [1, 2];\nconsole.log(a === b);",
    exercise: "Compare two identical-looking arrays and explain the result.",
    quiz: ["What is [1] === [1]?", ["false", "true", "1"], 0]
  },
  {
    level: "Level 2",
    title: "Coercion vs. Conversion",
    summary: "Coercion is automatic type changing; conversion is explicit type changing.",
    theory: "Explicit conversion is usually clearer. Coercion can be useful, but it can also produce confusing results if you do not expect it.",
    code: "const typed = Number('42');\nconst coerced = '42' == 42;\nconsole.log(typed, coerced);",
    exercise: "Convert a string number to a real number with Number().",
    quiz: ["Which is explicit conversion?", ["Number('42')", "'42' == 42", "let x"], 0]
  },
  {
    level: "Level 2",
    title: "Introducing the Ternary Operator",
    summary: "The ternary operator chooses between two expressions in one compact line.",
    theory: "Use condition ? valueIfTrue : valueIfFalse for simple choices. For complex logic, if statements are usually clearer.",
    code: "const age = 17;\nconst label = age >= 18 ? 'Adult' : 'Minor';",
    exercise: "Create a ternary that labels a score as pass or retry.",
    quiz: ["How many result branches does a ternary have?", ["Two", "Five", "Zero"], 0]
  },
  {
    level: "Level 2",
    title: "Statements vs. Expressions",
    summary: "Expressions produce values; statements perform actions or control flow.",
    theory: "Understanding the difference helps you know what can be assigned, returned, or embedded inside another expression.",
    code: "const value = 2 + 3;\nif (value > 4) {\n  console.log('statement block');\n}",
    exercise: "Identify one expression and one statement in your own code.",
    quiz: ["Which produces a value?", ["Expression", "Statement only", "Comment"], 0]
  },
  {
    level: "Level 2",
    title: "Negation",
    summary: "The ! operator flips truthy and falsy logic.",
    theory: "Negation is useful for checking missing values, reversing booleans, or handling guard conditions.",
    code: "const isLoggedIn = false;\nif (!isLoggedIn) {\n  console.log('Please sign in');\n}",
    exercise: "Use ! to show a message when a task is not complete.",
    quiz: ["What is !true?", ["false", "true", "undefined"], 0]
  },
  {
    level: "Level 2",
    title: "For Loop",
    summary: "A for loop repeats code with a counter.",
    theory: "For loops work well when you know how many times to repeat or when you need an index.",
    code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    exercise: "Write a for loop that counts from 1 to 5.",
    quiz: ["Which part updates the counter?", ["i++", "let i = 0", "i < 3"], 0]
  },
  {
    level: "Level 2",
    title: "For...in Loop",
    summary: "for...in loops over object property keys.",
    theory: "Use for...in when you need the names of properties in an object. For arrays, other loop types are usually clearer.",
    code: "const user = { name: 'Ana', role: 'student' };\nfor (const key in user) {\n  console.log(key, user[key]);\n}",
    exercise: "Loop through an object and log each key and value.",
    quiz: ["What does for...in read from objects?", ["Keys", "Only values", "CSS rules"], 0]
  },
  {
    level: "Level 2",
    title: "For...of Loop",
    summary: "for...of loops over values in iterable collections.",
    theory: "Use for...of with arrays and strings when you care about each value rather than each index.",
    code: "const topics = ['arrays', 'objects'];\nfor (const topic of topics) {\n  console.log(topic);\n}",
    exercise: "Loop over an array of names with for...of.",
    quiz: ["What does for...of give from an array?", ["Values", "Object keys only", "Function names only"], 0]
  },
  {
    level: "Level 2",
    title: "While Loop",
    summary: "A while loop repeats while a condition remains true.",
    theory: "While loops are useful when repetition depends on a condition rather than a fixed count. Always update something so the loop can end.",
    code: "let count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}",
    exercise: "Write a while loop that stops when a number reaches 10.",
    quiz: ["What risk exists in while loops?", ["Infinite loop", "Automatic styling", "No variables allowed"], 0]
  },
  {
    level: "Level 2",
    title: "Do...While Loop",
    summary: "A do...while loop runs at least once before checking the condition.",
    theory: "Use do...while when the first run must happen before deciding whether to repeat.",
    code: "let tries = 0;\ndo {\n  tries++;\n  console.log(tries);\n} while (tries < 2);",
    exercise: "Create a do...while loop that logs once even if the condition starts false.",
    quiz: ["How many times does do...while run at minimum?", ["Once", "Zero", "Ten"], 0]
  },
  {
    level: "Level 3",
    title: "Basic Array Operations",
    summary: "Arrays store ordered lists and support adding, removing, and reading items.",
    theory: "Arrays use zero-based indexes. Common operations include push, pop, shift, unshift, and reading by index.",
    code: "const lessons = ['variables', 'functions'];\nlessons.push('arrays');\nconsole.log(lessons[0]);",
    exercise: "Create an array, add an item, and read the first item.",
    quiz: ["What is the first array index?", ["0", "1", "-1"], 0]
  },
  {
    level: "Level 3",
    title: "Looping Through Arrays",
    summary: "Loops and callbacks help process every item in an array.",
    theory: "You can use for, for...of, or forEach depending on whether you need indexes, values, or callback style.",
    code: "const scores = [10, 20, 30];\nscores.forEach(score => console.log(score));",
    exercise: "Log each item in an array using forEach.",
    quiz: ["Which method runs a callback for every item?", ["forEach", "push", "typeof"], 0]
  },
  {
    level: "Level 3",
    title: "Transforming Arrays with map()",
    summary: "map creates a new array by transforming each item.",
    theory: "Use map when every input item should become one output item. It does not change the original array.",
    code: "const prices = [5, 10, 15];\nconst doubled = prices.map(price => price * 2);",
    exercise: "Use map to turn an array of names into greeting messages.",
    quiz: ["What does map return?", ["A new array", "A boolean", "Only the first item"], 0]
  },
  {
    level: "Level 3",
    title: "Filtering Arrays with filter()",
    summary: "filter creates a new array containing only items that pass a test.",
    theory: "The callback should return true for items you want to keep and false for items you want to remove.",
    code: "const ages = [12, 19, 25];\nconst adults = ages.filter(age => age >= 18);",
    exercise: "Filter an array of scores to keep only passing scores.",
    quiz: ["What should a filter callback return?", ["Boolean", "HTML", "A stylesheet"], 0]
  },
  {
    level: "Level 3",
    title: "Reducing Arrays with reduce()",
    summary: "reduce turns an array into one accumulated result.",
    theory: "Use reduce for totals, grouped values, counts, and other accumulation tasks. It carries an accumulator through each item.",
    code: "const numbers = [1, 2, 3];\nconst total = numbers.reduce((sum, number) => sum + number, 0);",
    exercise: "Use reduce to total an array of prices.",
    quiz: ["What does reduce commonly create?", ["One accumulated result", "Only a copied array", "A CSS animation"], 0]
  },
  {
    level: "Level 3",
    title: "Finding Elements with find() and findIndex()",
    summary: "find returns the first matching item; findIndex returns its index.",
    theory: "Use find when you need the item itself and findIndex when you need the position of the first match.",
    code: "const users = [{ id: 1 }, { id: 2 }];\nconst user = users.find(item => item.id === 2);\nconst index = users.findIndex(item => item.id === 2);",
    exercise: "Find the first product with a price under 20.",
    quiz: ["What does findIndex return?", ["The matching index", "The matching object", "A new array"], 0]
  },
  {
    level: "Level 3",
    title: "Sorting and Reversing Arrays",
    summary: "sort reorders items and reverse flips their order.",
    theory: "sort mutates the original array. For numbers, provide a comparison function so values sort numerically instead of alphabetically.",
    code: "const numbers = [10, 2, 30];\nnumbers.sort((a, b) => a - b);\nnumbers.reverse();",
    exercise: "Sort numbers from smallest to largest with a compare function.",
    quiz: ["Why use (a, b) => a - b?", ["Numeric sort", "String uppercase", "Boolean negation"], 0]
  },
  {
    level: "Level 3",
    title: "Splicing and Slicing Arrays",
    summary: "slice copies a portion; splice changes the original array.",
    theory: "Use slice for non-destructive copying. Use splice when you intentionally want to add, remove, or replace items in the original array.",
    code: "const items = ['a', 'b', 'c'];\nconst copy = items.slice(0, 2);\nitems.splice(1, 1, 'new');",
    exercise: "Use slice to copy part of an array, then use splice to replace one item.",
    quiz: ["Which method does not mutate the original array?", ["slice", "splice", "sort"], 0]
  },
  {
    level: "Level 3",
    title: "Practical Use Cases",
    summary: "Array methods help build search results, filters, totals, dashboards, and user interfaces.",
    theory: "Real apps often combine filter, map, reduce, and find to turn raw data into useful views.",
    code: "const products = [{ name: 'Book', price: 12 }, { name: 'Desk', price: 80 }];\nconst labels = products\n  .filter(product => product.price < 50)\n  .map(product => product.name);",
    exercise: "Filter affordable products and map them into display labels.",
    quiz: ["Why chain array methods?", ["To process data step by step", "To reload the browser", "To declare CSS variables"], 0]
  },
  {
    level: "Level 3",
    title: "Object Properties and Methods",
    summary: "Objects group related data and behavior.",
    theory: "Properties store data. Methods are functions stored on objects. Together they model real entities in code.",
    code: "const course = {\n  title: 'JavaScript',\n  start() {\n    return 'Course started';\n  }\n};",
    exercise: "Create an object with two properties and one method.",
    quiz: ["What is a method?", ["A function on an object", "Only a number", "A loop keyword"], 0]
  },
  {
    level: "Level 3",
    title: "Destructuring Functions",
    summary: "Destructuring extracts values from objects or arrays into variables.",
    theory: "Function parameters can destructure object arguments, making code clearer when a function receives structured data.",
    code: "function showUser({ name, role }) {\n  return `${name}: ${role}`;\n}\nshowUser({ name: 'Ana', role: 'student' });",
    exercise: "Write a function that destructures a product object.",
    quiz: ["What does destructuring do?", ["Extracts values", "Starts a timer", "Deletes functions"], 0]
  },
  {
    level: "Level 3",
    title: "Understanding this Keyword",
    summary: "this refers to the object or context that calls a function.",
    theory: "In object methods, this often refers to the object before the dot. Arrow functions do not create their own this, which matters in methods and callbacks.",
    code: "const user = {\n  name: 'Nika',\n  greet() {\n    return `Hi ${this.name}`;\n  }\n};",
    exercise: "Create an object method that reads a property with this.",
    quiz: ["In a regular object method, this usually refers to what?", ["The calling object", "Always window", "The CSS file"], 0]
  },
  {
    level: "Level 3",
    title: "Object Methods",
    summary: "Object methods keep behavior close to the data they use.",
    theory: "Methods make objects more expressive. They are useful when behavior belongs naturally to one object, such as a cart calculating its total.",
    code: "const cart = {\n  items: [10, 20],\n  total() {\n    return this.items.reduce((sum, item) => sum + item, 0);\n  }\n};",
    exercise: "Create a cart object with a total method.",
    quiz: ["Why use object methods?", ["To connect behavior with data", "To avoid all variables", "To write HTML tags"], 0]
  },
  {
    level: "Level 3",
    title: "Practical Use Cases",
    summary: "Objects model users, products, settings, lessons, UI state, and API data.",
    theory: "Objects become especially useful when many values belong together and need to be passed through functions or displayed in interfaces.",
    code: "const lesson = {\n  id: 'arrays',\n  completed: false,\n  tags: ['data', 'methods']\n};",
    exercise: "Model one course lesson as an object with id, title, completed, and tags.",
    quiz: ["What do objects help model?", ["Related data", "Only loops", "Only comments"], 0]
  },
  {
    level: "Level 3",
    title: "Functions vs. Methods",
    summary: "A method is a function attached to an object.",
    theory: "Standalone functions are independent. Methods are called through an object and often use object data through this.",
    code: "function standalone() {\n  return 'function';\n}\nconst tool = {\n  method() {\n    return 'method';\n  }\n};",
    exercise: "Write one standalone function and one object method.",
    quiz: ["What makes a function a method?", ["It belongs to an object", "It has a shorter name", "It uses let"], 0]
  },
  {
    level: "Level 3",
    title: "Functions Are Objects",
    summary: "In JavaScript, functions are values and objects with special callable behavior.",
    theory: "Functions can be assigned, passed, returned, and given properties. This is why callbacks and higher-order functions are possible.",
    code: "function teach() {\n  return 'learning';\n}\nteach.topic = 'JavaScript';\nconsole.log(teach.topic);",
    exercise: "Assign a function to a variable, pass it to another function, or add a property to it.",
    quiz: ["Why can functions be passed around?", ["They are values", "They are CSS blocks", "They are numbers only"], 0]
  }
].map((lesson, index) => ({
  ...lesson,
  id: slugify(`${index + 1}-${lesson.title}`),
  exerciseId: `exercise-${slugify(`${index + 1}-${lesson.title}`)}`
}));

const topicNav = document.getElementById("topicNav");
const exerciseNav = document.getElementById("exerciseNav");
const courseContent = document.getElementById("courseContent");
const searchInput = document.getElementById("lessonSearch");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const themeToggle = document.getElementById("themeToggle");
const levelTabs = document.querySelectorAll(".level-tab");

let completedLessons = readStorage(STORAGE_KEYS.completed, []);
let quizAnswers = readStorage(STORAGE_KEYS.quizzes, {});
let activeLevel = localStorage.getItem(STORAGE_KEYS.filter) || "all";

init();

function init() {
  applyTheme();
  renderLessons();
  renderNavigation();
  updateProgress();
  bindEvents();
  applyFilters();
  observeSections();
}

function bindEvents() {
  searchInput.addEventListener("input", applyFilters);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    applyTheme();
  });

  levelTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      activeLevel = tab.dataset.level;
      localStorage.setItem(STORAGE_KEYS.filter, activeLevel);
      levelTabs.forEach(item => item.classList.toggle("is-active", item === tab));
      applyFilters();
    });
    tab.classList.toggle("is-active", tab.dataset.level === activeLevel);
  });

  courseContent.addEventListener("click", event => {
    const expandButton = event.target.closest("[data-expand]");
    const copyButton = event.target.closest("[data-copy]");
    const completeButton = event.target.closest("[data-complete]");
    const quizButton = event.target.closest("[data-quiz-option]");

    if (expandButton) {
      const card = expandButton.closest(".lesson-card");
      const isOpen = card.classList.toggle("is-open");
      expandButton.textContent = isOpen ? "-" : "+";
      expandButton.setAttribute("aria-expanded", String(isOpen));
    }

    if (copyButton) {
      copyCode(copyButton);
    }

    if (completeButton) {
      toggleComplete(completeButton.dataset.complete);
    }

    if (quizButton) {
      answerQuiz(quizButton);
    }
  });
}

function renderLessons() {
  courseContent.innerHTML = lessons.map((lesson, index) => {
    const isComplete = completedLessons.includes(lesson.id);
    const exercises = buildExerciseSet(lesson);
    const quizSet = buildQuizSet(lesson);
    const savedQuiz = normalizeQuizAnswers(lesson.id);

    return `
      <article id="${lesson.id}" class="lesson-card is-open" data-title="${escapeAttribute(lesson.title)}" data-level="${lesson.level}" data-index="${index}">
        <header class="lesson-header">
          <div>
            <div class="lesson-title-row">
              <span class="level-badge">${lesson.level}</span>
              <h2>${lesson.title}</h2>
            </div>
            <p class="lesson-summary">${lesson.summary}</p>
          </div>
          <button class="expand-button" type="button" data-expand aria-expanded="true" aria-label="Expand ${escapeAttribute(lesson.title)}">-</button>
        </header>

        <div class="lesson-body">
          <section class="theory" aria-labelledby="${lesson.id}-theory">
            <h3 id="${lesson.id}-theory">Theory</h3>
            <p>${lesson.theory}</p>
          </section>

          <div class="code-panel">
            <div class="code-toolbar">
              <span>JavaScript example</span>
              <button class="copy-button" type="button" data-copy="${index}">Copy</button>
            </div>
            <pre><code>${escapeHtml(lesson.code)}</code></pre>
          </div>

          <section id="${lesson.exerciseId}" class="exercise-box">
            <div class="section-heading-row">
              <div>
                <p class="eyebrow">Practice ladder</p>
                <h3>Exercises</h3>
              </div>
              <span class="section-count">${exercises.length} levels</span>
            </div>
            <div class="exercise-list">
              ${exercises.map(item => `
                <article class="exercise-item">
                  <div class="difficulty-badge">${item.level}</div>
                  <p>${item.prompt}</p>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="quiz-box">
            <div class="section-heading-row">
              <div>
                <p class="eyebrow">Knowledge check</p>
                <h3>Mini quizzes</h3>
              </div>
              <span class="section-count">${quizSet.length} questions</span>
            </div>
            <div class="quiz-list">
              ${quizSet.map((quiz, questionIndex) => {
                const quizChoice = savedQuiz[questionIndex];
                const isAnswered = Number.isInteger(quizChoice);
                return `
                  <article class="quiz-item ${isAnswered ? "is-answered" : ""}">
                    <div class="quiz-level">${quiz.level}</div>
                    <p class="meta">${quiz.question}</p>
                    <div class="quiz-options">
                      ${quiz.options.map((option, optionIndex) => {
                        const selectedClass = quizChoice === optionIndex
                          ? optionIndex === quiz.correct ? "is-correct" : "is-wrong"
                          : "";
                        return `<button class="quiz-option ${selectedClass}" type="button" data-quiz-option="${optionIndex}" data-question-index="${questionIndex}" data-lesson-id="${lesson.id}" ${isAnswered ? "disabled" : ""}>${option}</button>`;
                      }).join("")}
                    </div>
                    <p class="quiz-feedback" data-feedback="${lesson.id}-${questionIndex}">${quizFeedback(quiz, quizChoice)}</p>
                  </article>
                `;
              }).join("")}
            </div>
          </section>

          <footer class="lesson-footer">
            <span class="meta">Topic ${index + 1} of ${lessons.length}</span>
            <button class="complete-button ${isComplete ? "is-complete" : ""}" type="button" data-complete="${lesson.id}">
              ${isComplete ? "Completed" : "Mark complete"}
            </button>
          </footer>
        </div>
      </article>
    `;
  }).join("");
}

function buildExerciseSet(lesson) {
  return [
    {
      level: "Beginner",
      prompt: lesson.exercise
    },
    {
      level: "Guided",
      prompt: `Rewrite the ${lesson.title} example in your own words, then change at least two values or names.`
    },
    {
      level: "Debug",
      prompt: `Create a small ${lesson.title} example with one intentional mistake, then fix it and explain what changed.`
    },
    {
      level: "Apply",
      prompt: `Use ${lesson.title} in a realistic mini scenario, such as a course dashboard, shopping cart, profile form, or progress tracker.`
    },
    {
      level: "Challenge",
      prompt: `Combine ${lesson.title} with a previous concept and write a short note describing why your solution works.`
    }
  ];
}

function buildQuizSet(lesson) {
  const [question, options, correct] = lesson.quiz;
  return [
    {
      level: "Beginner",
      question,
      options,
      correct,
      explanation: "The correct answer matches the core definition from this lesson. The other choices describe unrelated tools or ideas."
    },
    {
      level: "Concept",
      question: `What is the main purpose of ${lesson.title}?`,
      options: [
        "To solve a specific programming problem more clearly",
        "To replace HTML and CSS entirely",
        "To make code run without any values"
      ],
      correct: 0,
      explanation: `${lesson.title} is useful because it helps solve a programming task clearly. It does not replace the rest of the web stack, and JavaScript still works with values.`
    },
    {
      level: "Code reading",
      question: `When reading code about ${lesson.title}, what should you check first?`,
      options: [
        "The values, names, and order of execution",
        "Only the file name",
        "The monitor brightness"
      ],
      correct: 0,
      explanation: "Code behavior comes from values, names, and execution order. File names and screen settings do not explain what the JavaScript will do."
    },
    {
      level: "Application",
      question: `Where could ${lesson.title} be useful in a small web app?`,
      options: [
        "In user input, calculations, page updates, or reusable logic",
        "Only inside image files",
        "Only before the computer is turned on"
      ],
      correct: 0,
      explanation: `${lesson.title} belongs in real app behavior such as inputs, calculations, UI updates, or reusable logic. It is not limited to image files or impossible offline moments.`
    },
    {
      level: "Challenge",
      question: `How do you prove you understand ${lesson.title}?`,
      options: [
        "Build a small example, test it, and explain the result",
        "Memorize the heading only",
        "Avoid writing code"
      ],
      correct: 0,
      explanation: "Understanding is proven by building, testing, and explaining. Memorizing only the heading or avoiding code does not show practical understanding."
    }
  ];
}

function renderNavigation() {
  topicNav.innerHTML = buildGroupedNav("topic");
  exerciseNav.innerHTML = buildGroupedNav("exercise");
}

function buildGroupedNav(type) {
  const levels = ["Level 1", "Level 2", "Level 3"];
  return levels.map(level => {
    const links = lessons
      .filter(lesson => lesson.level === level)
      .map(lesson => {
        const href = type === "topic" ? lesson.id : lesson.exerciseId;
        const label = type === "topic" ? lesson.title : `${lesson.title} Exercise`;
        return `<a class="nav-link" href="#${href}" data-nav-level="${level}" data-nav-id="${lesson.id}">${label}</a>`;
      })
      .join("");

    return `<div class="nav-group"><p class="nav-title">${level}</p>${links}</div>`;
  }).join("");
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll(".lesson-card").forEach(card => {
    const lesson = lessons[Number(card.dataset.index)];
    const haystack = `${lesson.title} ${lesson.summary} ${lesson.theory} ${lesson.exercise}`.toLowerCase();
    const matchesLevel = activeLevel === "all" || lesson.level === activeLevel;
    const matchesQuery = !query || haystack.includes(query);
    const visible = matchesLevel && matchesQuery;

    card.hidden = !visible;
    visibleCount += visible ? 1 : 0;
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    const lesson = lessons.find(item => item.id === link.dataset.navId);
    const haystack = lesson ? `${lesson.title} ${lesson.summary} ${lesson.theory} ${lesson.exercise}`.toLowerCase() : "";
    const matchesLevel = activeLevel === "all" || link.dataset.navLevel === activeLevel;
    const matchesQuery = !query || haystack.includes(query);
    link.hidden = !(matchesLevel && matchesQuery);
  });

  const existingEmpty = document.querySelector(".empty-state");
  if (!visibleCount && !existingEmpty) {
    courseContent.insertAdjacentHTML("beforeend", `<div class="empty-state">No lessons match the current search.</div>`);
  }
  if (visibleCount && existingEmpty) {
    existingEmpty.remove();
  }
}

function toggleComplete(id) {
  completedLessons = completedLessons.includes(id)
    ? completedLessons.filter(item => item !== id)
    : [...completedLessons, id];

  localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completedLessons));
  document.querySelectorAll(`[data-complete="${id}"]`).forEach(button => {
    const isComplete = completedLessons.includes(id);
    button.classList.toggle("is-complete", isComplete);
    button.textContent = isComplete ? "Completed" : "Mark complete";
  });
  updateProgress();
}

function updateProgress() {
  const percent = Math.round((completedLessons.length / lessons.length) * 100);
  progressText.textContent = `${percent}% complete`;
  progressFill.style.width = `${percent}%`;
}

async function copyCode(button) {
  const lesson = lessons[Number(button.dataset.copy)];
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(lesson.code);
    } else {
      fallbackCopy(lesson.code);
    }
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1200);
  } catch {
    button.textContent = "Copy failed";
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function answerQuiz(button) {
  const id = button.dataset.lessonId;
  const choice = Number(button.dataset.quizOption);
  const questionIndex = Number(button.dataset.questionIndex);
  const lesson = lessons.find(item => item.id === id);
  const quiz = buildQuizSet(lesson)[questionIndex];
  const lessonAnswers = normalizeQuizAnswers(id);

  if (Number.isInteger(lessonAnswers[questionIndex])) {
    return;
  }

  lessonAnswers[questionIndex] = choice;
  quizAnswers[id] = lessonAnswers;
  localStorage.setItem(STORAGE_KEYS.quizzes, JSON.stringify(quizAnswers));

  document.querySelectorAll(`[data-lesson-id="${id}"][data-question-index="${questionIndex}"]`).forEach(option => {
    const optionIndex = Number(option.dataset.quizOption);
    option.classList.toggle("is-correct", optionIndex === quiz.correct);
    option.classList.toggle("is-wrong", optionIndex === choice && choice !== quiz.correct);
    option.disabled = true;
  });

  const quizItem = button.closest(".quiz-item");
  if (quizItem) {
    quizItem.classList.add("is-answered");
  }
  document.querySelector(`[data-feedback="${id}-${questionIndex}"]`).textContent = quizFeedback(quiz, choice);
}

function normalizeQuizAnswers(id) {
  const saved = quizAnswers[id];
  if (Array.isArray(saved)) {
    return saved;
  }
  if (Number.isInteger(saved)) {
    return [saved];
  }
  return [];
}

function quizFeedback(quiz, choice) {
  if (choice === undefined) {
    return "Choose an answer to check your understanding.";
  }
  return choice === quiz.correct
    ? "Correct. This answer matches the lesson concept."
    : `Incorrect. ${quiz.explanation}`;
}

function applyTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "L" : "D";
}

function observeSections() {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const id = visible.target.id;
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  }, { rootMargin: "-20% 0px -65% 0px", threshold: [0.12, 0.4, 0.8] });

  lessons.forEach(lesson => {
    observer.observe(document.getElementById(lesson.id));
    observer.observe(document.getElementById(lesson.exerciseId));
  });
}

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}
