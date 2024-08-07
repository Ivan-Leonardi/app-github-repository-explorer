import { useParams } from "react-router-dom";

const Repository: React.FC = () => {
    const { "*": repository } = useParams()
    console.log(repository)
    return (
        <h1>Repository: {repository}</h1>
    )
};

export default Repository;
