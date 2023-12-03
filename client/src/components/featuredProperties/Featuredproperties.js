import './featuredProperties.css'

const Featuredproperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt='' className="fpImg"></img>
                <span className='fpName'>Aparthotel Stare Miasto</span>
                <span className='fpCity'>Old Town, Poland, Kraków</span>
                <span className='fpPrice'>Starting from ₹ 11,909</span>
                <div className='fpRating'>
                    <button>8.7</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=" alt='' className="fpImg"></img>
                <span className='fpName'>3 Epoques Apartments by Adrez Living</span>
                <span className='fpCity'>Prague 1, Czech Republic, Praha 1</span>
                <span className='fpPrice'>Starting from ₹ 9,206</span>
                <div className='fpRating'>
                    <button>8.7</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt='' className="fpImg"></img>
                <span className='fpName'>7Seasons Apartments Budapest</span>
                <span className='fpCity'>06. Terézváros, Hungary, Budapest</span>
                <span className='fpPrice'>Starting from ₹ 7,692</span>
                <div className='fpRating'>
                    <button>8.7</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt='' className="fpImg"></img>
                <span className='fpName'>Villa Domina</span>
                <span className='fpCity'>Split City Centre, Croatia, Split</span>
                <span className='fpPrice'>Starting from ₹ 4,332</span>
                <div className='fpRating'>
                    <button>9.3</button>
                    <span>Superb</span>
                </div>
            </div>
        </div>
    )
}

export default Featuredproperties;