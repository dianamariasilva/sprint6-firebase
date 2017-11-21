import React from 'react'
import {addStage} from '../../actions'
import Stage from '../Stage/Stage';

const Board = ({stages, tasks}) => {
   const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

   return (
      <div className = "Board-container">
        
          <div className = "Board-column">
             {list}
          </div>
          <div className = "Board-column savelist">
            <form onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input type="text" ref = {e => this.stageInputRef = e}/>
               <button className="addlist" type="submit">
                  save list
               </button>
               </form>
            </div>
      </div>
   ); 
}

export default Board;
