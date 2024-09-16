import { useEffect, useState } from "react";
import { useGetAllProductQuery } from "../../redux/features/product/product.api";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Card from "./Card";

const Home = () => {
  const [params, setParams] = useState("");
  const searchParam = useAppSelector((state: RootState) => state.search.search);

  useEffect(() => {
    if (searchParam) {
      setParams(searchParam);
    }
  }, [searchParam]);

  const { data, isLoading, refetch } = useGetAllProductQuery([
    { name: "searchTerm", value: params },
  ]);

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  if (isLoading) {
    return <div>loading...</div>;
  }
  console.log(data)
  return (
    <div className="container mx-auto">
      <div className="bg-[#fff9f4]">
        <div className=" mx-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {data?.data?.map((item: any, i: any): any => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
