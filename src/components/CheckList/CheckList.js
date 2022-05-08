import EarlyMorning from "./EarlyMorning"
import LateMorning from "./LateMorning"
import EarlyAfternoon from "./EarlyAfternoon"
import LateAfternoon from "./LateAfternoon"
import Evening from "./Evening"
import Night from "./Night"

export default function CheckList(props) {

    return <div>
        {(() => {
            if (props.time >= '06:00:00 AM' && props.time < '09:00:00 AM') {
                return (
                    <EarlyMorning/>
                )
            } else if (props.time >= '09:00:00 AM' && props.time < '12:00:00 PM'){
                return (
                    <LateMorning/>
                )
            } else if (props.time >= '12:00:00 PM' && props.time < '03:00:00 PM'){
                return (
                    <EarlyAfternoon/>
                )
            } else if (props.time >= '03:00:00 PM' && props.time < '06:00:00 PM'){
                return (
                    <LateAfternoon/>
                )
            } else if (props.time >= '06:00:00 PM' && props.time < '09:00:00 PM'){
                return (
                    <Evening/>
                )
            } else if (props.time >= '09:00:00 PM' && props.time < '12:00:00 AM'){
                return (
                    <Night/>
                )
            }
            
            return null;
        })()}
    </div>
}