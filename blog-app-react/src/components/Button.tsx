//rafce

interface Props {
  children: string; //special type tha all props support
  //allows us to pass in html content as a prop
  color?: "primary" | "secondary" | "danger"; //?indicates we dont need to always pass this prop when we call a button component can only be set to the listed values for color
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  //button color set to primary by default
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
