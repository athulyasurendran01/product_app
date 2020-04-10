import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function AddProduct(props) {

    const [open, setOpen] = useState(true);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const selectedItem = props.products.find((item) => item.id == props.selectedProduct)

    useEffect(() => {
        if (props.selectedProduct) {
            setName(selectedItem.name)
            setPrice(selectedItem.price)
        }
    }, [props.selectedProduct]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const productId = selectedItem ? selectedItem.id : null;
        if (name && price) {
            const newProduct = {
                id: productId,
                name: name,
                price: price
            }
            props.addProduct(newProduct);
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Add New Product"}</DialogTitle>
                <DialogContent>
                    <TextField defaultValue={name} onChange={e => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" /><br /><br />
                    <TextField defaultValue={price} onChange={e => setPrice(e.target.value)} type="number" id="outlined-basic" label="Price" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.AddProductHandleClose} color="primary"> Close </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus> Save </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
