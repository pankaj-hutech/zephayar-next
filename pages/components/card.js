
import React from "react";
import { cardInfo } from "../api/image";
import styles from './footer.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Cards = () => {

    const renderCard = (card, index) => {
        return (
            <div className={styles.card}>
                <Card sx={{ maxWidth: 345, padding: 5, display: "inline", margin: "4px" }}
                    // className={styles.card}
                    title={card.title}
                >
                    <CardMedia
                        title={card.title}
                        component="img"
                        height="140"
                        image={card.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        {/* <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography> */}
                        {card.title}

                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </div>
        );
    };

    return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Cards;
