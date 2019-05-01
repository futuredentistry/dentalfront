import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { differenceInYears } from 'date-fns'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const Review = ({
  firstName,
  familyName,
  birthDate,
  comfortable,
  allergies,
  allergiesList,
}) => {
  const { setDark, setShow } = useContext(HeaderFooterContext)
  useEffect(() => {
    setDark(false)
    setShow(false)
  }, [])
  return (
    <>
      <Typography variant="h4">
        You'll be seeing
                {' '}
        {capitalizeFirstLetter(firstName)}
        {' '}
        {capitalizeFirstLetter(familyName)}
      </Typography>

      <Typography variant="body2">

        {capitalizeFirstLetter(firstName)}
        {' is '}
        <b>
          {differenceInYears(
            new Date(),
            new Date(birthDate.seconds.toString().substring(0, 10) * 1000),
          )}

        </b>
        {' years old and '}
        {allergies === 'yes' ? (
          <b>
            is allergic
            {' '}
            {allergiesList}
          </b>
        ) : 'not allergic'}
      </Typography>

      <br />
      {comfortable === 'no' && (
        <Typography variant="body2">
          They are also
        {' '}
          <b>uncomfortable</b>
          {' '}
          with dental procedures, you can make them more comfortable by talking through what you're about to do before touching their mouth.
        </Typography>
      )}

      {comfortable === 'yes' && (
        <Typography variant="body2">
          They are also
        {' '}
          <b>comfortable</b>
          {' '}
          with dental procedures.
        </Typography>
      )}
    </>
  )
}

Review.propTypes = {
  firstName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  birthDate: PropTypes.shape({
    seconds: PropTypes.number.isRequired,
    nanoseconds: PropTypes.number.isRequired,
  }).isRequired,
  comfortable: PropTypes.string.isRequired,
  allergies: PropTypes.string.isRequired,
  allergiesList: PropTypes.string.isRequired,
}

export default Review
