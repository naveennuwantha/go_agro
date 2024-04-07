
import './complaint.css'
import image1 from '../image/complaint.jpg'

export const Complaint = () => {
    return (
        <div className='container'>
            <div className='image'>

                <img src={image1} className='w-10/12 ml-7 mt-10' alt="" />
            </div>

            <div className='form1' >

                <form className='f1 shadow-2xl ml-32 mt-14 rounded-2xl mb-10 ' action="">
                    <h1 className='h1 text-4xl font-serif mt-4 ml-44'>Complaints</h1>

                    <label htmlFor="email" className='mt-9'>Email : </label>
                    <input id='email' type="email" />
                    <label htmlFor="phone">Contact number : </label>
                    <input id='phone' type="text" />
                    <select className='s1 bg-transparent w-52 relative text-xl font-serif mt-4 ' name="" id="">
                        <option value="technical">Technical</option>
                        <option value="payment">Payment</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor='description' className='mt-5'>Description</label>
                    <textarea id='description' className='t1 font-serif text-2xl outline-none bg-transparentborder border-2 border-black rounded-md w-4/5 mt-2 bg-transparent '></textarea>
                    <label htmlFor="image">Add Image</label>
                    <input type="file" className='mb-10' />

                </form>
            </div>
        </div>
    )
}
