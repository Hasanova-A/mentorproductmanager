
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../tools/actions/productAction";


const Home = () => {

  // redux-a action göndərmək üçün dispatch funksiyasını götürürük
  const dispatch = useDispatch();

  // redux store-dan products array-ni götürürük
  // state.products reducer-də saxlanılan products-dir
  const getProducts = useSelector(state => state.products);

  // console-da products datanı görmək üçün log edirik
  console.log(products)


  // component render olanda işləyən hook
  useEffect(() => {

    // getProducts action-u dispatch edilir
    // bu action supabase-dən məlumatı gətirir
    dispatch(getProducts());

  }, [dispatch]); // dispatch dəyişərsə useEffect yenidən işləyər


  // component-in ekrana render olunan hissəsi
  return (

    // əsas container
    <div>

      {/* products array-i üzərində map edirik */}
      {products.map((item) => (

        // hər element üçün ayrıca div yaradılır
        // key react üçün vacibdir (render optimizasiyası üçün)
        <div key={item.id}>

          {/* product adı göstərilir */}
          <h2>{item.title}</h2>

          {/* product description göstərilir */}
          <p>{item.description}</p>

        </div>
      ))}

    </div>
  );
};



export default Home;