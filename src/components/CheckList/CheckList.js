import data from '../../data/tasks.json';
import Tasks from './Tasks';

export default function CheckList(props) {
    let TIME = new Date(props.time).getHours();

    return <div>
        {(() => {
            if (TIME >= 6 && TIME < 9) {
                return (
                    <Tasks tasks={data["EarlyMorning"]}/>
                )
            } else if (TIME >= 9 && TIME < 12){
                return (
                    <Tasks tasks={data["LateMorning"]}/>
                )
            } else if (TIME >= 12 && TIME < 15){
                return (
                    <Tasks tasks={data["EarlyAfternoon"]}/>
                )
            } else if (TIME >= 15 && TIME < 18){
                return (
                    <Tasks tasks={data["LateAfternoon"]}/>
                )
            } else if (TIME >= 18 && TIME < 21){
                return (
                    <Tasks tasks={data["Evening"]}/>
                )
            } else if (TIME >= 21 && TIME < 24){
                return (
                    <Tasks tasks={data["Night"]}/>
                )
            }
            
            return null;
        })()}
    </div>
}