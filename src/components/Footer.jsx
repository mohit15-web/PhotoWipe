const Footer = () => {
    const generateItems = (count) => {
      const items = [];
      for (let i = 0; i < count; i++) {
        items.push(
          <div className="item" key={i}>
            Made with 🧡 by Mohit Chaudhary
          </div>
        );
      }
      return items;
    };
  
    const items = generateItems(10);
    return (
   <div className="flex justify-center">
       <div id="container">
        <div className="scroll tracking-widest">{items}</div>
        <div className="fade"></div>
      </div>
   </div>
    );
  };
  
  export default Footer;