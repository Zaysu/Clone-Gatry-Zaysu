import React from 'react';
import PromotionCard from './components/Promotion/Card/Card';
import './App.css';

const App = () => {

  const promotion = {
      "id": 1,
      "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
      "price": 1799,
      "imageUrl": "https://i0.wp.com/quenotebookcomprar.com.br/wp-content/uploads/2019/12/Kit-Notebook-Acer-Aspire-3-Mochila-Green-A315-41-R790-barato.jpg?resize=280%2C240&ssl=1",
      "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=gatry0b-20&linkId=e4a1146599e36741a720a6a952cbc328&language=pt_BR",
      "comments": [
        {
          "id": 1,
          "comment": "TELA HD"
        }
      ]
    
  }
  return (
    <div 
        className="App" 
        style={{
          maxWidth: 800,
          margin: '30px auto',
        }}
    >

      <PromotionCard promotion={promotion}/>

    </div>  
  );

}

export default App;
