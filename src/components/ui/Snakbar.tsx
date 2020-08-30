import React from 'react'
import { Snackbar, Dialog } from '@material-ui/core'

interface ISnackbar {
    severity: string;
    message: string;
    open: boolean;
    close: any;
}
const Snakbar: React.FC<ISnackbar> = (props) => {

    // return <Dialog fullScreen open={props.open} onClose={() => props.close(false)} style={{ backgroundColor: "pink" }}>
    //     <h1 style={{ fontSize: 300, textAlign: 'center', backgroundColor: "pink" }}>GAGA</h1>
    // </Dialog>
    return <Snackbar
        open={props.open}
        onClose={() => props.close(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={1000}
        message={props.message}
    />
}

export default Snakbar
