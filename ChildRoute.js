In React Router Dom v6, a common issue arises when you have nested routes and want to pass parameters dynamically between them.  For example, consider this scenario:

```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  return (
    <Routes>
      <Route path="/:parentId" element={<ChildRoute />}>
    </Routes>  );
}

function ChildRoute() {
  let { parentId } = useParams();
  return (
    <div>Child Route, parentId: {parentId}</div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ParentRoute/>
    </BrowserRouter>
  );
}
export default App;
```

If you navigate to `/someParentId`, everything works fine. However, if you try to navigate from `/someParentId` to `/anotherParentId`, you might notice that the `parentId` in `ChildRoute` doesn't update.  This is because React Router doesn't automatically re-render `ChildRoute` when the URL parameter changes within the same route.

This is not a bug in React Router, but rather a misunderstanding of how nested routes and parameter updates work.