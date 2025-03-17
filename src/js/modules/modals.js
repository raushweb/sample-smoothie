const modals = () => {
    function bindModal(trgger, modal, close) {
        trgger.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });
    }

    const btn = document.querySelector('.popup_btn'),
          modalName = document.querySelector('.popup_name'),
          modalClose = document.querySelector('popup_name .popup_close');

    bindModal(btn, modalName, modalClose);
};

export default modals;