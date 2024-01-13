export default function Button(props) {
   const { children, onClick, classes, image } = props;
   return (
      <button onClick={onClick} className={`border-none ${classes}`}>
         {children} {image}
      </button>
   );
}
