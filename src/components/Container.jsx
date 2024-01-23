export default function Container(props) {
   const { children, classes } = props;
   return (
      <div
         className={`container max-w-[1440px] px-[7.5rem] mx-auto ${
            classes ? classes : ""
         }`}
      >
         {children}
      </div>
   );
}
