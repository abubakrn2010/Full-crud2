import axios from "axios"; 
import { useEffect, useState } from "react";

const api = "https://to-dos-api.softclub.tj/api/to-dos";
const imgapi='https://to-dos-api.softclub.tj/images/'


function About() {
  const [todos, setTodos] = useState([]);
  const [elem, setelem] = useState({id:null,name:'',description:''});


  async function getUsers() {
    try {
      const { data } = await axios.get(api);
      setTodos(data.data);
    } catch (error) {
      console.error(error);
    }
  }


   async function edituser(upuser) {
    try {
     await axios.put(api,upuser);
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

     async function adduser(upuser) {
    try {
     await axios.post(api,upuser);
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }


  async function handleDelete(id: number) {
    try {
      await axios.delete(`${api}?id=${id}`)
      getUsers()
    } catch (error) {
      console.error(error);
    }
  }

  const handelsubmit=(e)=>{
    e.preventDefault()

    const upuser={
      id:elem.id,
      name:e.target.name.value,
      description:e.target.desc.value
    }
    edituser(upuser)
    setelem({id:null,name:'',description:''})
  }

  useEffect(() => {
    getUsers();
  }, []);
  
  const handeladdsubmit=(e)=>{
  e.preventDefault()

  const formdata=new FormData()
  formdata.append("Name",e.target.name.value)
  formdata.append("Description",e.target.description.value)
  formdata.append("Images",e.target.img.files[0])
  adduser(formdata)
 e.target.reset()
}



  return (
    <div>

{
  elem.id?
  <div>  
  <h1>Edit user</h1>
  <form onSubmit={handelsubmit}>
      <input className="border" defaultValue={elem.name} name='name' type="text" /> <span></span>
      <input className="border" defaultValue={elem.description} name='desc' type="text" />
      <button type="submit">Edit user</button>
    </form>
     </div>
    :null
}

<h1>Add user</h1>
<form onSubmit={handeladdsubmit}>
  <input className="border" type="file" name="img" placeholder="Img"/>
  <input className="border" type="text" name="name" placeholder="Name"/>
  <input className="border" type="text" name="description" placeholder="Desc"/>
      <button type="submit">Add user</button>
</form>

      {todos.map((e:any) => {
        return (
          <div key={e.id} className="border border-gray-400 p-4 m-2 rounded-lg w-[200px]">

            <img src={imgapi+e?.images[0]?.imageName} alt="" />
            <h2>{e.name}</h2>
            <p>{e.description}</p>

            <button onClick={() => handleDelete(e.id)}>Delete</button>
            <button onClick={()=>setelem(e)}>Edit</button>
          </div>
        )
      })}

    </div>
  )}

  export default About