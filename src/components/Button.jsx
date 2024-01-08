export default function Button(props) {
   const { children, onClick, classes } = props;
   return (
      <button onClick={onClick} className={`border-none ${classes}`}>
         {children}
      </button>
   );
}
