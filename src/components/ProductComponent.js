import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import './Product.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    rowRoot: {
        flexGrow: 1,
    }
}));

export default function ProductCard(props) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.rowRoot}>
                <Grid container spacing={3}>
                    {props.products && props.products.map((product, index) => {
                        return (<Grid item md={3} xs={6} key={index}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">{product.description}
                                        </Typography>
                                        <div className="price_box">
                                            <Typography gutterBottom variant="h5" component="h6"><span className="price_cut">${product.price}</span></Typography>
                                            <Typography gutterBottom variant="h5" component="h6"><span className="offer_price">${product.offer_price ? product.offer_price : product.price}</span></Typography>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => props.editHandler(product.id)}> Edit</Button>
                                    <Button size="small" color="primary" onClick={() => props.deleteHandler(index)}>Delete </Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                    })}
                </Grid>
            </div>
        </>
    );
}
