import './Main.css';

type MainProps = {
    children: React.ReactNode; // 👈️ type children
  };
  
export function Main (props: MainProps) {
    return (
        <div className="App">{props.children}</div>
    )
}