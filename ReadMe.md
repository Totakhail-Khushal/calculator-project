# Calculator project

## General

- Breaks as usual or as agreed
- We wanna use github
- If anyone gets stuck he gets help!
- Our results are group results
- Trying to do things simple in the first step and extend afterwards if possible

# Brainstorming

- Kind of coding
- One central or different functions?
- Extensibility (How to extend code? Only plus minus? / percentage)
  ~~- How to get user input (console / browser / frontend?)~~
  ~~- Always having 3 inputs (two numbers one operator?)~~
- How to use github correctly
- How to divide work or work together at same time?
- Adding Sources/References/copyrights?
- Maybe one math library js file (backend) and one for user input/output (frontend)
  ~~- Only server sided or client (browser)~~
- How percentage could work?
  percentage(a,b) { return a /100 _ b }
  (a)50% of (b)200 = 50/100 _ 200 = 0.5 \* 200 = 100
  First input (For frontend): Should be the percentage
  Second input: Should be the reference
  - sinus: sin(a) { return Math.sin(a); }

# Decisions

- 1 file per person and merge afterwards
- Use pure functions (no side effects, no global variables), e.g.
  function add (a, b) {
  return a + b;
  ~~console.log('')~~
  }
- no rounding or fixing in the library
- Use these functions with these names
  add(a,b),
  subtract(a,b),
  multiply(a,b),
  divide(a,b),
  percentage(a,b),
  squareroot(a),
  cubicroot(a),

# Goals for Day 1 / 2

- Backend: Simple lib with name `math.js` (e.g. function add(a,b))
- Middle layer: `operation.js` on how to evaluate terms, create functions to apply oprations (binary / unary)
  (eg. functions like evaluate/compute, startOperation, (putIntoMemory) )
  - In case of frontend: `calculator.html` and maybe a `calculator.js` and `calculator.css`
- Setup git hub project and see if we can work with it and how
- Optional: Frontend (Either console or browser)
  - that is just get user input (and passing to middle layer)
  - that is getting results from middle layer for display
- Optional: Memory function (this would belong to the middle layer)

## Glossar:

Operators: +, -, /, \*
Operand: a, b
Example: 2+3 (operator a=2;operator b=3; operand='+')

# Samples / Links

1. https://freshman-calculator.surge.sh/
2. https://codepen.io/lalwanivikas/details/eZxjqo
3. Ubuntu-Calculator (screenshot)
   ![alt](/home/dci/projects/dci/calculator-project/calculator.png)

# Mockup (for keypad)

![mockup](/home/dci/projects/dci/calculator-project/KeyPad.png)

## Idea

- Implement state
- Always start with operand a ("-1")
- How do we detect, that the operand is complete? Because there comes a new operator

1. State='Input operand A'
2. As long user inputs numbers these belong to operand A. Except that he is typing a "-" at the beginning.
   - What about "."???
     3.If operator comes, decide (unary or binary operator?) if evaluate or input of second operand

# ToDo

~~- expression History~~
~~! - The design of the expression HTML element crashed when adding history~~
~~!- WRONG RESULT: Erasing last result after user hit enter (evalute) and continues writing~~

- Button texts (User should now what key to press! Backspace still connect to Delete-Key)
  -> Use of title did not work, why
  -> Maybe use of on hover in css?!
  -> Or simply rename
- Project Documentation
- Optional: Memory function (this would belong to the middle layer)
- (A)(C)lear button functionality is missing (Rearrange Key Layout like in our mockup
  ~~- substitute NUMLOCK by AC in design~~
- Adding Sources/References/copyrights
  ~~- Expression should always be left-sided~~
- How to use github correctly
- Code refactoring / renaming / code style
- Optional: Error handling
- Optional: Use SCSS for readability
- Extend product:
  - Percentage, sin, cos, ...?
  - Optional: Memory function (this would belong to the middle layer)

# Goals for Day 3:

~~- Error handling~~
~~- Wrong results can be handled together or better with History~~
~~- AC Button (Keyboard layout)~~
~~- Button hints (tooltips)~~

# Goals for day 4

! Expression element looses focus when uer clicks button
~~!! - implement AC Button function (Est.: 2min)~~
! - switch position of "+" and "=" key (Estimate 3min)
!! - documentation some sentences, idea, progress, project history, comments in the code)
! - CSS Design ( Fixed size of expression element?! Is breathing)
~~- Tooltips (titles) (5min)~~
~~- Code Style (10min JS)~~

- add sin, cos, tan, percentage, memory
  ~~- Optional: Error handling (15m min coding for easy solution, style 10min)~~
  ~~- Optional: Sound?~~

# Log Console Ideas

2+4
Result log
[Expression2]=[Result2]
[Expression1]=[Result1]
2+4=6
1+5=7
