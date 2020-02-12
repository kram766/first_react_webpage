import aliceblue from "../image/aliceblue.svg";
import axis from "../image/axis.svg";
import edelweiss from "../image/edelweiss.svg";
import fivepaisa from "../image/fivepaisa.svg";
import hdfc from "../image/hdfc.svg";
import iifl from "../image/iifl.svg";
import kite from "../image/kite.svg";
import kotak from "../image/kotak.svg";

export default function imageview(){
    const imagedata = [
        { id:"1" ,image:aliceblue,title:"aliceblue"},
        { id:"2" ,image:axis,title:"axis"},
        { id:"3" ,image:edelweiss,title:"edelweiss"},
        { id:"4" ,image:fivepaisa,title:"fivepaisa"},
        { id:"5" ,image:hdfc,title:"hdfc"},
        { id:"6" ,image:iifl,title:"iifl"},
        { id:"7" ,image:kite,title:"kite"},
        { id:"8" ,image:kotak,title:"kotak"}

    ]
    return imagedata;
}