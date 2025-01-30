To solve this, you can use the `useLocation` hook from `react-router-dom` to force a re-render whenever the URL changes:

```jsx
import { useLocation, useParams } from 'react-router-dom';

function ChildRoute() {
  let { parentId } = useParams();
  const location = useLocation();
  //Use the location state to force rerender
  return (
    <div>Child Route, parentId: {parentId}, location: {JSON.stringify(location)}</div>
  );
}
```

By including `useLocation` and accessing its state, React will re-render `ChildRoute` whenever the URL changes, ensuring `parentId` is always up-to-date.  This approach leverages React's built-in reactivity to address the parameter update issue without resorting to more complex solutions.