import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){

    const image_URL="https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.jpg?s=612x612&w=is&k=20&c=T4urKOWGmdb6SQWrtbnzkHg2QoBHu2RnJOaRaYDRHX4="
  let COLD_URL="https://i.pinimg.com/564x/76/5e/9b/765e9b4e06d393fef8827a36ebbfac24.jpg"
  let HOT_URL="https://i.pinimg.com/564x/46/a4/78/46a478c2f86f516eb96f4ba7952723c6.jpg"
  let RAIN_URL="https://i.pinimg.com/564x/92/7b/a9/927ba9db3bb6200acb416c9276664760.jpg"

 
    return(
<div className={`infoBox ${info.city ? 'show' : ''}`}>
          <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          
          image={info.weather=="light rain" ? RAIN_URL:info.weather=="cloudy"? COLD_URL: HOT_URL }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city}
          </Typography>
          <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
         
         <p>Temprature:{Math.floor(info.tempMin)}&deg;C</p>
         <p>Humidity:{info.humidity}</p>
         <p>Weather:{info.weather}</p>
         <p>Feels-Like:{ Math.floor(info.feels_Like)}</p>
          </Typography>
        </CardContent>
    </Card>
    </div>
        </div>
    )
}