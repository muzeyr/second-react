import React from 'react';


export class Tablo extends React.Component{


    render(){
        return(
            <tr> 
                <td> {this.props.data.id}</td>
                <td> {this.props.data.ad}</td>
                <td> {this.props.data.soyad}</td> 
            </tr>
        );

    }
}