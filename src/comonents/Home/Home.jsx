import './home.css'
import t1 from '../../assets/t1.jfif'
import Swal from 'sweetalert2'

const Home = () => {
  function suc(){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Product has been Added To The Cart Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div className='cards'>
      <div className="card">
        <img src={t1} alt="" />
        <h2>Price : <span>199.99$</span> 99.99$ Sale 50%</h2>
        <button onClick={suc}>Add This Product To The Cart</button>
      </div>
      <div className="card">
        <img src={t1} alt="" />
        <h2>Price : <span>199.99$</span> 99.99$ Sale 50%</h2>
        <button onClick={suc}>Add This Product To The Cart</button>
      </div>
      <div className="card">
        <img src={t1} alt="" />
        <h2>Price : <span>199.99$</span> 99.99$ Sale 50%</h2>
        <button onClick={suc}>Add This Product To The Cart</button>
      </div>
      <div className="card">
        <img src={t1} alt="" />
        <h2>Price : <span>199.99$</span> 99.99$ Sale 50%</h2>
        <button onClick={suc}>Add This Product To The Cart</button>
      </div>
      <div className="card">
        <img src={t1} alt="" />
        <h2>Price : <span>199.99$</span> 99.99$ Sale 50%</h2>
        <button onClick={suc}>Add This Product To The Cart</button>
      </div>
      <div className="card">
        <img src={t1} alt="" />
        <h2>Price : <span>199.99$</span> 99.99$ Sale 50%</h2>
        <button onClick={suc}>Add This Product To The Cart</button>
      </div>
    </div>
  )
}

export default Home
