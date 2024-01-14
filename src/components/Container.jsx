export default function Container(props) {
   const { children, classes } = props;
   return (
      <div
         className={`container px-[7.5rem] mx-auto ${
            classes ? classes : ""
         }`}
      >
         {children}
      </div>
   );
}
