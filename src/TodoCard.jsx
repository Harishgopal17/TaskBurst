import stickynote from "./assets/yellow-sticky-note.png";
import pushpin from "./assets/pushpin.png";

function TodoCard({ task, onDelete }) {
  return (
    <>
      <div className="relative w-64 h-64">
        <img className="h-full w-full" src={stickynote} alt="stickyNote" />
        <div className="absolute top-0 left-[30%] w-[80%] h-[60%] overflow-hidden text-black">
          <img
            className="h-16 w-14 pt-3 cursor-pointer"
            src={pushpin}
            alt="pushpin"
            onClick={onDelete}
          />
        </div>
        <div className="absolute top-12 left-8 text-black rotate-[350deg] w-40 h-42 overflow-hidden">
          {task.text}
        </div>
      </div>
    </>
  );
}

export default TodoCard;
