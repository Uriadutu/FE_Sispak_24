import React,{useEffect} from 'react'
import Layout from './Layout'
import {useDispatch, useSelector} from 'react-redux'
import { getMe } from '../features/authSlice'
import {useNavigate} from 'react-router-dom'
import Dasbor from '../component/Dasbor'

const DasborPage = () => {
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
        <Dasbor />
    </Layout>
  )
}

export default DasborPage
