import './PropsCSS/PropsMenuP.css'

function PropsMenuP(props) {
    return (
        <li className='dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}

export default PropsMenuP