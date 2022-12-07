import Button from "../Button/Button";

function ListItem({
  data,
  idx,
  disableSwap,
  handleCheck,
  handleReorder,
  handleDelete,
}) {
  return (
    <div
      style={{ margin: "10px 8px 0 10px" }}
      className='flex justify-center items-center'
    >
      <div
        style={{ padding: "4px", marginRight: "2px" }}
        className='flex flex-col justify-center items-center'
      >
        <Button
          style={{ backgroundColor: disableSwap === "top" ? "#F0F0F0" : "" }}
          disabled={disableSwap === "top"}
          onClick={() => {
            handleReorder(idx, -1);
          }}
        >
          +
        </Button>
        <Button
          style={{
            backgroundColor: disableSwap === "bottom" ? "#F0F0F0" : "",
            marginTop: "2px",
          }}
          disabled={disableSwap === "bottom"}
          onClick={() => {
            handleReorder(idx, +1);
          }}
        >
          -
        </Button>
      </div>
      <div
        style={{
          padding: "16px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 2px #000000",
        }}
        className='flex justify-between items-center'
      >
        <div className='flex justify-center items-center'>
          <input
            type='checkbox'
            checked={data.done}
            onClick={() => {
              handleCheck(idx);
            }}
            name=''
            id=''
          />
          <div
            style={{
              marginLeft: "10px",
              textDecoration: data.done ? "line-through" : "",
            }}
            className='flex align-center'
          >
            {data.description}
          </div>
        </div>
        <Button style={{ backgroundColor: "#fe0b0f" }} onClick={handleDelete}>
          x
        </Button>
      </div>
    </div>
  );
}

export default ListItem;
