import "./App.css";
import { SplashCursor } from "./components/ui/splash-cursor";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      
      <SplashCursor />


    </>
  );
}

export default App;
