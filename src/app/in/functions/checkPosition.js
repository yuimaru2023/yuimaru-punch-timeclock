import { useEffect } from "react";


export default function CheckPosition() {
    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(success);
    // },[])

    function success(position) {
        // const latitude = position.coords.latitude;
        // const longitude = position.coords.longitude;
        // const latiRange = [39.0263993,39.0265243]
        // const longRange = [141.62617,141.6264092]
        // if (latitude>latiRange[0] && latitude<latiRange[1] && longitude>longRange[0] && longitude<longRange[1]) {
        //     return true
        // } else {
        //     return false
        // }
        // return {ido:latitude,keido:longitude}
        // console.log(position)
        // return position
        return 101
    }

    return success()
}