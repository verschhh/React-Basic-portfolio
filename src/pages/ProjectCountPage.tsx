import React from 'react';
import counter from '../components/counter';


function ProjectCountPage() {
    var [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount(count + counter(1).count);
    }
    const handleClick2 = () => {
        setCount(count + counter(5).count);
    }
    return(
        <div>
            <div>
                You have {count} Projects
            </div>
            <button onClick={handleClick}>
                Add X
            </button>
            <button onClick={handleClick2}>
                Add 5
            </button>
        </div>
    );
}

export default ProjectCountPage;