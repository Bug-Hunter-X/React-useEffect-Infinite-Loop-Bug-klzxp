```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fixed: No more infinite loop
    //The effect will only run once after the component mounts
  }, []);

  return <div>Count: {count}</div>;
}
```