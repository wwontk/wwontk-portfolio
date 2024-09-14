import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useQuery } from "react-query";

interface ProjectDataType {
  id: string;
  data: {
    date: string;
    github: string;
    no: number;
    photo: string;
    service: string;
    text: string;
    title: string;
  };
}

const fetchData = async (): Promise<ProjectDataType[]> => {
  const q = query(collection(db, "projects"), orderBy("no", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data() as ProjectDataType["data"],
  }));
};
const useGetProjectDataQuery = () => {
  const {
    data: projectData,
    isLoading: projectDataIsLoadig,
    isError: projectDataIsError,
  } = useQuery({ queryKey: ["projects"], queryFn: () => fetchData() });

  return { projectData, projectDataIsLoadig, projectDataIsError };
};

export default useGetProjectDataQuery;
