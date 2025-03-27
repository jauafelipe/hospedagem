import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


type PropsCard = {
    image: string
}
export const CardComponent = ({ image }: PropsCard) => {
    return (
        <Card sx={{ maxWidth: 300, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <CardActionArea sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button style={{ color: "white", backgroundColor: " oklch(0.627 0.194 149.214)" }} size="small">
                    quero conhecer
                </Button>
            </CardActions>
        </Card>
    );
}