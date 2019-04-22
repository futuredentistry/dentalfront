import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const images = {
    'Top right': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/images%20(2).jpeg?alt=media&token=28fa66a7-3625-492b-ad4d-8eb04a193f6e',
    'Top middle': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/new-crown-biting-surface.jpg?alt=media&token=befcdfb3-df75-460e-bbef-4c1f77ef9afe',
    'Top left': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/Direct6.gif?alt=media&token=b07cb63c-40f6-4d0a-b27e-df024c37efab',
    'Bottom right': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/caries5.jpg?alt=media&token=3bd24a79-aee8-4784-848e-1f6d5c89731c',
    'Bottom middle': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/new-crown-biting-surface.jpg?alt=media&token=befcdfb3-df75-460e-bbef-4c1f77ef9afe',
    'Bottom left': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/maxresdefault.jpg?alt=media&token=d34b37a3-29a6-47cc-9b01-a5246fe0adfb',
}

const Chart = () => (
    <>
        {Object.keys(images).map((key, i) => {
            console.log(key, i)
            return (
                <div key={key}>
                    <Grid
                      container
                      spacing={0}
                      direction="row"
                    >
                        <Grid item xs={6}>
                            <Typography variant="h5">
                                {key}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                              variant="text"
                              color="primary"
                              onClick={() => {

                                }
                                }
                            >
                                Report an issue
                            </Button>
                        </Grid>
                    </Grid>
                    <img
                      src={images[key]}
                      alt=""
                      style={{
                            maxWidth: '-webkit-fill-available',
                            padding: '5%',
                        }}
                    />
                </div>
            )
        })
        }

    </>
)

export default Chart
