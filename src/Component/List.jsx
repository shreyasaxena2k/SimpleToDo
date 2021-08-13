let List = (props) => {
    return (
      <ul className="ul">
        {props.task.map((el) => {
          return (
            <li>
              {el}{" "}
              <button
                onClick={() => {
                  props.deleteTask(el)
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default List;