import { useParams } from "react-router-dom";

const Detail = (): JSX.Element => {
  const params = useParams();
  return <div>{params.id}</div>;
};

export default Detail;
