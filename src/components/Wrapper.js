import "./Wrapper.css";

const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };
  
  export default Wrapper; // ✅ Correct way to export
  