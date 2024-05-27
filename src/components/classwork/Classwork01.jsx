import React from 'react'

const Classwork01 = () => {

  const [name, setname] = useState("Daniel")

  const [count, setCount] = useState(0)
  

  let gender = "other gender";
  let status = false;

  let allStudents = [
    {
      firstName: "John",
      lastName: "Doe"
    },
    {
      firstName: "Danie",
      lastName: "Bibi"
    },
    {
      firstName: "Yode",
      lastName: "Toyin"
    },
  ]

  const changeName = ()=>{
    setname("Bibi")
  }
  


  const countUp = ()=>{
    setCount(count+1)
  }
  const countDown = ()=>{
    setCount(count-1)
  }

  return (
    <>
    <div className={gender == "male" 
    ? "text-red-500 text-4xl" 
    : "text-green-300 text-4xl"
    }>
      <p style={gender == "male" ? {fontSize: "20px"} : {fontSize: "10px"}}>hello</p>
      {status == true ? <h1>true</h1> : <p>false</p>}

      {allStudents.map((items)=>(
        <div key={items.id} className="flex">
          <h1 className="flex-1">{items.firstName}</h1>
          <h1>{count}</h1>
          <h1 className="flex-1">{items.lastName}</h1>
        </div>
      ))}


    </div>
    <div>
    <p>{name}</p>
      <button onClick={changeName} className="bg-red-800 p-3">Change name</button>
    </div>

    <div>
      <button onClick={countDown} className="bg-red">Decreament</button>
      <h1>{count}</h1>
      <button onClick={countUp} className="bg-red">Increament</button>
    </div>
    </>
  )
}

export default Classwork01