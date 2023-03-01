import IMC from '../img/IMC.png' 
import MED from '../img/medcenter3.png'
import LEFT from '../img/left.png'
import RIGHT from '../img/right.png'
import '../App.css'


type Props = {
    value:number
}

const arrayImg = [IMC,MED]
let img



export function GetImageCenter({value}:Props){
    if(value <3){
        img = arrayImg[value]
    }else{
        img=arrayImg[1]
    }
    console.log(value);
    
    return (
        <div>
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