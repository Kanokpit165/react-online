import React, { useState, useEffect } from 'react'
import { Table, Image, Badge, Spinner, Button } from 'react-bootstrap'
import { MdAdsClick } from 'react-icons/md'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://api.codingthailand.com/api/course')
      setProduct(res.data.data)
    } catch (error) {
        setError(error.response.data.message)
        console.error(error.response)
      } finally {
        setLoading(false)
      }
    }, [])
    if (loading) {
      return (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }
    if (error) {
      return (
        <div className="text-center mt-5 text-danger">
          <h4>Error from API, please try again</h4>
          <p>{error}</p>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2>Product Page</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Details</th>
                  <th>Created Date</th>
                  <th>View</th>
                  <th>Picture</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.detail}</td>
                      <td>{item.date}</td>
                      <td>
                        <Badge variant="success">{item.view}</Badge>
                      </td>
                      <td>
                        <Image
                          src={item.picture}
                          alt={item.title}
                          width="70"
                          rounded
                        />
                      </td>
                      <td>
                      <Link to={`/detail/${item.id}/title/${item.title}`}>
                      <Button variant="outline-info">
                        Click
                        <MdAdsClick />
                      </Button>
                      </Link>

                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
export default ProductPage