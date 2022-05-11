export default function Tasks(props) {
    const handleCheck = (event)=>{
        //Log this data to JSON file a/c to DATE
        //console.log(event.target.value);
    }
    return (
        <div>
            {props.tasks.map((task, index) => (
                <div key={index}>
                    <input type="checkbox" value={task} onChange={handleCheck}/>
                    <label>
                        {task}
                    </label>
                </div>
            ))}
        </div>
    );
}