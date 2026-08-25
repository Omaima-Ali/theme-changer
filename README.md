# 🌓 React Context Theme App

A modern, responsive landing page built with React that features a global Light/Dark mode toggle. 

This project was created specifically to learn and practice fundamental **React Hooks** and global state management using the **React Context API**.

##  What I Learned (React Concepts)

This project focuses on moving away from "prop drilling" (passing data through every component) and instead uses a central "Control Panel" for the app's state.

Here are the key React concepts applied in this project:

* **`createContext` & `useContext`**: Used to build a "sprinkler system" for data. The theme state is broadcasted globally so any component (like the App background or the Toggle Button) can access it directly without passing props.
* **`useState`**: Used to hold the current active theme (`"light"` or `"dark"`).
* **`useEffect`**: Used to watch for changes in the theme and automatically save the user's preference to the browser's `localStorage`. (The app remembers your theme even if you refresh!).
* **`useMemo`**: Used to memorize (cache) the Context data. This is a performance optimization that prevents the entire app from re-rendering unnecessarily.
