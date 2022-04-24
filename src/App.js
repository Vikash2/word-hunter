import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Header from './component/Header/Header';
import Defination from './component/Defination/Defination';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';
import { Switch } from '@material-ui/core';




function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([])
  const [category, setCategory] = useState("en")

  const dictionaryApi = async () => {

    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(meaning)
  useEffect(() => {
    dictionaryApi();

  }, [word, category])


  return (
    <div style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />

        {meaning && <Defination word={word} meanings={meaning} category={category} />}
      </Container>
    </div>
  );
}

export default App;
