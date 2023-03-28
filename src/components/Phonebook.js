

export default function Phonebook(){
    return(
      <>
      <form>
        <label for="name" >Name</label>
        <input type="text" id="name"/><br/>
        <label for="email" >Email</label>
        <input type="text" id="email"/><br/>
        <label for="number" >Number</label>
        <input type="text" id="number"/><br/>
        <button>Click Me</button>
        </form>
      </>
    )
    }