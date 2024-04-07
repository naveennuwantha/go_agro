import './Signup.css'



export const SignUp = () => {


  return (
    <div style={{}} className='main'>
      <h2 className=' text-5xl font-serif  ' >Sign Up</h2>
      <form>
        <div className='inputs'>
          <label htmlFor="Name">Username:</label>
          <input
            type="text"
            id="username"
            name="username"

          />

        </div>
        <div className='inputs'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"

          />

        </div>
        <div className='inputs'>
          <label htmlFor="password"  >Password:</label>
          <input
            type="password"
            id="password"
            name="password"

          />

        </div>
        <div className='inputs' >
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />

        </div>
        <div className='inputs' >
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
          />

        </div>
        <div className='inputs' >
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type=''
          />
          <select >

          </select>

        </div>
        <button className='button' type="submit" >
          Sign Up
        </button>
      </form>
    </div>
  )
}
