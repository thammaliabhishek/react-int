//------------DAY5------------


// Q.1.High Order Component in react js ?
// -A higher-order component (HOC) is a function that takes a component and returns a new component.
// -It is also known as HOC. In React, HOC is an advanced technique for reusing component logic. 
// -It is a function that takes a component and returns a new component. 
// -According to the official website, it is not the feature(part) in React API, but a pattern that emerges from React compositional nature. 
// -They are similar to JavaScript functions used for adding additional functionalities to the existing component.
// -A higher order component function accepts another function as an argument. 
// -The map function is the best example to understand this. 
// -The main goal of this is to decompose the component logic into simpler and smaller functions that can be reused as you need.
// Syntax-
// const NewComponent = higherOrderComponent(WrappedComponent);  
//const withCounter = fn => {
//     let counter = 0
//     return (...args) => {
//       console.log(`Counter is ${++counter}`)
//       return fn(...args)
//     }
//   }
  
//   const add = (x, y) => x + y
//   const countedSum = withCounter(add)
//   console.log(countedSum(2, 3))
//   console.log(countedSum(2, 1))
  
  // Output -
  // Counter is 1
  // 5
  // Counter is 2
  // 3
  






// Q.2.Do you know about SEO ? Is it true that react js supports SEO support?
// -React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. -However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.
// -But React is often a very good choice to build an SEO-friendly website as long as you set it up correctly. 
// -At Proxify we have many skilled React developers that can help you and make sure that your React site is optimized for both the user and SEO.




// Q.3.What is clean up in useEffect?
// -the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. 
// -When our code runs and returns for every render, useEffect also cleans up after itself using the cleanup function.
// -The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.
// -e.g.
//         useEffect(() => {
//                 setInterval()
//                 return () => {
//                     cleanupcode
//                 }
//             }, [input])


  


// Q.4.What is the use of useCallback and useMemo?
// --->useMemo:
// -React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
// --->useCallback:
// -useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
// main diff - they both r similar but main diff is that if u use useCallback hook it will return direct function when dependacy will get changed but when we use useMemo it first call the function and returns the results when the dependancy get changed.



// Q.5.Why do we need keys in react less?
// -The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as
// -Unique IDs are the best value to assign to keys. (or) "Key" prop is used to look pretty, and there is no benefit whatsoever. "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.



// Q.6.Do you know about redux?
// -Redux is a pattern and library for managing and updating application state, using events called "actions". 
// -It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. Here is a small example of react and Redux application. 
