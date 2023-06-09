import { ReturnFromSave, ReturnFromDelete, ReturnFromEdit } from "./urlSearchParams.js";

let StartFunc = () => {
    if (ReturnFromSave().FromSave) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-top',
            width: 500,
            color: ' #000080',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Created in successfully'
          })
    };

    let jVarLocalFromDelete = ReturnFromDelete();

    if (jVarLocalFromDelete.FromDelete) {
        // argon.showSwal('auto-close')

        let timerInterval
        Swal.fire({
            title: `Deleted successfully... ${jVarLocalFromDelete.RowPK}`,
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    };

    LocalFromEditFunc();
};

let LocalFromEditFunc = () => {
    let jVarLocalFromEdit = ReturnFromEdit();

    if (jVarLocalFromEdit.FromEdit) {
        let timerInterval;

        Swal.fire({
            title: `Updated successfully... ${jVarLocalFromEdit.RowPK}`,
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    };
};

export { StartFunc };