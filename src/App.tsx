import Router from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
};

export default App;
