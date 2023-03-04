import IMC from '../img/IMC.png' 
import MED from '../img/medcenter3.png'
import LEFT from '../img/left.png'
import RIGHT from '../img/right.png'
import NAV from '../img/nav.png'
import GMAIL from '../img/gmail.png'
import '../App.css'


type Props = {
    value:number
}

const arrayImg = [IMC,MED]
let img

export function GetImgNav() {
    return(
    <div >
        <img src={NAV} alt="" />
    </div>
    )
    
}

export function GetImgGmail() {
    return(
        <div>
            <img src={GMAIL} alt="" />
        </div>
    )
}

export function GetImageCenter({value}:Props){
    if(value <3){
        img = arrayImg[value]
    }else{
        img=arrayImg[1]
    }
    return (
        <div className='transitionImg'>
            <img src={img} alt="" />
        </div>
        
    )
}

export function GetImageLeft(){
    return (
        <div>
            <img src={LEFT} alt="" />
        </div>
    )
}

export function GetImageRight(){
    return(
        <div>
            <img src={RIGHT} alt="" />
        </div>
    )
}