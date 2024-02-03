import React, {useState} from "react"; //chamando o hook useState
import Pastel from "./pastel.png"
import Caldo from "./caldo.png"
import Coca from "./coca.png"
import Carrinho from "./carrinho.png"
import Carrinho2 from "../../assets/carrinho2.png"

export default function Main(){
    const [numero, setNumero] = useState (0)

    const Adicionar = () => {
        if(numero < 10){
            setNumero(numero +1)
        }
    }

        return (
            <main>
                <section>
                    <img className="galeriaMain" src={Pastel} alt="Imagem de um pastel" />
                    <h3>R$10,00</h3>
                    <img onClick={Adicionar} src={Carrinho} alt="" />

                    <h2>{numero} Itens</h2>

                </section>

                <section>
                    <img className="galeriaMain" src={Caldo} alt="Imagem de um caldo de cana" />
                    <h3>R$7,00</h3>
                    <button> <img src={Carrinho2} alt="" /> Carrinho </button>
                    
                    <h2>0</h2>
                </section>

                <section>
                    <img className="galeriaMainCoquinha" src={Coca} alt="Imagem de uma garrafa de coca-cola" />
                    <h3>R$6,00</h3>
                    <button> Carrinho </button>
                    <h2>0</h2>
                </section>


            </main>
        )
}