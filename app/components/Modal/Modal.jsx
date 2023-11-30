//Import de estilo
import styles from './modal.module.css'

//Import de estado
import { useState } from 'react';
import { motion } from 'framer-motion';

//Import do component do Mui Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//Component de Modal
const ModalPopUp = ({ buttonTitle, modalTitle, modalContent, modalImg, style }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

<<<<<<< HEAD

=======
    // Adicione o estado para name, email e comment
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const verify = () => {
        if(name == "" || email == "" || comment == "") {
            return true
        } else {
            return false
        }
    }
>>>>>>> ffdbd1e7b5b0357d8649468bfc6e1e49b38c5f04

    return (
        <div>
            <motion.button
<<<<<<< HEAD
            onClick={handleOpen}
=======
            onClick={() => {
                if(verify()) { // Chame verify como uma função
                    alert("Error")
                } else {
                    handleOpen() // Chame handleOpen como uma função
                    alert("Correct")
                }
            }}
>>>>>>> ffdbd1e7b5b0357d8649468bfc6e1e49b38c5f04
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={style}>{buttonTitle}</motion.button>
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
                    <img src={modalImg} alt="Imgem Modal" className={styles.img} />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalPopUp;