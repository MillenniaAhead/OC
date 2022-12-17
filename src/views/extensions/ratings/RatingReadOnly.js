// ** Third Party Components
import Rating from 'react-rating'
import { Star } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const RatingReadOnly = ({ filledColor, dir }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Readonly</CardTitle>
      </CardHeader>
      <CardBody>
        <Rating
          readonly
          direction={dir}
          initialRating={2}
          emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
        />
      </CardBody>
    </Card>
  )
}

export default RatingReadOnly
