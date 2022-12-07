import "./Button.css";
function Button({ children, ...restProps }) {
  return (
    <button className='button' {...restProps}>
      {children}
    </button>
  );
}

export default Button;
