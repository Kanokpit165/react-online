import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner, Card, CardDeck } from 'react-bootstrap'
import axios from 'axios'

const DetailPage = () => {
  const { id, title } = useParams()
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        'https://api.codingthailand.com/api/course/' + id,
      )
      setDetail(res.data.data)
    } catch (error) {
      setError(error.response.data.message)
      console.error(error.response)
    } finally {
      setLoading(false)
    }
  }, [id])

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
          <h2>DetailPage</h2>
          <p>id: {id}</p>
          <p>title: {title}</p>
          <div className="row">
            <CardDeck>
              {detail.length > 0 ? (
                detail.map((d, index) => {
                  return (
                    <div className="col-md-4" key={d.ch_id}>
                      <Card className="mb-4 shadow-sm¸¸Zˇ">
                        <Card.Body>
                          <Card.Title>{d.ch_title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">{d.ch_dateadd}</small>
                        </Card.Footer>
                      </Card>
                    </div>
                  )
                })
              ) : (
                <h1>No Data</h1>
              )}
            </CardDeck>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailPage