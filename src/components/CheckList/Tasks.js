// import logData from '../../data/loggedData.json'
import './Task.css';

export default function Tasks(props) {
    const handleCheck = (event)=>{
        console.log(event.target.checked);
    }

    return (
        <form>
            {props.tasks.map((task, index) => (
                <div className='tasks' key={index}>
                    <input type="checkbox" value={task} onChange={handleCheck}/>
                    <label>
                        {task}
                    </label>
                </div>
            ))}
        </form>
    );
}