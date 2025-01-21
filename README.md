# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.  The `useEffect` hook runs after every render. If you update a state variable within the `useEffect` that is also in the dependency array, you create an infinite loop.  The solution involves carefully managing the dependency array to prevent this.