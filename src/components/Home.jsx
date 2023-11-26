import React, { useState ,useEffect} from "react";
import Searchbar from "./Searchbar";
import { Box, Grid, GridItem,Image ,Center,Text} from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [isloading , setisloading ]=useState(false)
  const [iserr , setiserr ]=useState(false)
  const [data,setdata]=useState([])

  const handleInputChange = (text) => {
    setInputText(text);
  };

  useEffect(()=>{
    setisloading(true)
    setiserr(false)
  
    axios.get(inputText===""?`https://restcountries.com/v3.1/all`:`https://restcountries.com/v3.1/currency/${inputText}`).then((res)=>{
        setisloading(false)
        setiserr(false)
        setdata(res.data)

    }).catch((err)=>{
        console.log(err)
        setisloading(false)
        setiserr(true)
    })

  },[inputText])

  return (
    <>
      <Searchbar onChange={handleInputChange} />
    {isloading &&
     <Center h="1vh" mt="300px">
      <Image src="https://img.freepik.com/free-icon/loading_318-197254.jpg" h="200px"/>
   </Center>
    }
    {iserr &&
     <Center h="1vh" mt="300px">
      <Text as='b' fontSize='4xl'>No Data Found </Text>
   </Center>
    }
    {!isloading&& !iserr&& <Grid
      w={{
        base: "80%",
        md: "85%",
        lg: "70%",
      }}
     
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        m="auto"
        mt="50px"
      >
        {data.map((item,index) => (
          <Card
            key={index}
            country={item}
          >
         
          </Card>
        ))}
      </Grid>}
    </>
  );
};

export default Home;
