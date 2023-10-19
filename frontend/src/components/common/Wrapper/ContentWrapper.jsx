function ContentWrapper({ children, id, classNames }) {
    return (
      <section
        id={id}
        className={`w-screen min-h-screen m-0 mx-auto p-10 md:px-20 bg-slate-400 ${classNames}`}
      >
        {children}
      </section>
    );
  }
  
  export default ContentWrapper;
  