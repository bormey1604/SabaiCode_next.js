import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "../../components/detail/detail";

const Detail_card = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [id, setId] = useState([]);
  const api = `https://fakestoreapi.com/products/${pid}`;

  const getID = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();

      console.log(data);
      setId(data);
    } catch (error) {}
  };
  useEffect(() => {
    getID();
  }, []);
  return (
    <div>
      <Detail
        src={id.image}
        category={id.category}
        title={id.title}
        id={id.id}
        price={id.price}
        description={id.description}
        href={`/stores`}
      />
    </div>
  );
};

export default Detail_card;
