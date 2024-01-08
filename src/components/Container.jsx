export default function Container(props) {
   const { children, classes } = props;
   return (
      <div
         className={`container px-[7.5rem] mx-auto bg-slate-400 ${classes}`}
      >
         {children}
      </div>
   );
}
