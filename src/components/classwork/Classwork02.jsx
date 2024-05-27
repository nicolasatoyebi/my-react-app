import { useState } from "react"


    

const Classwork02 = () => {

    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')


    const Register = (e)=>{
        e.preventDefault()
        setFirstName(userFirstName);
        setLastName(userLastName);
        setEmail(userEmail);
        setPassword(userPassword);

    //    let newdetail = 
    }

    // const enterValues = [Register]
  

  return (
    <div >

        <form action="" className="flex flex-col items-center gap-2">
        <label htmlFor="">First Name</label>
        <input type="text" placeholder="Enter your first name" onChange={(e)=>setUserFirstName(e.target.value)} 
        className="border border-green-200 px-4 py-2 shadow-md rounded-lg" id="firstName"/>

        
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder="Enter your last name" onChange={(e)=>setUserLastName(e.target.value)}
        className="border border-green-200 px-4 py-2 shadow-md rounded-lg" id="lastName"/>

        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter valid email address" onChange={(e)=>setUserEmail(e.target.value)} required
        className="border border-green-200 px-4 py-2 shadow-md rounded-lg" id="email"/>

        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter password" onChange={(e)=>setUserPassword(e.target.value)}
        className="border border-green-200 px-4 py-4 shadow-md rounded-lg" id="password"/>



        <button className="bg-green-500 px-6 py-3 rounded-full mt-6 mb-6" onClick={Register}>Register</button>

        {/* <Button  name ="Register" style=""/> */}

        </form>

        <div>
            <table>
               
                <th className="grid grid-cols-12 border text-center">
                
                    <td className="col-span-3">First Name</td>
                    <td className="col-span-3">Last Name</td>
                    <td className="col-span-3">Email</td>
                    <td className="col-span-2">Password</td>
                
                </th>

                <tbody className="grid grid-cols-12 border text-center">
                    <td className="col-span-3">{firstName}</td>
                    <td className="col-span-3">{lastName}</td>
                    <td className="col-span-3">{email}</td>
                    <td className="text-center col-span-2">{password}</td>
                </tbody>
            </table>
        </div>


    </div>


  )
}

export default Classwork02