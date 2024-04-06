import"./index.css"
import Logo from '../../components/logo/produtos-venda.png';

export default function Home(){
    return (
        <>
        <h1>Seja BEM-VINDO....</h1>

        <div className="logo"> 
          
            <img src={Logo} alt="produtos-venda.png" />
        <div className="venda"></div>
        </div>
        </>
    )
}
