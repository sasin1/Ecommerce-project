import { useParams } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader";

const CategoriesList = () => {
  const params = useParams();
  return (
    <>
      <h1>This is page of {params.slug}</h1>
    </>
  );
};
export default CategoriesList;
