import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

type CardProps = { img: string }
export function CardComponent({ img }: CardProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
            </CardActionArea>
        </Card>
    );
}