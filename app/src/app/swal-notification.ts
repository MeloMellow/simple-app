import Swal from 'sweetalert2';

export abstract class notify {
  private static isLoading = false;

  static unLoad() {
    if (this.isLoading) {
      this.isLoading = false;
      Swal.close();
    }
  }
  static close() {
    this.unLoad();
    Swal.close();
  }
  static loading() {
    Swal.fire({
      html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#1b75be" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
      <!-- [ldio] generated by https://loading.io/ --></svg>`,
      title: 'Loading...',
      position: 'top',
      allowEnterKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    this.isLoading = true;
  }
  static unauthorized(callback: Function) {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      position: 'top',
      text: 'You must be logged in to access this feature',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    }).then(() => {
      callback();
    });
  }
  static wrongCredentials() {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      position: 'top',
      title: 'Oops...',
      text: 'Something went wrong with your credentials!',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static serverError() {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      position: 'top',
      title: 'Oops...',
      text: 'Something went wrong with the server!',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static commonHttpError() {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      position: 'top',
      title: 'Oops...',
      text: 'Something went wrong with the request!',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static noResponse() {
    this.unLoad();
    Swal.fire({
      icon: 'info',
      position: 'top',
      title: 'Oops...',
      text: 'The server did not respond to your request, please try again another time',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static conflictCredentials() {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      position: 'top',
      title: 'Oops...',
      text: 'This email is not available',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static forbidden() {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      position: 'top',
      title: 'Oops...',
      text: 'You are not authorized to access this feature',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static accountCreated() {
    this.unLoad();
    Swal.fire({
      icon: 'success',
      position: 'top',
      text: 'Account created with success!',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static bookAdded() {
    this.unLoad();
    Swal.fire({
      icon: 'success',
      position: 'top',
      text: 'Book added with success!',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static bookUpdated() {
    this.unLoad();
    Swal.fire({
      icon: 'success',
      position: 'top',
      text: 'Book updated with success!',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static bookDeleted() {
    this.unLoad();
    Swal.fire({
      text: 'The book has been removed!',
      icon: 'success',
      position: 'top',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static deleteBook(callback: Function) {
    this.unLoad();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      position: 'top',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }
  static message(text: string, title?: string) {
    this.unLoad();
    Swal.fire({
      text,
      title: title,
      position: 'top',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static pokemonNotFound() {
    this.unLoad();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      position: 'top',
      text: 'This pokemon was not found',
      buttonsStyling: false,
      confirmButtonText: 'Ok',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  }
  static isNoityVisible(): boolean {
    return Swal.isVisible();
  }
}
