import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 }, 
      items: 1
    }
  };

const App = () => {
  return (
    <Carousel responsive={responsive}>
  <div> <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://media.istockphoto.com/id/1335204730/photo/orange-moon-over-great-waterfall.jpg?b=1&s=170667a&w=0&k=20&c=4LD-8h2T6J7AT_SEVMXsIOfR_RgK1HNf3CGXlZuwtTg='} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg'} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://media.istockphoto.com/id/1335204730/photo/orange-moon-over-great-waterfall.jpg?b=1&s=170667a&w=0&k=20&c=4LD-8h2T6J7AT_SEVMXsIOfR_RgK1HNf3CGXlZuwtTg='} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='} height={200} width={200} alt="Logo" />;</div>
  <div> <img src={'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg'} height={200} width={200} alt="Logo" />;</div>


  </Carousel>
  )
}

export default App