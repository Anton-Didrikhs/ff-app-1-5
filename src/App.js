import React, { useReducer, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.js';
import Home from "./pages/Home.jsx";
import Lab1 from "./pages/Lab1.jsx";
import Lab2 from "./pages/Lab2.jsx";
import Lab3 from "./pages/Lab3.jsx";
import Lab4 from "./pages/Lab4.jsx";
import Lab4EditPage from "./pages/Lab4EditPage.jsx"; // Import Lab4EditPage
import Lab5 from "./pages/Lab5.jsx"; // Import Lab5
import UserDetails from "./components/UserDetails.jsx"; // Import UserDetails
import PostComments from "./components/PostComments.jsx"; // Import PostComments
import AppReducer from './data/AppReducer.js';
import AppContext from './data/AppContext.js';
import { data } from "./data/module-data.js";
import AppProvider from "./data/AppProvider.jsx";

const menuItems = [
  {
    id: 0,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
  },
  {
    id: 1,
    label: "Lab 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 2,
    label: "Lab 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
  },
  {
    id: 3,
    label: "Lab 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3 />,
  },
  {
    id: 4,
    label: "Lab 4",
    url: "/lab4",
    urlPattern: "/lab4/*",
    element: <Lab4 />,
  },
  {
    id: 5,
    label: "Lab 5",
    url: "/lab5",
    urlPattern: "/lab5",
    element: <Lab5 />,
  },
];

function App() {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <AppProvider>
      <RootLayout menuItems={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern}
              element={item.element}
            />
          ))}
          <Route path="/lab4/edit/:id" element={<Lab4EditPage />} /> {/* Add Lab4EditPage route */}
          <Route path="/lab5/users/:id" element={<UserDetails />} /> {/* Add UserDetails route */}
          <Route path="/lab5/posts/:id/comments" element={<PostComments />} /> {/* Add PostComments route */}
        </Routes>
      </RootLayout>
    </AppProvider>
  );
}

export default App;
