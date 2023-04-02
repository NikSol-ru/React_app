import preloader from "../../../assets/images/b4d657e7ef262b88eb5f7ac021edda87.gif";
import c from "./Preloader.module.css";


const Preloader = (props) => {
    return (<div>
        <img className={c.preloader} src={preloader} alt="load..." />
    </div>)
}

export default Preloader;