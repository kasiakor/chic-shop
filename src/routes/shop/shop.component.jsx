import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import setCategoriesMap from "../../store/categories/category.actions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  
  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoriesMap));
    };
    getCategories();
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
