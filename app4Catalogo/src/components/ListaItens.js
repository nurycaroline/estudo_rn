import React, { Component } from "react";
import { ScrollView } from "react-native";
import Itens from "./Itens";
import axios from "axios";

export default class ListaItens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaItens: []
    };
  }

  componentWillMount() {
    let url = "http://faus.com.br/recursos/c/dmairr/api/itens.html";

    //axios.get(url)
    //.then(function (response) {
    //console.log(response);
    //this.setState({listaItens: response.data});
    //})
    //.catch(function (error) {
    //console.log(error);
    //"Erro ao buscar itens"
    //});

    this.setState({
      listaItens: [
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/mesa_vidro.jpg",
          titulo: "Mesa de vidro para computador",
          valor: 160,
          local_anuncio: "Santo AndrÃ©",
          data_publicacao: "01/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/piscina.jpg",
          titulo: "Pisciona (nova)",
          valor: 100,
          local_anuncio: "Sorocaba",
          data_publicacao: "02/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/balanca_digital.jpg",
          titulo: "BalanÃ§a digital",
          valor: 250,
          local_anuncio: "VÃ¡rzea Paulista",
          data_publicacao: "02/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/bicicleta.jpg",
          titulo: "Bicicleta",
          valor: 400,
          local_anuncio: "Itapetininga",
          data_publicacao: "03/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/tv_32.jpg",
          titulo: "TV 32",
          valor: 500,
          local_anuncio: "JundiaÃ­",
          data_publicacao: "03/12/2016"
        },
        {
          foto:
            "http://faus.com.br/recursos/c/dmairr/imgs/boneco_max_steel.jpg",
          titulo: "Boneco sÃ©rie Max Steel",
          valor: 20,
          local_anuncio: "SÃ£o JosÃ© dos Campos",
          data_publicacao: "04/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/bermuda_jeans.jpg",
          titulo: "Bermuda Jeans",
          valor: 30,
          local_anuncio: "MarÃ­lia",
          data_publicacao: "05/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/armario_cozinha.jpg",
          titulo: "ArmÃ¡rio de cozinha",
          valor: 800,
          local_anuncio: "Guarulhos",
          data_publicacao: "06/12/2016"
        },
        {
          foto: "http://faus.com.br/recursos/c/dmairr/imgs/dvd_player.jpg",
          titulo: "DVD Player retratil",
          valor: 600,
          local_anuncio: "Limeira",
          data_publicacao: "06/12/2016"
        }
      ]
    });
  }

  render() {
    let { listaItens } = this.state;
    debugger

    return (
      <ScrollView style={{ backgroundColor: "#DDD" }}>
        {listaItens.map(item => {
          return <Itens key={item.titulo} item={item} />;
        })}
      </ScrollView>
    );
  }
}
