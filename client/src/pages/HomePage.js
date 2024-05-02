import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Checkbox, Radio } from "antd";
// import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
// import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import {useAuth} from "../context/auth";

const HomePage = () => {
  const [auth,setAuth] = useAuth();
  // const navigate = useNavigate();
  // const [cart, setCart] = useCart();
  // const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [checked, setChecked] = useState([]);
  // const [radio, setRadio] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  return (
     <Layout title={"All Products - Best offers "}>
        {/* banner image */}
        <img
          src="/images/banner.png"
          className="banner-img"
          alt="bannerimage"
          width={"100%"}
        />

      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null,4)}</pre>
    </Layout>
  );
};

export default HomePage;