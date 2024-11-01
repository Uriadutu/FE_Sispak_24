import React,{useEffect} from 'react'
import Layout from './Layout'
import {useDispatch, useSelector} from 'react-redux'
import { getMe } from '../features/authSlice'
import {useNavigate} from 'react-router-dom'
import Prediksi from '../component/Prediksi'

const PrediksiPage = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
      if (isError) {
        navigate("/");
      }

    }, [isError, navigate]);
  return (
    <Layout>
        <Prediksi />
    </Layout>
  )
}

export default PrediksiPage
