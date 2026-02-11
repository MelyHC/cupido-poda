import { Card } from 'react-bootstrap';

const CardCustom = ({title, body}) => {
  return (
    <Card className='px-0 col-sm-6 col-md-4'>
      <Card.Body>
        <Card.Title className='text-base-inverted'>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardCustom