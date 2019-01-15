import React, { Component } from 'react';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';
import {Tablo} from './Tablo';

class App extends Component {

  constructor(){
    super();
    this.state = {
      kisiler:[{
        "id":1,
        "ad":"Ali",
        "soyad":"DD",
      },{
        "id":2,
        "ad":"Duru",
        "soyad":"DD",
      },{
        "id":3,
        "ad":"Esra",
        "soyad":"DD",
      },
    
    ],
      header:"Header json içinde",
      footer:"Footer json içinde"
    };



  }

  render() {
    return (
      <div>
        {this.state.header}
        <Header/>
        <Content/>
       <table>
           <thead><tr><td><b>#</b></td> <td><b>Ad</b></td> <td><b>Soyad </b></td> </tr> </thead>
         <tbody>
           {this.state.kisiler.map((kisi,index)=>
              <Tablo key={index} data={kisi} />
            )}
           </tbody>
         </table>
        <Footer/>
        {this.state.footer}
      </div>
    );
  }
}

export default App;
