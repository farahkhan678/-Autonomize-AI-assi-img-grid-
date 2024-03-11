import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const eachItem = await response.json()
    const updatedData = {
      id: eachItem.id,
      title: eachItem.title,
      price: eachItem.price,
      description: eachItem.description,
      category: eachItem.category,
      image: eachItem.image,
      rate: eachItem.rating.rate,
      count: eachItem.rating.count,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {id, title, image, price, description, rate, count} = blogData

    return (
      <div className="blog-info">
        <h1>Item Details</h1>
        <img className="blog-item-image" src={image} alt={`item${id}`} />
        <h2 className="blog-details-title">{title}</h2>
        <div>
          <p>Description : {description}</p>
          <h3> Price :{price}</h3>
          <p>Rate :{rate}</p>
          <p>Count : {count}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="pink" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
