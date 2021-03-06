import React, {useState} from 'react';
import './NavBar.css';

const NavBar = props =>{
    const [algoName,setAlgoName] = useState('none');

    return(
        <React.Fragment>
            <h1>Sorting Algorithm Visualizer</h1>
            <nav>
                <ul className="nav__links">
                    <li><div
                            className={`${algoName==="bubble" ? "active" : ""}`}
                            onClick ={()=>setAlgoName("bubble")}>
                        Bubble Sort</div></li>
                    <li><div
                            className={`${algoName==="merge" ? "active" : ""}`}
                            onClick ={()=>setAlgoName("merge")}>
                        Merge Sort</div></li>
                    <li><div
                            className={`${algoName==="quick" ? "active" : ""}`}
                            onClick ={()=>setAlgoName("quick")}>
                        Quick Sort</div></li>
                </ul>
            </nav>
            <button onClick={    algoName==="quick"  ?props.quick  :
                                 algoName==="merge" ?props.merge :
                                 algoName==="bubble"?props.bubble :()=>{console.log("nah")}}
                    disabled=   {props.sorting||props.sorted}>
                                {algoName==="none"? "Please select algorithon":
                                props.sorting===true? "Sorting...":
                                props.sorted===true? "Sorted": "Start Sorting!"}</button>
            <button onClick={props.reset}
                    disabled={props.sorting===true} >Generate New Array{}</button>
        </React.Fragment>
        
    );
}

export default NavBar;