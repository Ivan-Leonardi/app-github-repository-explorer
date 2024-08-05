import { Title, Form, Repositories } from "./styles";
import logoImg from "../../assets/logo.svg";
const Dashboard = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/103914662?s=400&u=f8dab7d84cddd4dfa463bf5fb09bc31d4c76ffc7&v=4"
                        alt=""
                    />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
