import { Link } from 'react-router-dom'
import "./Categories.css"
const Categories = () => {
    const categories = [
        {
            title: "electronics",
            image: 'https://2.imimg.com/data2/UP/MK/MY-3812101/electronics.jpg'
        },
        {
            title: "jewelery",
            image: 'https://rukminim2.flixcart.com/image/850/1000/kxjav0w0/jewellery-set/y/f/s/na-na-jlr14-free-size-lily-original-imag9yt6x3exxneu.jpeg?q=20&crop=false'
        },
        {
            title: "men's clothing",
            image: "https://n.nordstrommedia.com/id/95b689e1-64b7-400e-b6a1-df34e4485574.jpeg?h=500&w=500"
        },
        {
            title: "women's clothing",
            image: "https://cdn.salehoo.com/files/image/dropship/ds-img-womens-clothing-02.png"
        }
    ]
    return (
        <div className="py-3 py-md-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-4">Our Categories</h4>
                    </div>
                    {categories.map((category, index) =>
                        <div className="col-6 col-md-3 rounded border-primary" key={index}>
                            <div className="category-card rounded border-primary">
                                <Link to={"/categories/" + category.title}>
                                    <div className="category-card-img rounded">
                                        <img src={category.image} className="w-100 rounded" alt="Laptop" />
                                    </div>
                                    <div className="category-card-body">
                                        <h5>{category.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Categories
