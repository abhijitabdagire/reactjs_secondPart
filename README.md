
# React JS 

## Chapter 1 - Introduction to React & Setup

Definition -
            React is front-end JavaScript library for buliding single page application and It's user interface based on UI Components.
            
Installation
1. Download and install NodeJs
2. npx create-react-app appname
3. React Developer tool- Chrome/Edge Extension
4. npm start

## Chapter 2 - Components - JSX and Props

### Components :
- Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI).Here In this example, There are Two Compenents which are App are parent Component and Video are child component.

### JSX :
- JSX are same as HTML But in JavaScript language which some rule are : 
1. <> </> This empty tag is called a `Fragment`.
2. All the attributes are in the Caml Case Such as the `className` , `BackgroundColor` etc.
3. The attributes in the `style` are in the Experssion Which is the object.
4. All the attributes are Closing tag must be present such as `<div> </div>`

### Props :
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
- Props are the information that you pass to a JSX tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`.

## Chapter 3 - Conditional Rendering & Lists

- We have rendering the different condition `on JSX` which is called Conditional Rendering.and which are minized them conditional as you possible.
- `map()` In which  we have write a 3 different `video` inside of we are convert data in a single array.and use them in map function. This work are called as `list`.

## Chapter 4 - Events, Event handler, Synthetic Event Object

- In this chapter we have create a One more components which is the PlayButton & In this we created a `button`.
  There are two main types of Event first One is `Mouse Event` and second One is `KeyBoard Event`. In this chapter We are used only one Event which Mouse Event in this mouse event we are use `onClick()`. we have try out another event is Keyboard Event.
- In this onClick Event Function we are passing `handleClick` And another part we are create modifiacation so we using the `Props` method.
  such as `Childern` , `onPlay` and `onPause`. This last two are the Event function we are using as props.
- We have to create `onclick` Event handle function on main div which in the App component so that as result after everyline the onclick funtion was run. This is called the `Event Bubbling`. To remove the event bubbling we have to use the` synthetic event object`. as `e`.
It is the many functionality such as the `stopPropagation()`.

## Chapter 5 - State, useState Hooks

- The state is a built-in React object that is used to contain data or information about the component(Gobally stored). A component's state can change over time; whenever it changes, the component re-renders.
- `useState` is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

## Chapter 6 - Form , Synthetic Event Object & Lifting State up

- In this chapter we have create one more components which is the name is `AddVideo`. In this we are create a form with two inputs.
- Also the we have study about the passing the `useState` from one component to another components. we are use the { }. or multiple setFunction are used in our program and then used the Sythetic event object in handler function such as `e.target.name or value` 
- Lifting State up means the two component are there and we are passing the state from below component to above component using props statement. 

# ReactJs SecondPart

## Chapter 7 - useEffect

- `useEffect` is used to produce sideeffect when the component are render, rerender or dependecies changed.
