import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import Propertylist from '../../components/propertyList/Propertylist'
import Featuredproperties from '../../components/featuredProperties/Featuredproperties'



const Home = () => {
    return (
        <>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
            <Featured/>
            <h1 className='homeTitle'>Brow by property type</h1>
            <Propertylist/>
            <h1 className='homeTitle'>Homes guests love</h1>
            <Featuredproperties/>
        </div>
        </>
    )
}

export default Home