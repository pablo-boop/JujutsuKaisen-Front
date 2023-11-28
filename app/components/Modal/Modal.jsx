//Import de estilo
import styles from './modal.module.css'

//Import de estado
import { useState } from 'react';

//Import do component do Mui Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//Component de Modal
const ModalPopUp = ({ buttonTitle, modalTitle, modalContent, modalImg }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} className={styles.button}>{buttonTitle}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={styles.modal}
            >
                <Box className={styles.box}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.title}>
                        {modalTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className={styles.content}>
                        {modalContent}
                    </Typography>
                    <img src={modalImg} alt="Imgem Modal"  className={styles.img}/>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalPopUp;