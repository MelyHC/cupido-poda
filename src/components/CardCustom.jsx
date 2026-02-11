import { Card } from 'react-bootstrap';

const CardCustom = ({ title, body, subtitle, addbody }) => {
  return (
    <Card className='px-0 col-sm-6 col-md-4'>
      <Card.Body>
        <Card.Title className='text-base-inverted'>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{subtitle}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
        <Card.Text>{addbody}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardCustom