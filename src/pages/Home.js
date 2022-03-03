import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

import { Layout } from '../layout/Layout';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';

const Home = () => {

  useEffect(() => {
    document.title = "Ostyn Sy"
  }, [])


  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  ); 
};

export default Home;
